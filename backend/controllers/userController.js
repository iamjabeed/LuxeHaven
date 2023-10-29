import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";

import User from "../models/userModel.js";

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

  const newUser = new User({ username, email, password: hashedPass });

  try {
    await newUser.save();
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
export { createUser };
