// src/sections/ComponentPanel.tsx
import React from "react";
import { componentRegistry } from "../../data/componentRegistry";

type ComponentPanelProps = {
  selectedComponent: string | null;
};

const ComponentPanel: React.FC<ComponentPanelProps> = ({ selectedComponent }) => {
  if (!selectedComponent) {
    return (
      <div className="p-6 text-gray-500">
        Select a component from the sidebar
      </div>
    );
  }

  const doc = componentRegistry[selectedComponent];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">{doc.name}</h2>
      <p className="text-gray-700">{doc.description}</p>
    </div>
  );
};

export default ComponentPanel;
