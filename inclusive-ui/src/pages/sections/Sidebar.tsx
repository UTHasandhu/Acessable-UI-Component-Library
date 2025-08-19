import React from "react";

interface SidebarProps {
  onSelect: (component: string) => void;
  selected: string | null;
  components?: string[]; // allow injection for tests
}

const DEFAULT_COMPONENTS = ["Button", "Modal", "Form"];

export default function Sidebar({ onSelect, selected, components = DEFAULT_COMPONENTS }: SidebarProps) {
  return (
    <aside className="bg-white border-r border-gray-200 p-4" data-testid="sidebar">
      <h2 className="text-lg font-semibold mb-4">Components</h2>
      <nav aria-label="Components">
        <ul className="space-y-2" role="list">
          {components.map((comp, idx) => (
            <li key={comp}>
              <button
                type="button"
                role="menuitem"
                data-testid={`sidebar-item-${idx}`}
                aria-current={selected === comp ? "page" : undefined}
                onClick={() => onSelect(comp)}
                className={`w-full text-left p-2 rounded-md ${selected === comp ? "bg-blue-600 text-white" : "hover:bg-gray-100"}`}
              >
                {comp}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
