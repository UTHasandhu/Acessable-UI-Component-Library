// src/sandbox/Editor/Editor.tsx
import React from "react";

type EditorProps = {
  code: string;
  onChange: (newCode: string) => void;
};

const Editor: React.FC<EditorProps> = ({ code, onChange }) => {
  return (
    <textarea
      className="w-full h-full font-mono text-sm bg-gray-900 text-green-300 p-2 resize-none"
      value={code}
      onChange={(e) => console.log(e.target.value)}
    />
  );
};

export default Editor;
