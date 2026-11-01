'use client';

import React from 'react';

interface ShapeGridProps {
  className?: string;
}

export default function ShapeGrid({ className = '' }: ShapeGridProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(148, 163, 184, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(148, 163, 184, 0.08) 1px, transparent 1px)
        `,
        backgroundSize: '32px 32px',
      }}
    >
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-slate-400/3 blur-3xl" />
      <div className="absolute -left-40 -bottom-20 h-80 w-80 rounded-full bg-slate-400/3 blur-3xl" />
    </div>
  );
}
