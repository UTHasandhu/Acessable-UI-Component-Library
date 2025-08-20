import { useState, useRef, useEffect } from "react";
import clsx from "clsx";

type DropdownOption = { label: string; value: string };

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  onSelect: (value: string) => void;
  selected?: string;
  disabled?: boolean;
};

export default function Dropdown({
  label,
  options,
  onSelect,
  selected,
  disabled = false,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block w-48">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className={clsx(
          "w-full flex justify-between items-center px-4 py-2 text-sm font-medium rounded-2xl border focus:outline-none focus:ring-2 focus:ring-offset-2",
          disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500"
        )}
      >
        {selected
          ? options.find((o) => o.value === selected)?.label
          : label}
        <span aria-hidden="true">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-2xl shadow-lg max-h-60 overflow-auto"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selected === option.value}
              onClick={() => {
                onSelect(option.value);
                setOpen(false);
              }}
              className={clsx(
                "px-4 py-2 cursor-pointer hover:bg-blue-100",
                selected === option.value && "bg-blue-500 text-white"
              )}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
