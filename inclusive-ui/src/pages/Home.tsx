// src/App.tsx
import { useState } from "react";
import Sidebar from "./sections/SideBar/Sidebar";
import ComponentPanel from "./sections/ComponentPanel/ComponentPanel";
import PreviewPanel from "./sections/PreviewPanel/PreviewPanel";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);
  
  return (
    <div className="flex h-screen">
      {/* Sidebar - Fixed 20% width */}
      <div className="w-1/6 shrink-0">
        <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />
      </div>
      
      {/* Component Panel - Flexible, starts at 45% but shrinks when needed */}
      <div className="w-3/6 shrink">
        <ComponentPanel selectedComponent={selectedComponent} />
      </div>
      
      {/* Preview Panel - Fixed 35% width */}
      <div className="w-2/6 shrink">
        <PreviewPanel selectedComponent={selectedComponent} />
      </div>
    </div>
  );
}