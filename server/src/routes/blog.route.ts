import express from "express";
import { verify } from "../middleware/verify.middleware";
import {
  createBlog,
  deleteBlog,
  getBlog,
  getBlogById,
  updateBlog,
} from "../controller/blog.controller";

const router = express.Router();

router.route("/").post(verify, createBlog);
router.route("/").get(getBlog);
router.route("/:id").get(getBlogById);
router.route("/:id").put(verify, updateBlog);
router.route("/:id").delete(verify, deleteBlog);

export default router;
