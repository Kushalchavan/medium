import mongoose from "mongoose";
import { BlogType } from "../shared/types";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      reqiured: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Blog = mongoose.model<BlogType>("Blog", blogSchema);
export default Blog;
