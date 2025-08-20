// src/App.tsx
import { useState } from "react";
import Sidebar from "./sections/SideBar/Sidebar";
import ComponentPanel from "./sections/ComponentPanel/ComponentPanel";
import PreviewPanel from "./sections/PreviewPanel/PreviewPanel";

export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-[240px_1fr_1fr] h-[calc(100vh-4rem)]">
      <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />
      <ComponentPanel selectedComponent={selectedComponent} />
      <PreviewPanel selectedComponent={selectedComponent} />
    </div>
  );
}
