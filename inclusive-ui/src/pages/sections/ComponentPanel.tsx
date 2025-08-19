import React from "react";

interface ComponentPanelProps {
  selectedComponent: string | null;
}

export default function ComponentPanel({ selectedComponent }: ComponentPanelProps) {
  if (!selectedComponent) {
    return (
      <section className="p-6 border-r border-gray-200">
        <h2 className="text-xl font-semibold">Select a component</h2>
        <p className="text-gray-600 mt-2">
          Pick a component from the sidebar to view its description and edit props.
        </p>
      </section>
    );
  }

  // placeholder description + stub prop editor
  return (
    <section className="p-6 border-r border-gray-200">
      <h2 className="text-2xl font-bold mb-4">{selectedComponent}</h2>
      <p className="text-gray-700 mb-4">
        This is a placeholder description for the {selectedComponent} component.
      </p>

      <div className="bg-gray-50 border rounded-lg p-4">
        <h3 className="font-semibold mb-2">Props Editor (MVP stub)</h3>
        <label className="block mb-2">
          <span className="text-sm text-gray-600">Example Prop</span>
          <input
            type="text"
            className="mt-1 w-full border rounded px-2 py-1"
            placeholder="Type something..."
          />
        </label>
      </div>
    </section>
  );
}
