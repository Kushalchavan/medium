import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Editor from "../components/Editor";
import { useBlog, useUpdateBlog } from "../hooks/useBlog";
import { Loader2 } from "lucide-react";
import { uploadImage } from "../lib/cloudinary";

const EditBlog = () => {
  const { id } = useParams<{ id: string }>();
  const { data: blog, isLoading } = useBlog(id!);
  const { mutate: updateBlog, isPending } = useUpdateBlog(id!);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let imageUrl: string | undefined = blog?.image;
    if (file) {
      imageUrl = await uploadImage(file);
    }

    updateBlog(
      { title, content, image: imageUrl },
      {
        onSuccess: () => navigate(`/blogs/${id}`),
      }
    );
  };

  if (isLoading) return <Loader2 className="animate-spin" />;

  return (
    <div className="w-screen h-auto px-20 mt-10">
      <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-7">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-lg w-full"
          placeholder="Enter title"
          required
        />

        <input
          type="file"
          className="file-input w-full"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        <Editor value={content} onChange={setContent} />

        <button className="btn btn-neutral">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Update"}
        </button>
      </form>
    </div>
  );
};
export default EditBlog;
