// src/sandbox/Export/ExportButton.tsx
import React from "react";

type ExportButtonProps = {
  code: string;
};

const ExportButton: React.FC<ExportButtonProps> = ({ code }) => {
  const handleExport = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "Component.tsx";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <button
      onClick={handleExport}
      className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-md shadow hover:bg-blue-700 transition"
    >
      Export Component
    </button>
  );
};

export default ExportButton;
