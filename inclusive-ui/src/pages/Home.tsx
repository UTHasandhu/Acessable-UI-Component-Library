// src/App.tsx
import { useState } from "react";
import Sidebar from "./sections/SideBar/Sidebar";
import ComponentPanel from "./sections/ComponentPanel/ComponentPanel";
import PreviewPanel from "./sections/PreviewPanel/PreviewPanel";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

return (
  <div className="grid grid-cols-[240px_1fr_1fr] h-[calc(100vh-4rem)] bg-gray-100">
    <div className="bg-gray-900 text-white shadow-lg overflow-y-auto">
      <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />
    </div>
    <div className="bg-white p-8 overflow-y-auto border-r border-gray-200">
      <ComponentPanel selectedComponent={selectedComponent} />
    </div>
    <div className="bg-gray-50 p-8 overflow-y-auto">
      <PreviewPanel selectedComponent={selectedComponent} />
    </div>
  </div>
);
}
