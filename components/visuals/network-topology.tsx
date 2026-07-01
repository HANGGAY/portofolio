"use client";

import { motion } from "framer-motion";

export function NetworkTopology() {
  const nodes = [
    { x: 260, y: 40, label: "HQ Jakarta" },
    { x: 90, y: 150, label: "Karawang" },
    { x: 430, y: 150, label: "Cikarang" },
    { x: 150, y: 270, label: "Sentul" },
    { x: 370, y: 270, label: "Cimanggis" },
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

      {/* grid backdrop */}
      {Array.from({ length: 6 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 64} x2="520" y2={i * 64} stroke="#E2E8F0" strokeWidth="1" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 65} y1="0" x2={i * 65} y2="320" stroke="#E2E8F0" strokeWidth="1" />
      ))}

      {/* connections from HQ to each site */}
      {nodes.slice(1).map((n, i) => (
        <motion.line
          key={i}
          x1={nodes[0].x}
          y1={nodes[0].y}
          x2={n.x}
          y2={n.y}
          stroke="url(#net-line)"
          strokeWidth="2"
          strokeDasharray="6 5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.2 + i * 0.15, ease: "easeInOut" }}
        />
      ))}

      {/* animated data pulses */}
      {nodes.slice(1).map((n, i) => (
        <motion.circle
          key={`pulse-${i}`}
          r="3.5"
          fill="#06B6D4"
          initial={{ cx: nodes[0].x, cy: nodes[0].y, opacity: 0 }}
          animate={{ cx: [nodes[0].x, n.x], cy: [nodes[0].y, n.y], opacity: [0, 1, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.5, ease: "easeInOut" }}
        />
      ))}

      {nodes.map((n, i) => (
        <g key={i}>
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={i === 0 ? 22 : 15}
            fill={i === 0 ? "#0F172A" : "#FFFFFF"}
            stroke={i === 0 ? "#2563EB" : "#2563EB"}
            strokeWidth="2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.1, type: "spring" }}
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
