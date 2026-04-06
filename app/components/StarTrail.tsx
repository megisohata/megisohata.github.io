"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  radius: number;
  color: string;
}

const COLORS = ["#EEEFEA", "#FFFFCF", "#FFEDAE", "#FFE57A"];

export default function StarTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);
  const lastPosRef = useRef({ x: 0, y: 0 });
  const isInitializedRef = useRef(false);

  function drawStar(
    ctx: CanvasRenderingContext2D,
    cx: number,
    cy: number,
    spikes: number,
    outerRadius: number,
    innerRadius: number,
  ) {
    let rot = (Math.PI / 2) * 3;
    let x = cx;
    let y = cy;
    let step = Math.PI / spikes;

    ctx.beginPath();
    ctx.moveTo(cx, cy - outerRadius);
    for (let i = 0; i < spikes; i++) {
      x = cx + Math.cos(rot) * outerRadius;
      y = cy + Math.sin(rot) * outerRadius;
      ctx.lineTo(x, y);
      rot += step;

      x = cx + Math.cos(rot) * innerRadius;
      y = cy + Math.sin(rot) * innerRadius;
      ctx.lineTo(x, y);
      rot += step;
    }
    ctx.lineTo(cx, cy - outerRadius);
    ctx.closePath();
    ctx.fill();
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const addStar = (x: number, y: number) => {
      starsRef.current.push({
        x: x + (Math.random() - 0.5) * 12, // Wider spread for a thicker trail
        y: y + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.5) * 0.5, // Faster spread
        vy: (Math.random() - 0.5) * 0.5 - 0.2, // Faster upward float
        life: 1,
        maxLife: Math.random() * 20 + 20, // Short lifespan prevents array bloating
        radius: Math.random() * 3 + 1.5, // Slightly larger base size
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isInitializedRef.current) {
        lastPosRef.current = { x: e.clientX, y: e.clientY };
        isInitializedRef.current = true;
      }

      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 3) {
        const steps = Math.floor(distance / 3);
        for (let i = 0; i < steps; i++) {
          const ix = lastPosRef.current.x + (dx * i) / steps;
          const iy = lastPosRef.current.y + (dy * i) / steps;
          addStar(ix, iy);
          addStar(ix, iy);
        }
        lastPosRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      starsRef.current = starsRef.current.filter((star) => star.life > 0);

      for (const star of starsRef.current) {
        star.x += star.vx;
        star.y += star.vy;
        star.life -= 1 / star.maxLife;

        const currentRadius = Math.max(0, star.radius * star.life);

        if (currentRadius > 0.1) {
          ctx.globalAlpha = Math.max(0, star.life);
          ctx.fillStyle = star.color;
          drawStar(
            ctx,
            star.x,
            star.y,
            4,
            currentRadius * 2,
            currentRadius * 0.5,
          );
        }
      }

      ctx.globalCompositeOperation = "source-over";

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 9999,
      }}
    />
  );
}
