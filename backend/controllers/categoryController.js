import Category from "../models/categoryModel.js";

import asyncHandler from "express-async-handler";

// @desc    Create new category
// @route   POST /api/v1/category
const createCategory = asyncHandler(async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) res.status(400).json({ message: "Name should be required" });

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      res
        .status(400)
        .json({ message: `Category ${existingCategory.name} already exists` });
      throw new Error(`Category ${existingCategory.name} already exists`);
    }

    const category = await new Category({ name }).save();
    res.status(200).json(category);
  } catch (error) {
    console.log(error);
    return res.status(400).json(error);
  }
});

export { createCategory };
