import React, { useEffect, useRef, useState } from "react";
import axe from "axe-core";

type PreviewProps = {
  Component: React.ComponentType<any>;
  props: Record<string, any>;
};

type AxeIssue = {
  id: string;
  impact?: string;
  description: string;
  nodes: { html: string; target: string[] }[];
  help: string;
  helpUrl: string;
};

const Preview: React.FC<PreviewProps> = ({ Component, props }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [issues, setIssues] = useState<AxeIssue[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Render + run axe on every prop change
  useEffect(() => {
    setError(null);
    setIssues([]);

    const node = containerRef.current;
    if (!node) return;

    // Run axe against the preview container
    const runAxe = async () => {
      try {
        const results = await axe.run(node, {
          // You can tune rules/tags here to match WCAG 2.2 AA
          runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"] },
        });
        setIssues(
          results.violations.map((v) => ({
            id: v.id,
            impact: v.impact || undefined,
            description: v.description,
            nodes: v.nodes.map((n) => ({ html: n.html, target: n.target as string[] })),
            help: v.help,
            helpUrl: v.helpUrl,
          }))
        );
      } catch (e: any) {
        // If axe blows up, don't kill the app
        console.error(e);
      }
    };

    runAxe();
  }, [props]);

  // Guard against render errors in the previewed component
  let content: React.ReactNode = null;
  try {
    content = <Component {...props} />;
  } catch (e: any) {
    content = null;
    if (!error) setError(e?.message || "Render error");
  }

  return (
    <div className="h-full flex flex-col">
      <div
        ref={containerRef}
        className="flex-1 flex items-center justify-center bg-gray-50"
      >
        {error ? (
          <pre className="text-red-600 text-sm whitespace-pre-wrap p-3">
            {error}
          </pre>
        ) : (
          content
        )}
      </div>

      {/* Minimal accessibility report */}
      <div className="border-t border-gray-200 p-2 text-xs max-h-24 overflow-auto">
        {issues.length === 0 ? (
          <span className="text-green-700">No accessibility violations found.</span>
        ) : (
          <div className="space-y-2">
            <div className="font-semibold text-red-700">
              {issues.length} accessibility issue{issues.length > 1 ? "s" : ""} detected
            </div>
            {issues.map((v) => (
              <details key={v.id} className="bg-red-50 rounded p-2">
                <summary className="cursor-pointer">
                  <span className="font-medium">{v.id}</span>
                  {v.impact ? ` • ${v.impact}` : ""} — {v.description}
                </summary>
                <div className="mt-1">
                  <a
                    href={v.helpUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {v.help}
                  </a>
                </div>
                <ul className="list-disc ml-5 mt-1">
                  {v.nodes.slice(0, 3).map((n, i) => (
                    <li key={i}>
                      <code className="bg-white rounded px-1">{n.target.join(", ")}</code>
                    </li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
