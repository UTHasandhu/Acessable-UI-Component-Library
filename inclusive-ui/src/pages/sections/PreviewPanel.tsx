// src/sandbox/PreviewPanel.tsx
import React from "react";
import Preview from "../../sandbox/Preview/Preview";
import Description from "./Description/Description";
import Editor from "../../sandbox/Editor/Editor";
import ExportButton from "../../sandbox/Export/ExportButton";

const PreviewPanel: React.FC = () => {
  return (
    <div className="w-1/3 flex flex-col border-l border-gray-300 bg-white h-screen overflow-y-auto">
      {/* Preview section */}
      <div className="h-64 border-b border-gray-200">
        <Preview />
      </div>

      {/* Description section */}
      <div className="p-4 border-b border-gray-200">
        <Description />
      </div>

      {/* Editor section */}
      <div className="h-[500px] border-b border-gray-200">
        <Editor />
      </div>

      {/* Export button section */}
      <div className="p-4">
        <ExportButton />
      </div>
    </div>
  );
};

export default PreviewPanel;
