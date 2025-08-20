import React, { useEffect, useMemo, useState } from "react";
import { componentRegistry } from "../../../data/componentRegistry";
import Preview from "./Preview/Preview";
import PropControls from "./PropControls/PropControls";
import InlineJsonEditor from "./InlineJsonEditor/InlineJsonEditor";
import ExportButton from "./ExportButton/ExportButton";

type PreviewPanelProps = {
  selectedComponent: string | null;
};

const PreviewPanel: React.FC<PreviewPanelProps> = ({ selectedComponent }) => {
  const meta = useMemo(
    () => (selectedComponent ? componentRegistry[selectedComponent] : null),
    [selectedComponent]
  );

  const [propsState, setPropsState] = useState<Record<string, any>>(
    meta?.defaultProps ?? {}
  );

  // Keep state in sync when switching components
  useEffect(() => {
    if (meta) setPropsState(meta.defaultProps);
  }, [meta]);

  const usageSnippet = useMemo(
    () => (meta?.generateUsage ? meta.generateUsage(propsState) : ""),
    [meta, propsState]
  );

  if (!meta) {
    return (
      <div className="flex flex-col h-full border-l border-gray-300 bg-white">
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a component to preview
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col border-l border-gray-300 bg-white h-full overflow-y-auto">
      {/* 1) LIVE PREVIEW */}
      <div className="h-64 border-b border-gray-200">
        <Preview Component={meta.Component} props={propsState} />
      </div>

      {/* 2) PROP CONTROLS */}
      <div className="p-4 border-b border-gray-200">
        <PropControls
          controls={meta.propControls}
          value={propsState}
          onChange={setPropsState}
        />
      </div>

      {/* 3) INLINE JSON EDITOR (edits the props object) */}
      <div className="p-4 border-b border-gray-200">
        <InlineJsonEditor
          label="Props JSON"
          value={propsState}
          onValidJson={(v) => setPropsState(v)}
          helperRight={usageSnippet ? "Usage JSX shown below" : undefined}
        />
        {usageSnippet && (
          <div className="mt-3">
            <div className="text-xs font-semibold text-gray-600 mb-1">
              Usage JSX
            </div>
            <pre className="text-xs bg-gray-50 rounded p-2 overflow-x-auto">
              {usageSnippet}
            </pre>
          </div>
        )}
      </div>

      {/* 4) EXPORT BUTTON ROW */}
      <div className="p-4">
        {/* //@ts-ignore */}
        <ExportButton code={meta.Component as unknown as string} />
      </div>
    </div>
  );
};

export default PreviewPanel;
