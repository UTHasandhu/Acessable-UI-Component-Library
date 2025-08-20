// src/sections/Sidebar.tsx
import { clsx } from "clsx";
import { componentRegistry } from "../../../data/componentRegistry";
import Button from "../../../components/Button/Button"; // adjust path if needed

type SidebarProps = {
  onSelect: (name: string) => void;
  selected: string | null;
};

export default function Sidebar({ onSelect, selected }: SidebarProps) {
  const names = Object.keys(componentRegistry);

  return (
    <aside className="flex flex-col h-full w-64 bg-gray-900 text-white shadow-xl border-r border-gray-800">
      {/* Sidebar Header */}
      <div className="px-6 py-6 border-b border-gray-800">
        <h2 className="text-2xl font-bold tracking-tight">Component Library</h2>
        <p className="text-sm text-gray-400 mt-1">
          Browse and explore UI components
        </p>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 custom-scrollbar">
        <ul className="space-y-3">
          {names.map((name) => (
            <li key={name}>
              <Button
                label={name}
                onClick={() => onSelect(name)}
                variant={selected === name ? "primary" : "secondary"}
                size="md"
                ariaLabel={`Select ${name}`}
              />
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-gray-800 text-center text-gray-500 text-xs">
        <p>Built with React & Tailwind CSS</p>
      </div>
    </aside>
  );
}
