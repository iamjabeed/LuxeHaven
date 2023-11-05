import express from "express";
import formidable from "express-formidable";
const router = express.Router();

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
import checkId from "../middlewares/checkId.js";
import {
  addProduct,
  updateProductDetails,
  removeProduct,
} from "../controllers/productController.js";

router.route("/").post(authenticate, authorizeAdmin, formidable(), addProduct);
router
  .route("/:id")
  .put(authenticate, authorizeAdmin, formidable(), updateProductDetails)
  .delete(authenticate, authorizeAdmin, formidable(), removeProduct);

export default router;
