import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/connectDB";
import userRoutes from "./routes/user.route";
import blogRoutes from "./routes/blog.route";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan("tiny"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use("/api/v1/auth", userRoutes);
app.use("/api/v1/blogs", blogRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("App is listening on port ", PORT);
});
