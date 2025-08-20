import { Link, useNavigate, useParams } from "react-router-dom";
import { useBlog, useDeleteBlog } from "../hooks/useBlog";
import { Loader2, Trash2 } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading } = useBlog(id!);
  const { mutateAsync: deleteBlog, isPending } = useDeleteBlog();
  const navigate = useNavigate();

  const handleDelete = async () => {
    if (!blog?._id) return;
    await deleteBlog(blog._id);
    navigate("/home");
  };

  if (isLoading)
    return (
      <div className="w-full flex justify-center items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="w-full mt-4 h-auto flex items-center flex-col gap-3">
      <h1 className="text-2xl font-semibold">{blog.title}</h1>
      <p className="text-xs text-base-content/60">{blog.author?.username}</p>

      <div
        className="prose max-w-none text-lg text-base-content/80"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {blog.image && (
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-80 object-cover mt-4"
        />
      )}

      <Link to={`/blogs/${blog._id}/edit`}>
        <button className="btn">Edit</button>
      </Link>

      <button
        onClick={handleDelete}
        className="btn btn-error flex items-center gap-1"
      >
        {isPending ? (
          <Loader2 className="animate-spin size-5" />
        ) : (
          <Trash2 className="size-5" />
        )}{" "}
        Delete
      </button>
    </div>
  );
};
export default BlogDetail;
