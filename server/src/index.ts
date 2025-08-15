import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/connectDB";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTED_URL,
    credentials: true,
  })
);

app.listen(PORT, () => {
  connectDB();
  console.log("App is listening on port ", PORT);
});
