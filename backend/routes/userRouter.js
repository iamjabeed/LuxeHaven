import express from "express";
import { createUser, loginUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.post("/auth", loginUser);

export default router;
