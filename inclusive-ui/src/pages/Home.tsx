import React, { useState } from "react";
import Sidebar from "./sections/Sidebar";
import ComponentPanel from "./sections/ComponentPanel";
import PreviewPanel from "./sections/PreviewPanel";

// This is the "controller" that ties panels together
export default function Home() {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-[240px_1fr_1fr] h-[calc(100vh-4rem)]">
      {/* Sidebar with list of components */}
      <Sidebar onSelect={setSelectedComponent} selected={selectedComponent} />

      {/* Component description + editor */}
      <ComponentPanel selectedComponent={selectedComponent} />

      {/* Live preview */}
      <PreviewPanel selectedComponent={selectedComponent} />
    </div>
  );
}
