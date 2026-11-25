import type { CSSProperties } from "react";

export function NetworkTopology() {
  const nodes = [
    { x: 260, y: 40, label: "Head Office" },
    { x: 70, y: 150, label: "Karawang" },
    { x: 450, y: 150, label: "Cikarang" },
    { x: 110, y: 275, label: "Sentul" },
    { x: 260, y: 275, label: "Cimanggis" },
    { x: 410, y: 275, label: "Palmerah" },
  ];

  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" fill="none" role="img" aria-label="Enterprise network topology diagram">
      <defs>
        <linearGradient id="net-line" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
        <radialGradient id="net-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="260" cy="150" r="150" fill="url(#net-glow)" />

      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 64} x2="520" y2={i * 64} stroke="#E2E8F0" strokeWidth="1" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 65} y1="0" x2={i * 65} y2="320" stroke="#E2E8F0" strokeWidth="1" />
      ))}

      {nodes.slice(1).map((n, i) => (
        <line
          key={`line-${i}`}
          className="svg-flow-line"
          x1={nodes[0].x}
          y1={nodes[0].y}
          x2={n.x}
          y2={n.y}
          stroke="url(#net-line)"
          strokeWidth="2"
          strokeDasharray="6 5"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      {nodes.slice(1).map((n, i) => (
        <circle key={`pulse-${i}`} r="3.5" fill="#06B6D4">
          <animate attributeName="cx" values={`${nodes[0].x};${n.x}`} dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="cy" values={`${nodes[0].y};${n.y}`} dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;0" dur="2.4s" begin={`${i * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}

      {nodes.map((n, i) => (
        <g key={`node-${i}`}>
          <circle
            className="svg-node"
            style={{ "--delay": `${0.1 + i * 0.1}s` } as CSSProperties}
            cx={n.x}
            cy={n.y}
            r={i === 0 ? 22 : 15}
            fill={i === 0 ? "#0F172A" : "#FFFFFF"}
            stroke="#2563EB"
            strokeWidth="2"
          />
          <text
            x={n.x}
            y={n.y + (i === 0 ? 40 : 32)}
            textAnchor="middle"
            fontSize="11"
            fontWeight="600"
            fill="#475569"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
