import express from "express";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";
const router = express.Router();

import { createCategory } from "../controllers/categoryController.js";

router.route("/").post(authenticate, authorizeAdmin, createCategory);
export default router;
