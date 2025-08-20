// src/data/componentDocs.ts
import Button from "../components/Button/Button";
import Dropdown from "../components/Dropdown/Dropdown";
import Modal from "../components/Modal/Modal";

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
  Dropdown: {
    name: "Dropdown",
    Component: Dropdown,
    description: "A customizable dropdown component",
    defaultProps: {
      options: ["Option 1", "Option 2", "Option 3"],
      selected: "Option 1",
    },
    propControls: {
      options: { type: "text" }, // For simplicity, using text input for options
      selected: { type: "select", options: ["Option 1", "Option 2", "Option 3"] },
    },
    generateUsage: (p) =>
      `<Dropdown options={${JSON.stringify(p.options)}} selected="${p.selected}" />`,
  },
  Modal: {
    name: "Modal",
    Component: Modal,
    description: "A simple modal component",
    defaultProps: {
      isOpen: false,
      title: "Modal Title",
    },
    propControls: {
      isOpen: { type: "boolean" },
      title: { type: "text" },
    },
    generateUsage: (p) =>
      `<Modal isOpen={${p.isOpen}} title="${p.title}">...</Modal>`,
  },
};
