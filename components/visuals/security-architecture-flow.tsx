"use client";

import { motion } from "framer-motion";
import { securitySystem } from "@/data/security";
import { useLanguage } from "@/components/providers/language-provider";

const toneClasses: Record<string, string> = {
  source: "border-slate-300 bg-white text-slate-900",
  server: "border-slate-900 bg-slate-900 text-white",
  soar: "border-blue-600 bg-blue-600 text-white",
  branch: "border-slate-200 bg-slate-50 text-slate-900",
  decision: "border-amber-300 bg-amber-50 text-amber-950",
  action: "border-cyan-300 bg-cyan-50 text-cyan-950",
  note: "border-slate-300 bg-slate-100 text-slate-700",
};

export function SecurityArchitectureFlow() {
  const { tr } = useLanguage();
  const { width, height, edges, nodes } = securitySystem.diagram;

  return (
    <div
      className="relative mx-auto"
      style={{ width, height }}
      role="img"
      aria-label="Cyber defense architecture flow with Wazuh, Suricata, SOAR, and LLM triage"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <marker id="security-flow-arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
            <path d="M0,0 L0,6 L9,3 z" fill="#94A3B8" />
          </marker>
        </defs>
        {edges.map((d, i) => (
          <g key={i}>
            <path d={d} stroke="#CBD5E1" strokeWidth="2" markerEnd="url(#security-flow-arrow)" />
            <motion.path
              d={d}
              stroke="#06B6D4"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="6 14"
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              animate={{ strokeDashoffset: [0, -40] }}
              transition={{ strokeDashoffset: { duration: 2, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.4 } }}
            />
          </g>
        ))}
      </svg>

      {nodes.map((node, i) => (
        <motion.div
          key={node.key}
          className={`absolute flex flex-col items-center justify-center rounded-xl border px-3 text-center shadow-sm ${toneClasses[node.tone]}`}
          style={{ left: node.x, top: node.y, width: node.w, height: node.h }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: Math.min(i * 0.04, 0.6) }}
        >
          <span
            className={`font-bold leading-tight ${
              node.tone === "note" ? "text-[11px]" : "text-[13px]"
            }`}
          >
            {tr(node.title)}
          </span>
          {node.detail ? (
            <span className="mt-1 text-[10px] leading-tight opacity-75">{tr(node.detail)}</span>
          ) : null}
        </motion.div>
      ))}
    </div>
  );
}
