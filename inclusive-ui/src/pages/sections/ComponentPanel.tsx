import React from "react";

interface ComponentPanelProps {
  selectedComponent: string | null;
}

export default function ComponentPanel({ selectedComponent }: ComponentPanelProps) {
  if (!selectedComponent) {
    return (
      <section className="p-6 border-r border-gray-200" data-testid="component-panel-empty">
        <h2 className="text-xl font-semibold">Select a component</h2>
        <p className="text-gray-600 mt-2">Pick a component to edit its props.</p>
      </section>
    );
  }

  return (
    <section className="p-6 border-r border-gray-200" data-testid="component-panel-active">
      <h2 className="text-2xl font-bold mb-4" data-testid="component-name">{selectedComponent}</h2>
      <div className="bg-gray-50 border rounded-lg p-4" data-testid="props-editor">
        {/* stub controls; will be replaced by real prop editor/Monaco */}
        <label className="block mb-2">
          <span className="text-sm text-gray-600">Example Prop</span>
          <input type="text" className="mt-1 w-full border rounded px-2 py-1" />
        </label>
      </div>
    </section>
  );
}
