// src/sections/Sidebar.tsx
import { clsx } from "clsx";
import { componentRegistry } from "../../../data/componentRegistry";

type SidebarProps = {
  onSelect: (name: string) => void;
  selected: string | null;
};

export default function Sidebar({ onSelect, selected }: SidebarProps) {
  const names = Object.keys(componentRegistry);
  
  return (
    <aside className="flex flex-col h-full w-full bg-gray-900 text-white shadow-xl border-r border-gray-800">
      {/* Sidebar Header */}
      <div className="px-6 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight">Component Library</h2>
        <p className="text-sm text-gray-400 mt-1">
          Browse and explore UI components
        </p>
      </div>
      
      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
        <ul className="list-none ml-[-40px] pr-[5px]">
          {names.map((name) => (
            <li key={name} className="w-full pt-[5px]">
              <button
                onClick={() => onSelect(name)}
                aria-label={`Select ${name}`}
                className={clsx(
                  // Base styles - invisible by default
                  "w-full px-4 py-3 text-left text-sm font-medium rounded-lg transition-all duration-200 ease-in-out",
                  "border border-transparent backdrop-blur-sm",
                  
                  // Hover effects - subtle border and background
                  "hover:border-gray-600 hover:bg-gray-800/50 hover:shadow-sm",
                  "hover:translate-x-1 hover:text-white",
                  
                  // Focus effects for accessibility
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50",
                  
                  // Selected state - more visible
                  selected === name 
                    ? "bg-blue-600/20 border-blue-500/50 text-blue-300 shadow-md shadow-blue-500/10" 
                    : "text-gray-300",
                  
                  // Active state
                  "active:scale-[0.98] active:bg-gray-700/50"
                )}
              >
                <span className="block truncate text-center">{name}</span>
                {selected === name && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full" />
                )}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}