'use client';

import React, { useEffect, useRef } from 'react';

interface AcidSquaresProps {
  className?: string;
  opacity?: number;
}

export default function AcidSquares({ className = '', opacity = 0.4 }: AcidSquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const squares: Array<{
      x: number;
      y: number;
      size: number;
      vx: number;
      vy: number;
      rotation: number;
      vr: number;
      hue: number;
    }> = [];

    for (let i = 0; i < 20; i++) {
      squares.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        vr: (Math.random() - 0.5) * 0.02,
        hue: Math.random() * 360,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      squares.forEach((sq) => {
        sq.x += sq.vx;
        sq.y += sq.vy;
        sq.rotation += sq.vr;
        sq.hue = (sq.hue + 0.5) % 360;

        if (sq.x < -sq.size) sq.x = canvas.width + sq.size;
        if (sq.x > canvas.width + sq.size) sq.x = -sq.size;
        if (sq.y < -sq.size) sq.y = canvas.height + sq.size;
        if (sq.y > canvas.height + sq.size) sq.y = -sq.size;

        ctx.save();
        ctx.translate(sq.x, sq.y);
        ctx.rotate(sq.rotation);
        ctx.strokeStyle = `hsla(${sq.hue}, 100%, 60%, 0.6)`;
        ctx.lineWidth = 2;
        ctx.strokeRect(-sq.size / 2, -sq.size / 2, sq.size, sq.size);
        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none fixed inset-0 ${className}`}
      style={{ opacity, zIndex: 0 }}
    />
  );
}
