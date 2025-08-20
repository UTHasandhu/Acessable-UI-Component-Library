// src/sections/Sidebar.tsx
import React from "react";
import { clsx } from 'clsx';
import { componentRegistry } from "../../../data/componentRegistry";

type SidebarProps = {
  onSelect: (name: string) => void;
  selected: string | null;
};

const Sidebar: React.FC<SidebarProps> = ({ onSelect, selected }) => {
  const names = Object.keys(componentRegistry);

  return (
    <div className="bg-gray-900 text-white flex flex-col h-full py-6 px-4">
      {/* Sidebar Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold tracking-tight text-white">
          Component Library
        </h2>
        <p className="text-sm text-gray-400 mt-1">Browse and explore UI components</p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto">
        {/* Increased space-y to create more vertical separation */}
        <ul className="space-y-1/6 list-none">
          {names.map((name) => (
            <li key={name}>
              <button
                onClick={() => onSelect(name)}
                className={
                  clsx(
                    'block w-5/6 text-left m-[20px] rounded',
                    { 'bg-gray-600': selected === name },
                    { 'bg-white': selected !== name },
                    { 'hover:bg-gray-700': selected !== name }
                  )
                }
              >
                <span className="font-medium place-content-center">{name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="mt-auto pt-6 text-center text-gray-500 text-xs">
        <p>Built with React & Tailwind CSS</p>
      </div>
    </div>
  );
};

export default Sidebar;