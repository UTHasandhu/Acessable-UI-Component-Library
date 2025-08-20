import React from "react";
import type { PropControl } from "../data/componentRegistry";

type PropControlsProps = {
  controls: Record<string, PropControl>;
  value: Record<string, any>;
  onChange: (next: Record<string, any>) => void;
};

const PropControls: React.FC<PropControlsProps> = ({
  controls,
  value,
  onChange,
}) => {
  const handleField = (key: string, nextVal: any) =>
    onChange({ ...value, [key]: nextVal });

  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(controls).map(([key, control]) => {
        const val = value[key];

        if (control.type === "text") {
          return (
            <label key={key} className="flex flex-col text-sm">
              <span className="mb-1 font-medium">{key}</span>
              <input
                className="border rounded px-2 py-1"
                value={val ?? ""}
                onChange={(e) => handleField(key, e.target.value)}
              />
            </label>
          );
        }

        if (control.type === "select") {
          return (
            <label key={key} className="flex flex-col text-sm">
              <span className="mb-1 font-medium">{key}</span>
              <select
                className="border rounded px-2 py-1"
                value={val}
                onChange={(e) => handleField(key, e.target.value)}
              >
                {control.options.map((opt : any) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </label>
          );
        }

        if (control.type === "boolean") {
          return (
            <label key={key} className="flex items-center gap-2 text-sm">
              <input
                type="checkbox"
                checked={!!val}
                onChange={(e) => handleField(key, e.target.checked)}
              />
              <span className="font-medium">{key}</span>
            </label>
          );
        }

        return null;
      })}
    </div>
  );
};

export default PropControls;
