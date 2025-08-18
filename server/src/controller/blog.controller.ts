import { Request, Response } from "express";
import Blog from "../model/blog.model";
import { AuthenticatedRequest } from "../types/Customtypes";

export const createBlog = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { title, content, image } = req.body;
    if (!title || !content)
      return res
        .status(400)
        .json({ message: "Title and content are required" });

    const blog = await Blog.create({
      title,
      content,
      image,
      author: req.userId,
    });
    res.status(201).json(blog);
  } catch (error) {
    console.log("Error in create blog controller ", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getBlog = async (req: Request, res: Response) => {
  const blogs = await Blog.find().populate("author", "name email");
  res.json(blogs);
};

export const getBlogById = async (req: Request, res: Response) => {
  const blog = await Blog.findById(req.params.id).populate("author", "name");
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.status(200).json(blog);
};

export const updateBlog = async (req: AuthenticatedRequest, res: Response) => {
  const { title, content, image } = req.body;
  const blog = await Blog.findById(req.params.id);

  if (!blog) return res.status(404).json({ message: "Blog not found" });
  if (blog.author.toString() !== req.userId)
    return res.status(401).json({ message: "Not authorized" });

  blog.title = title || blog.title;
  blog.content = content || blog.content;
  blog.image = image || blog.image;

  await blog.save();
  res.json(blog);
};

export const deleteBlog = async (req: AuthenticatedRequest, res: Response) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog) return res.status(404).json({ message: "Blog not found" });

  if (blog.author.toString() !== req.userId)
    return res.status(403).json({ message: "Not authoried" });

  await blog.deleteOne();
  res.status(200).json({ message: "Blog deleted" });
};
