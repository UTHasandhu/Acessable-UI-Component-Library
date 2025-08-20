import MonacoEditor from "@monaco-editor/react";

interface Props {
  initialCode: string;
  onChangeEvent: any;
}

export default function Editor({ initialCode, onChangeEvent }: Props) {
  return (
    <MonacoEditor
      height="100%"
      defaultLanguage="tsx"
      value={initialCode}
      theme="vs-dark"
      onChange={onChangeEvent}
      options={{
        minimap: { enabled: false },
        fontSize: 14,
        scrollBeyondLastLine: false,
      }}
    />
  );
}
