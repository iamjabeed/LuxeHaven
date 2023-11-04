import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const authenticate = asyncHandler(async (req, res, next) => {
  let token;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
  if (token) {
    try {
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed." });
      throw new Error("Not authorized, token failed.");
    }
  } else {
    res.status(401).json({ message: "Not authorized, token failed." });
    throw new Error("Not authorized,Invalid JWT token.");
  }
});

// Check if the user is admin (role validations)
const authorizeAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: "Not authorized as an admin." });
    throw new Error("Not authorized as an admin.");
  }
};

export { authenticate, authorizeAdmin };
