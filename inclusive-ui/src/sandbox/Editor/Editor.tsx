import MonacoEditor from "@monaco-editor/react";

interface Props {
  initialCode: string;
  onChange: (code: string | null) => void;
}

export default function Editor({ initialCode, onChange }: Props) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="tsx"
      value={initialCode}
      theme="vs-dark"
      // onChange={onChange}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        scrollBeyondLastLine: false,
      }}
    />
  );
}
