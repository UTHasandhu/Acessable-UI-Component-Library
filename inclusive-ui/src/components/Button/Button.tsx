import React from "react";
import clsx from "clsx";

//Interface for acceptable button properties for the editor
type ButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
};

const baseStyles =
  "rounded-2xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<string, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200 focus:ring-gray-400",
  outline: "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-300",
};

const sizes: Record<string, string> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({ label, onClick, variant = "primary", size = "md", disabled = false }: ButtonProps) {
  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        disabled && "opacity-50 cursor-not-allowed"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}
