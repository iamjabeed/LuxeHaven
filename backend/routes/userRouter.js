import express from "express";
import {
  createUser,
  loginUser,
  logoutCurrentUser,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.post("/auth", loginUser);
router.post("/logout", logoutCurrentUser);

export default router;
