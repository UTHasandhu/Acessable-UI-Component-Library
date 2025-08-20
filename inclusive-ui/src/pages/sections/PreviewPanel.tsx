// src/sections/PreviewPanel.tsx
import React, { useState } from "react";
import Preview from "../../sandbox/Preview/Preview";
import Editor from "../../sandbox/Editor/Editor";
import ExportButton from "../../sandbox/Export/ExportButton";
import { componentDocs } from "../../data/componentDocs";

type PreviewPanelProps = {
  selectedComponent: string | null;
};

const PreviewPanel: React.FC<PreviewPanelProps> = ({ selectedComponent }) => {
  if (!selectedComponent) {
    return (
      <div className="w-full h-full flex items-center justify-center text-gray-500">
        Select a component to preview
      </div>
    );
  }

  const doc = componentDocs[selectedComponent];
  const [code, setCode] = useState(doc.code);
  const [appliedCode, setAppliedCode] = useState(doc.code);

  const handleApply = () => setAppliedCode(code);

  return (
    <div className="flex flex-col border-l border-gray-300 bg-white h-full overflow-y-auto">
      {/* Preview */}
      <div className="h-64 border-b border-gray-200">
        <Preview code={appliedCode} />
      </div>

      {/* Editor + Apply */}
      <div className="h-[500px] border-b border-gray-200 flex flex-col">
        <button
          onClick={handleApply}
          className="self-start mb-2 px-3 py-1 bg-green-600 text-white text-sm rounded shadow hover:bg-green-700"
        >
          Apply Code
        </button>
        <Editor code={code} onChange={setCode} />
      </div>

      {/* Export */}
      <div className="p-4">
        <ExportButton code={appliedCode} />
      </div>
    </div>
  );
};

export default PreviewPanel;
