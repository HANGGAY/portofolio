"use client";

import { useEffect } from "react";

const IGNORED_WARNINGS = [
  "THREE.Clock: This module has been deprecated",
  "using deprecated parameters for the initialization function",
  "using deprecated parameters for `initSync()`",
];

export function ConsoleFilter() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") return;
    const originalWarn = console.warn;
    console.warn = (...args: unknown[]) => {
      const message = typeof args[0] === "string" ? args[0] : "";
      if (IGNORED_WARNINGS.some((entry) => message.includes(entry))) return;
      originalWarn(...args);
    };
    return () => {
      console.warn = originalWarn;
    };
  }, []);
  return null;
}
