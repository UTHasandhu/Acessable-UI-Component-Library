// src/data/componentDocs.ts
import Button from "../components/Button/Button";

// Type definitions for component metadata
export type ComponentMeta = {
  name: string;
  description: string;
  Component: React.ComponentType<any>;
  defaultProps: Record<string, any>;
  propControls: Record<string, PropControl>;
  generateUsage?: (props: Record<string, any>) => string;
};

// Type for prop control
export type PropControl =
  | { type: "text" }
  | { type: "select"; options: string[] }
  | { type: "boolean" };


// registry of available components
export const componentRegistry: Record<string, ComponentMeta> = {
  Button: {
    name: "Button",
    Component: Button,
    description: "A simple button component",
    defaultProps: {
      label: "Click Me",
      variant: "primary",
      size: "md",
      disabled: false,
    },
    propControls: {
      label: { type: "text" },
      variant: { type: "select", options: ["primary", "secondary", "outline"] },
      size: { type: "select", options: ["sm", "md", "lg"] },
      disabled: { type: "boolean" },
    },
    generateUsage: (p) =>
      `<Button label="${p.label}" variant="${p.variant}" size="${p.size}"${p.disabled ? " disabled" : ""} />`,
  },
  // Add more components here as you build them
};
