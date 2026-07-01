"use client";

import { motion } from "framer-motion";

export function CloudInfrastructure() {
  return (
    <svg viewBox="0 0 520 320" className="h-full w-full" fill="none" role="img" aria-label="Hybrid cloud infrastructure diagram">
      <defs>
        <linearGradient id="cloud-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#EFF6FF" />
          <stop offset="100%" stopColor="#DBEAFE" />
        </linearGradient>
        <linearGradient id="server-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0F172A" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>
      </defs>

      {/* cloud shape */}
      <motion.path
        d="M170 110c-24 0-43 18-46 41-19 3-34 19-34 39 0 22 18 40 40 40h210c20 0 36-16 36-36 0-17-12-32-28-35 1-3 1-6 1-9 0-25-20-45-45-45-8 0-16 2-22 6-9-13-24-21-42-21-38 0-70 25-70 20z"
        fill="url(#cloud-fill)"
        stroke="#2563EB"
        strokeWidth="1.5"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      />
      <text x="260" y="170" textAnchor="middle" fontSize="12" fontWeight="700" fill="#1D4ED8">
        Hybrid Cloud Layer
      </text>

      {/* connecting lines down to on-prem servers */}
      {[130, 260, 390].map((x, i) => (
        <motion.line
          key={i}
          x1={x}
          y1="195"
          x2={x}
          y2="235"
          stroke="#94A3B8"
          strokeWidth="2"
          strokeDasharray="4 4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
        />
      ))}

      {/* server racks on-prem */}
      {[
        { x: 80, label: "VPS Node" },
        { x: 210, label: "Nextcloud" },
        { x: 340, label: "DB Cluster" },
      ].map((s, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
        >
          <rect x={s.x} y="235" width="100" height="60" rx="8" fill="url(#server-fill)" />
          {[0, 1, 2].map((r) => (
            <rect key={r} x={s.x + 10} y={245 + r * 14} width="80" height="8" rx="2" fill="#334155" />
          ))}
          <circle cx={s.x + 84} cy={249 + 0 * 14} r="2.5" fill="#10B981" />
          <text x={s.x + 50} y="310" textAnchor="middle" fontSize="10.5" fontWeight="600" fill="#475569">
            {s.label}
          </text>
        </motion.g>
      ))}

      {/* small floating cloud icons for redundancy */}
      <motion.circle
        cx="440"
        cy="70"
        r="4"
        fill="#06B6D4"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="70"
        cy="60"
        r="3"
        fill="#2563EB"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
    </svg>
  );
}
