import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  type Blog,
  type BlogPayload,
  createBlog,
  deleteBlog,
  getBlogById,
  getBlogs,
  updateBlog,
} from "../api/blog";

export const useBlogs = () => {
  return useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: getBlogs,
  });
};

export const useBlog = (id: string) => {
  return useQuery<Blog>({
    queryKey: ["blogs", id],
    queryFn: () => getBlogById(id),
    enabled: !!id, // only if exists
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BlogPayload) => createBlog(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

export const useUpdateBlog = (id: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BlogPayload) => updateBlog(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      queryClient.invalidateQueries({ queryKey: ["blogs", id] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteBlog(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
