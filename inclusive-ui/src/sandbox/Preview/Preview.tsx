// src/sandbox/Preview/Preview.tsx
import { LiveProvider, LivePreview } from "react-live";

interface Props {
  code: string;
}

export default function Preview({ code }: Props) {
    console.log(code)
  return (
    <LiveProvider code={code}>
      <div className="w-full h-full flex items-center justify-center bg-gray-50">
        <LivePreview />
      </div>
    </LiveProvider>
  );
}