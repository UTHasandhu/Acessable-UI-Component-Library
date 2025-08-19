import React from "react";

interface PreviewPanelProps {
  selectedComponent: string | null;
}

export default function PreviewPanel({ selectedComponent }: PreviewPanelProps) {
  return (
    <section className="p-6">
      <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
      <div className="border border-dashed border-gray-300 rounded-lg p-8 text-center bg-white">
        {selectedComponent ? (
          <span className="text-gray-700">
            Rendering preview for <strong>{selectedComponent}</strong> (MVP stub)
          </span>
        ) : (
          <span className="text-gray-400">Nothing selected</span>
        )}
      </div>
    </section>
  );
}
