import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc    Add new product
// @route   POST /api/v1/product

const addProduct = asyncHandler(async (req, res) => {
  res.json("Product added successfully");
});

export { addProduct };
