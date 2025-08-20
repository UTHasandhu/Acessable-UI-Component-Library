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
  const [appliedCode, setAppliedCode] = useState<string | null>(null);
  const [draftCode, setDraftCode] = useState<string | null>(null);

  if (!selectedComponent) {
    return (
      <div className="p-4 text-gray-500 flex items-center justify-center">
        Select a component to start
      </div>
    );
  }

  const comp = componentDocs[selectedComponent];
  const codeToRender = appliedCode ?? comp.code;

  return (
    <div className="flex flex-col h-full border-l">
      {/* Preview takes up 25% of height */}
      <div className="h-1/4 border-b">
        <Preview code={codeToRender} />
      </div>

      {/* Editor takes rest of the space */}
      <div className="flex-1 flex flex-col">
        <Editor
          initialCode={draftCode ?? comp.code}
          onChange={setDraftCode}
        />

        <div className="flex justify-center items-center gap-4 p-4">
          <button
            onClick={() => setAppliedCode(draftCode ?? comp.code)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          >
            Apply
          </button>
          <ExportButton code={codeToRender} />
        </div>
      </div>
    </div>
  );
};

export default PreviewPanel;
