// src/sections/Sidebar.tsx
import React from "react";
import { componentDocs } from "../../data/componentDocs";

type SidebarProps = {
  onSelect: (name: string) => void;
  selected: string | null;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelect, selected }) => {
  const names = Object.keys(componentDocs);

  return (
    <div className="bg-gray-800 text-white p-4 space-y-2">
      {names.map((name) => (
        <button
          key={name}
          onClick={() => onSelect(name)}
          className={`block w-full text-left px-3 py-2 rounded ${
            selected === name ? "bg-gray-600" : "hover:bg-gray-700"
          }`}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
