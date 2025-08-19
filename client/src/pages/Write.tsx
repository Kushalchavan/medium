import { useNavigate } from "react-router-dom";
import Editor from "../components/Editor";
import { useCreateBlog } from "../hooks/useBlock";
import { Loader2 } from "lucide-react";

const Write = () => {
  const { mutate: createBlog, isPending } = useCreateBlog();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    createBlog(
      { title, content },
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
        />

        <input type="file" className="file-input w-full" />

        <Editor />

        <button className="btn btn-neutral">
          {isPending ? <Loader2 className="w-5 h-5 animate-spin" /> : "Publish"}
        </button>
      </form>
    </div>
  );
};
export default Write;
