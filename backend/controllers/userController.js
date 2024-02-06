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
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: "Logged out successfully" });
});

// @desc    Get the all users (for admin only)
// @route   GET /api/v1/users/
const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.status(200).json(users);
});

// @desc    Get the current user
// @route   GET /api/v1/users/profile
const getCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("user not found");
  }
});

// @desc    Get the current user
// @route   PUT /api/v1/users/profile

// const updateCurrentUserProfile = asyncHandler(async (req, res) => {
//   const currentUser = await User.findById(req.user._id);

//   if (!currentUser) {
//     res.status(404);
//     throw new Error("User not found");
//   }

//   if (currentUser) {
//     // Check if the request body includes a new password
//     if (req.body.password) {
//       // Hash the new password with bcrypt
//       const salt = await bcrypt.genSalt(10);
//       const hashedPassword = await bcrypt.hash(req.body.password, salt);

//       req.body.password = hashedPassword;
//     }

//     // Update the user's profile, including the hashed password if it was provided
//     const updatedUser = await User.findByIdAndUpdate(req.user._id, req.body, {
//       new: true,
//     });

//     res.json(updatedUser);
//   }
// });

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;

    // Check if the request body includes a new password
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      user.password = hashedPassword;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Delete the user by id (admin only)
// @route   DELETE /api/v1/users/:id
const deleteUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  if (user) {
    // Check, If the user is an admin
    if (user.admin) {
      res.status(400);
      throw new Error("Can not delete Admin");
    }
    await User.deleteOne({ _id: user._id });
    res.status(200);
    res.json({ message: "successfully deleted!" });
  }
});

// @desc    Get the user by id (admin only)
// @route   GET /api/v1/users/:id
const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) return res.status(404).json({ message: "User not found" });

  if (user) {
    res.status(200);
    res.json(user);
  }
});

// @desc    Update the user by id (admin only)
// @route   PUT /api/v1/users/:id
const updateUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.isAdmin = Boolean(req.body.isAdmin);

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export {
  createUser,
  loginUser,
  logoutCurrentUser,
  getAllUsers,
  getCurrentUserProfile,
  updateCurrentUserProfile,
  deleteUserById,
  getUserById,
  updateUserById,
};
