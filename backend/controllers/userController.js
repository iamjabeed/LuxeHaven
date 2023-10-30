import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";
import generateToken from "../utils/createToken.js";

// @desc    Register new user
// @route   POST /api/v1/users

const createUser = asyncHandler(async (req, res) => {
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    throw new Error("Invalid user, Please fill all the required fields");
  }

  //Check if the user already exists
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPass = await bcrypt.hash(password, salt);

  //create a new user
  const newUser = new User({ username, email, password: hashedPass });

  try {
    await newUser.save();

    //To generate jwt token
    generateToken(res, newUser._id);

    res.json({
      _id: newUser._id,
      username: newUser.username,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
    });
  } catch (error) {
    console.log(error.message);
  }

  //   res.json({ message: "user created successfully", username, password, email });
});

// @desc    Login the user
// @route   POST /api/v1/users/auth

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //verify user exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    const isPasswordValid = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (isPasswordValid) {
      generateToken(res, existingUser._id);
      res.status(200).json({
        _id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
        isAdmin: existingUser.isAdmin,
      });
      return;
    }
  } else {
    res.status(400);
    throw new Error("User not found");
  }
});

// @desc    Logout the current user
// @route   POST /api/v1/users/logout
const logoutCurrentUser = asyncHandler(async (req, res) => {
  res.cookie("jwt", "", {
    httyOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});
export { createUser, loginUser, logoutCurrentUser };
