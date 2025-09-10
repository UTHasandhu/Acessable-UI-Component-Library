// src/sections/ComponentPanel.tsx
import React from "react";
import { componentRegistry } from "../../../data/componentRegistry";
import type { ComponentMeta } from "../../../data/componentRegistry";

type ComponentPanelProps = {
  selectedComponent: string | null;
};

const ComponentPanel: React.FC<ComponentPanelProps> = ({ selectedComponent }) => {
  // Early return for no selection
  if (!selectedComponent) {
    return (
      <div className="flex items-center justify-center h-64 text-gray-500 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-4xl mb-2">📦</div>
          <p className="text-lg font-medium">No component selected</p>
          <p className="text-sm">Choose a component from the sidebar to view its details</p>
        </div>
      </div>
    );
  }

  // Get component metadata
  const componentMeta: ComponentMeta | undefined = componentRegistry[selectedComponent];
  
  // Handle case where component doesn't exist in registry
  if (!componentMeta) {
    return (
      <div className="flex items-center justify-center h-64 text-red-500 bg-red-50 rounded-lg">
        <div className="text-center">
          <div className="text-4xl mb-2">⚠️</div>
          <p className="text-lg font-medium">Component not found</p>
          <p className="text-sm">The component "{selectedComponent}" doesn't exist in the registry</p>
        </div>
      </div>
    );
  }

  const { name, description, defaultProps, propControls } = componentMeta;
  
  // Get available prop information
  const propCount = Object.keys(propControls).length;
  const propNames = Object.keys(propControls);

  return (
    <div className="p-6 space-y-6">
      {/* Component Header */}
      <div className="border-b border-gray-200 pb-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>

      {/* Component Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Properties Summary */}
        <div className="bg-blue-50 rounded-lg p-4">
          <h3 className="font-semibold text-blue-900 mb-3 flex items-center">
            <span className="mr-2">⚙️</span>
            Properties - {propCount}
          </h3>
          <div className="space-y-2">
            {propNames.map((propName) => {
              const control = propControls[propName];
              const defaultValue = defaultProps[propName];
              
              return (
                <div key={propName} className="flex justify-between items-center text-sm">
                  <span className="font-mono font-medium text-blue-800">{propName}</span>
                  <div className="text-right">
                    <div className="text-blue-600 capitalize">{control.type}</div>
                    {defaultValue !== undefined && (
                      <div className="text-blue-500 text-xs">
                        default: {typeof defaultValue === 'string' ? `"${defaultValue}"` : String(defaultValue)}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Default Props */}
        <div className="bg-green-50 rounded-lg p-4">
          <h3 className="font-semibold text-green-900 mb-3 flex items-center">
            <span className="mr-2">🎯</span>
            Default Values
          </h3>
          <div className="space-y-2">
            {Object.entries(defaultProps).map(([key, value]) => (
              <div key={key} className="flex justify-between items-center text-sm">
                <span className="font-mono font-medium text-green-800">{key}:</span>
                <span className="text-green-600 font-mono bg-green-100 px-2 py-1 rounded text-xs">
                  {typeof value === 'string' ? `"${value}"` : JSON.stringify(value)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Usage Hint */}
      {componentMeta.generateUsage && (
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
            <span className="mr-2">💡</span>
            Usage Example
          </h3>
          <code className="block bg-gray-100 p-3 rounded font-mono text-sm text-gray-800 overflow-x-auto">
            {componentMeta.generateUsage(defaultProps)}
          </code>
        </div>
      )}
    </div>
  );
};

export default ComponentPanel;