// src/sandbox/Preview/Preview.tsx
import React, { useEffect, useRef } from "react";

type PreviewProps = {
  code: string;
};

export default function Preview({ code }: PreviewProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    mountRef.current.innerHTML = ""; // clear old render
    setError(null);

    try {
      const Component = new Function(
        "React",
        `return (${code});`
      )(React);

      const element = React.createElement(Component);
      // render manually into div
      import("react-dom").then(ReactDOM =>
        ReactDOM.createRoot(mountRef.current!).render(element)
      );
    } catch (err: any) {
      setError(err.message);
    }
  }, [code]);

  return (
    <div className="h-full flex items-center justify-center">
      {error ? (
        <pre className="text-red-600 text-sm whitespace-pre-wrap p-2">
          {error}
        </pre>
      ) : (
        <div ref={mountRef} className="w-full h-full flex items-center justify-center" />
      )}
    </div>
  );
};