import React from "react";

interface SidebarProps {
  onSelect: (component: string) => void;
  selected: string | null;
}

const COMPONENTS = ["Button", "Modal", "Form"]; // stub list for now

export default function Sidebar({ onSelect, selected }: SidebarProps) {
  return (
    <aside className="bg-white border-r border-gray-200 p-4">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <ul className="space-y-2">
        {COMPONENTS.map((comp) => (
          <li key={comp}>
            <button
              onClick={() => onSelect(comp)}
              className={`w-full text-left p-2 rounded-md ${
                selected === comp
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-100"
              }`}
            >
              {comp}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
