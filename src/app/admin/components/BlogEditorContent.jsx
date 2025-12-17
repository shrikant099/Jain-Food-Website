"use client";

import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

export default function BlogEditorContent({ onChange }) {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        placeholder: "Write your blog content here...",
        tools: {
          header: {
            class: Header,
            inlineToolbar: true,
            config: {
              levels: [2, 3, 4],
              defaultLevel: 2,
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
          },
          paragraph: {
            class: Paragraph,
            inlineToolbar: true,
          },
        },
        async onChange() {
          const data = await editor.save();
          onChange(data);
        },
      });

      editorRef.current = editor;
    }

    // ✅ CLEANUP (NO destroy)
    return () => {
      editorRef.current = null;
    };
  }, []);

  return (
    <div
      id="editorjs"
      className="border rounded-lg p-4 bg-white min-h-[300px]"
    />
  );
}
