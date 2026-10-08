"use client";

import { motion } from "framer-motion";

export function AIWorkflow() {
  const steps = [
    { x: 60, label: "Data In" },
    { x: 195, label: "AI Engine" },
    { x: 330, label: "Automation" },
    { x: 460, label: "Insight" },
  ];

  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" fill="none" role="img" aria-label="AI-driven IT operations workflow diagram">
      <defs>
        <linearGradient id="ai-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>

      <line x1="60" y1="150" x2="460" y2="150" stroke="#E2E8F0" strokeWidth="2" />
      <motion.line
        x1="60"
        y1="150"
        x2="460"
        y2="150"
        stroke="url(#ai-line)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />

      {steps.map((s, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 * i, type: "spring" }}
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
            <motion.circle
              cx={s.x}
              cy="150"
              r="16"
              fill="none"
              stroke="#06B6D4"
              strokeWidth="2"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: `${s.x}px 150px` }}
            />
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
        </motion.g>
      ))}

      <motion.circle r="4" fill="#06B6D4" cy={150} animate={{ cx: [60, 460] }} transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }} />
    </svg>
  );
}
