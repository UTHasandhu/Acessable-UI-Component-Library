import React from "react";

interface PreviewPanelProps {
  selectedComponent: string | null;
}

export default function PreviewPanel({ selectedComponent }: PreviewPanelProps) {
  return (
    <section className="p-6" data-testid="preview-panel">
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
      <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center bg-white" data-testid="preview-stage">
        {selectedComponent ? (
          <div data-testid="preview-mounted" />
        ) : (
          <div data-testid="preview-empty" />
        )}
      </div>
    </section>
  );
}
