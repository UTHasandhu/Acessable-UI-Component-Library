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
      <div className="flex flex-col h-full border-l border-gray-300 bg-gray-50">
        <div className="flex-1 flex items-center justify-center text-gray-500">
          <div className="text-center">
            <div className="text-4xl mb-2">📦</div>
            <p className="text-lg font-medium">No component selected</p>
            <p className="text-sm">Choose a component from the sidebar to view its details</p>
          </div>  
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
    <div className="p-6 space-y-8 max-w-6xl m-[10px]">
      {/* Component Header */}
      <div className="border-b border-gray-200 pb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
        <p className="text-lg text-gray-600">{description}</p>
        <div className="mt-3 inline-flex items-center px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
          {propCount} {propCount === 1 ? 'Property' : 'Properties'} Available
        </div>
      </div>

            {/* Quick Summary Cards */}
      <div className="flex flex-wrap gap-4">
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600">📊</span>
            <h4 className="font-semibold text-blue-900">Properties: {propCount}</h4>
          </div>
          <p className="text-sm text-blue-600">Configurable props</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600">🎯</span>
            <h4 className="font-semibold text-blue-900">Defaults: {Object.keys(defaultProps).length}</h4>
          </div>
          <p className="text-sm text-blue-600">Pre-configured values </p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600">🎛️</span>
            <h4 className="font-semibold text-blue-900">Control Types: {new Set(Object.values(propControls).map(c => c.type)).size}</h4>
          </div>
          <p className="text-sm text-blue-600">Unique input types</p>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-blue-600">🔧</span>
            <h4 className="font-semibold text-blue-900">Required: {propNames.filter(prop => defaultProps[prop] === undefined).length}</h4>
          </div>
          <p className="text-sm text-blue-600">Must be provided</p>
        </div>

        {/* <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-green-600">🎯</span>
            <h4 className="font-semibold text-green-900">Defaults</h4>
          </div>
          <p className="text-2xl font-bold text-green-900">{Object.keys(defaultProps).length}</p>
          <p className="text-sm text-green-600">Pre-configured values</p>
        </div> */}
{/* 
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-purple-600">🎛️</span>
            <h4 className="font-semibold text-purple-900">Control Types</h4>
          </div>
          <p className="text-2xl font-bold text-purple-900">
            {new Set(Object.values(propControls).map(c => c.type)).size}
          </p>
          <p className="text-sm text-purple-600">Unique input types</p>
        </div> */}

        {/* <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 flex-1 min-w-48">
          <div className="flex items-center space-x-2 mb-2">
            <span className="text-orange-600">🔧</span>
            <h4 className="font-semibold text-orange-900">Required</h4>
          </div>
          <p className="text-2xl font-bold text-orange-900">
            {propNames.filter(prop => defaultProps[prop] === undefined).length}
          </p>
          <p className="text-sm text-orange-600">Must be provided</p>
        </div> */}
      </div>

      {/* Properties Table */}
      <div className="space-y-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-semibold">⚙️</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Component Properties</h3>
          </div>
          <p className="text-sm text-gray-500 ml-10 text-center">Configure these props to customize the component</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
            <div className="grid grid-cols-4 gap-4 text-sm font-semibold text-gray-700 uppercase tracking-wide">
              <div>Property Name</div>
              <div>Control Type</div>
              <div>Default Value</div>
              <div>Description</div>
            </div>
          </div>
          
          <div className="divide-y divide-gray-200">
            {propNames.map((propName, index) => {
              const control = propControls[propName];
              const defaultValue = defaultProps[propName];
              
              return (
                <div key={propName} className={`px-6 py-4 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-25'}`}>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    {/* Property Name */}
                    <div className="font-mono font-semibold text-blue-900 bg-blue-50 px-2 py-1 rounded text-sm">
                      {propName}
                    </div>
                    
                    {/* Control Type */}
                    <div className="flex items-center space-x-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800 capitalize">
                        {control.type}
                      </span>
                      {control.type === 'select' && control.options && (
                        <span className="text-xs text-gray-500">
                          ({control.options.length} options)
                        </span>
                      )}
                    </div>
                    
                    {/* Default Value */}
                    <div>
                      {defaultValue !== undefined ? (
                        <code className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-green-100 text-green-800 border">
                          {typeof defaultValue === 'string' ? `"${defaultValue}"` : JSON.stringify(defaultValue)}
                        </code>
                      ) : (
                        <span className="text-gray-400 text-sm italic">No default</span>
                      )}
                    </div>
                    
                    {/* Description/Options */}
                    <div className="text-sm text-gray-600">
                      {control.type === 'select' && control.options ? (
                        <div>
                          <span className="font-medium">Options:</span>
                          <div className="mt-1 flex flex-wrap gap-1">
                            {control.options.map((option, i) => (
                              <span key={i} className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-700">
                                {typeof option === 'string' ? option : JSON.stringify(option)}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : control.type === 'boolean' ? (
                        'Toggle between true/false'
                      ) : control.type === 'text' ? (
                        'Enter any text value'
                      ) : control.type === 'number' ? (
                        'Enter a numeric value'
                      ) : control.type === 'color' ? (
                        'Pick a color value'
                      ) : (
                        `${control.type} input`
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Usage Example */}
      {componentMeta.generateUsage && (
        <div className="space-y-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center ">
                <span className="text-green-600 font-semibold">💡</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Usage Example</h3>
            </div>
            <p className="text-sm text-gray-500 ml-10 text-center">Copy this code to use the component with default values</p>
          </div>

          <div className="bg-gray-900 rounded-lg border border-gray-700 p-4 overflow-x-auto">
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-xs text-gray-400 uppercase tracking-wide font-semibold">JSX Code Example: </span>
            </div>
            <pre className="text-sm text-gray-100 font-mono">
              <code>{componentMeta.generateUsage(defaultProps)}</code>
            </pre>
          </div>
        </div>
      )}


    </div>
  );
};

export default ComponentPanel;