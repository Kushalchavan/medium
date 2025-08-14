import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Editor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Start typing...",
      });
    }
  }, []);

  return <div ref={editorRef} style={{ height: "300px" }} />;
};

export default Editor;
