import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { useCreateBlog } from "../hooks/useBlog";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { uploadImage } from "../lib/cloudinary";

const Write = () => {
  const { mutate: createBlog, isPending } = useCreateBlog();
  const navigate = useNavigate();
  const [file, setFile] = useState<File | null>(null);
  const [content, setContent] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;

    let imageUrl: string | undefined;
    if (file) {
      imageUrl = await uploadImage(file);
    }

    createBlog(
      { title, content, image: imageUrl },
      {
        onSuccess: () => navigate("/home"),
      }
    );
  };

  return (
    <div className="w-screen h-auto px-20 mt-10">
      <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-7">
        <input
          type="text"
          name="title"
          className="input input-lg w-full"
          placeholder="Enter title"
          required
        />

        <input
          type="file"
          className="file-input w-full"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />

        {/* Quill editor */}
        <Editor value={content} onChange={setContent} />

        <button className="btn btn-neutral">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish"}
        </button>
      </form>
    </div>
  );
};
export default Write;
