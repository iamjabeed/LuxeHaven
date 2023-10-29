// packages

import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// Utiles

import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
const port = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api/v1/users", userRouter);
// app.get("/api/v1", (req, res) => {
//   res.json({ message: "Welcome" });
// });
console.clear();

app.listen(port, () => console.log(`Server running on port: ${port}`));
