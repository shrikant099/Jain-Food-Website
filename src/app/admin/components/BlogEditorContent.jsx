"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function BlogEditor({ value, onChange }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content: value,

    // 🔥 THIS IS THE FIX
    immediatelyRender: false,

    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose max-w-none min-h-[200px] focus:outline-none p-4",
      },
    },
  });

  if (!editor) return null;

  return (
    <div className="border rounded-lg bg-white">
      <Toolbar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}

function Toolbar({ editor }) {
  return (
    <div className="flex gap-2 border-b p-2 flex-wrap">
      <Btn
        active={editor.isActive("bold")}
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        B
      </Btn>
      <Btn
        active={editor.isActive("italic")}
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        I
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleBulletList().run()}>
        • List
      </Btn>
      <Btn onClick={() => editor.chain().focus().toggleOrderedList().run()}>
        1. List
      </Btn>
    </div>
  );
}

function Btn({ children, onClick, active }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-3 py-1 border rounded ${
        active ? "bg-orange-600 text-white" : "bg-gray-100"
      }`}
    >
      {children}
    </button>
  );
}
