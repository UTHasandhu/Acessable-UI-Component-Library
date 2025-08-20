// src/data/componentDocs.ts
import ButtonCode from "../components/Button/Button.tsx?raw";
// later: import BreadcrumbCode from "../components/Breadcrumb/Breadcrumb.tsx?raw";

export type ComponentDoc = {
  name: string;
  description: string;
  code: string;
};

// registry of available components
export const componentDocs: Record<string, ComponentDoc> = {
  Button: {
    name: "Button",
    description: "A reusable, accessible button supporting variants and sizes.",
    code: ButtonCode,
  },
  Dropdown: {
    name: "Dropdown",
    description: "A dropdown menu for selecting options with accessibility features.",
    code: ButtonCode,
  },
  Form: {
    name: "Form",
    description: "Navigation breadcrumb with keyboard accessibility.",
    code: ButtonCode,
  },
  Modal: {
    name: "Modal",
    description: "Navigation breadcrumb with keyboard accessibility.",
    code: ButtonCode,
  },
  Tabs: {
    name: "Tabs",
    description: "Navigation breadcrumb with keyboard accessibility.",
    code: ButtonCode,
  }
};
