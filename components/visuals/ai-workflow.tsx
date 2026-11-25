import type { CSSProperties } from "react";

export function AIWorkflow() {
  const steps = [
    { x: 60, label: "Alert" },
    { x: 195, label: "Enrich" },
    { x: 330, label: "LLM Verdict" },
    { x: 460, label: "Route / Approve" },
  ];

  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" fill="none" role="img" aria-label="AI-assisted SOAR alert triage design diagram">
      <defs>
        <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      <line x1="60" y1="150" x2="460" y2="150" stroke="#E2E8F0" strokeWidth="2" />
      <line
        className="svg-flow-line"
        x1="60"
        y1="150"
        x2="460"
        y2="150"
        stroke="url(#ai-line)"
        strokeWidth="2"
        strokeDasharray="8 6"
      />

      {steps.map((s, i) => (
        <g
          key={s.label}
          className="svg-node"
          style={{ "--delay": `${0.15 * i}s` } as CSSProperties}
        >
          <rect
            x={s.x - 38}
            y="115"
            width="76"
            height="70"
            rx="14"
            fill={i === 1 ? "#0F172A" : "#FFFFFF"}
            stroke="#2563EB"
            strokeWidth="1.5"
          />
          {i === 1 ? (
            <circle className="svg-spin" cx={s.x} cy="150" r="16" fill="none" stroke="#06B6D4" strokeWidth="2" strokeDasharray="4 4" />
          ) : (
            <circle cx={s.x} cy="150" r="10" fill="#DBEAFE" stroke="#2563EB" strokeWidth="1.5" />
          )}
          <text
            x={s.x}
            y="205"
            textAnchor="middle"
            fontSize="11"
            fontWeight="700"
            fill={i === 1 ? "#0F172A" : "#475569"}
          >
            {s.label}
          </text>
        </g>
      ))}

      <circle r="4" fill="#06B6D4" cy="150">
        <animate attributeName="cx" values="60;460" dur="3.2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
