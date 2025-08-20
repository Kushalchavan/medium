import { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const Editor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (content: string) => void;
}) => {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        placeholder: "Start typing...",
      });

      // Set initial value
      if (value) {
        quillRef.current.clipboard.dangerouslyPasteHTML(value);
      }

      // Listen for changes
      quillRef.current.on("text-change", () => {
        const html = quillRef.current?.root.innerHTML || "";
        onChange(html);
      });
    }
  }, []);

  useEffect(() => {
    if (quillRef.current && value !== quillRef.current.root.innerHTML) {
      quillRef.current.clipboard.dangerouslyPasteHTML(value);
    }
  }, [value]);

  return <div ref={editorRef} style={{ height: "300px" }} />;
};

export default Editor;
