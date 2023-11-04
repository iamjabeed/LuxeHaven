import Category from "../models/categoryModel.js";

import asyncHandler from "express-async-handler";

// @desc    Create new category
// @route   POST /api/v1/category
const createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) res.status(400).json({ message: "Name should be required" });
});

export { createCategory };
