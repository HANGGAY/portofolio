'use client';

import React from 'react';

interface LiquidChromeProps {
  className?: string;
  opacity?: number;
}

export default function LiquidChrome({ className = '', opacity = 0.35 }: LiquidChromeProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ opacity }}
    >
      <div className="liquid-chrome-bg absolute inset-0" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" />
    </div>
  );
}
