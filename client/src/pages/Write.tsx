import Editor from "../components/Editor";

const Write = () => {
  return (
    <div className="w-screen h-auto px-20 mt-20">
      <div className="max-w-3xl flex flex-col gap-7">
        <input
          type="text"
          className="input input-lg w-full"
          placeholder="Enter title"
        />

        <input type="file" className="file-input w-full" />

        <Editor />

        <button className="btn btn-neutral">Publish</button>
      </div>
    </div>
  );
};
export default Write;
