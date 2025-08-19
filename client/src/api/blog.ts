import { api } from "../lib/axios";

export type BlogPayload = {
  title: string;
  content: string;
  image?: string;
};

export type Blog = {
  _id: string;
  title: string;
  content: string;
  image?: string;
  author: {
    _id: string;
    username: string;
  };
};

export const createBlog = async (data: BlogPayload) => {
  const response = await api.post("/api/v1/blogs", data);
  return response.data;
};

export const getBlogs = async () => {
  const response = await api.get<Blog[]>("/api/v1/blogs");
  return response.data;
};

export const getBlogById = async (id: string) => {
  const response = await api.get<Blog>(`/api/v1/blogs/${id}`);
  return response.data;
};

export const updateBlog = async (id: string, data: BlogPayload) => {
  const response = api.put(`/api/v1/blogs/${id}`, data);
  return (await response).data;
};

export const deleteBlog = async (id: string) => {
  const response = await api.delete(`/api/v1/blogs/${id}`);
  return response.data;
};
