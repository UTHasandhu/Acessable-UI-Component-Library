import React, { useEffect, useMemo, useState } from "react";

type InlineJsonEditorProps = {
  label?: string;
  value: Record<string, any>;
  onValidJson: (obj: Record<string, any>) => void;
  helperRight?: string;
};

const InlineJsonEditor: React.FC<InlineJsonEditorProps> = ({
  label = "JSON",
  value,
  onValidJson,
  helperRight,
}) => {
  const pretty = useMemo(() => JSON.stringify(value, null, 2), [value]);
  const [text, setText] = useState(pretty);
  const [error, setError] = useState<string | null>(null);

  // Sync editor when external value changes
  useEffect(() => setText(pretty), [pretty]);

  const handleBlur = () => {
    try {
      const parsed = JSON.parse(text);
      if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
        throw new Error("Root must be a JSON object");
      }
      setError(null);
      onValidJson(parsed);
    } catch (e: any) {
      setError(e?.message || "Invalid JSON");
    }
  };

  return (
    <div>
      <div className="flex items-end justify-between mb-1">
        <label className="text-sm font-medium">{label}</label>
        {helperRight && (
          <div className="text-xs text-gray-500">{helperRight}</div>
        )}
      </div>
      <textarea
        className={`w-full h-32 font-mono text-xs rounded border p-2 ${
          error ? "border-red-500" : "border-gray-300"
        }`}
        spellCheck={false}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
      />
      {error && (
        <div className="text-xs text-red-600 mt-1">JSON Error: {error}</div>
      )}
    </div>
  );
};

export default InlineJsonEditor;
