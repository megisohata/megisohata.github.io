"use client";

import { useEffect, useRef } from "react";

const COLORS = {
  bg: "#041121",
  dust: [
    "#202947",
    "#2C6CB5",
    "#203550",
    "#99C3EA",
    "#EEEFEA",
    "#FFFFCF",
    "#FFEDAE",
    "#FFE57A",
    "#84A3FF",
    "#DBC5F1",
  ],
  stars: ["#EEEFEA", "#FFFFCF", "#FFEDAE", "#FFE57A"],
};

interface Particle {
  r: number;
  angle: number;
  fixedX: number;
  fixedY: number;
  size: number;
  color: string;
  speed: number;
  type: "dust" | "star";
  twinklePhase: number;
  twinkleSpeed: number;
}

export default function GalaxyHeader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const createTintedStarCache = (radius: number, color: string) => {
      const offCanvas = document.createElement("canvas");
      const size = radius * 2;
      offCanvas.width = size * 2;
      offCanvas.height = size * 2;
      const oCtx = offCanvas.getContext("2d");
      if (!oCtx) return offCanvas;

      const cx = size;
      const cy = size;

      oCtx.fillStyle = color;
      oCtx.beginPath();
      oCtx.moveTo(cx, cy - radius);
      oCtx.quadraticCurveTo(cx, cy, cx + radius, cy);
      oCtx.quadraticCurveTo(cx, cy, cx, cy + radius);
      oCtx.quadraticCurveTo(cx, cy, cx - radius, cy);
      oCtx.quadraticCurveTo(cx, cy, cx, cy - radius);
      oCtx.fill();

      return offCanvas;
    };

    const tintedStarImages = new Map<string, HTMLCanvasElement>();
    COLORS.stars.forEach((color) => {
      tintedStarImages.set(color, createTintedStarCache(15, color));
    });

    const particles: Particle[] = [];
    const MAX_RADIUS = Math.max(width, height) * 1.2;
    const ARMS = 6;
    const TIGHTNESS = 0.015;

    for (let i = 0; i < 12000; i++) {
      const r = Math.pow(Math.random(), 1.8) * MAX_RADIUS;
      const spiralAngle = r * TIGHTNESS;
      const armOffset =
        ((Math.PI * 2) / ARMS) * Math.floor(Math.random() * ARMS);
      const noise = (Math.random() - Math.random()) * 0.4 * (1 + r / 500);

      particles.push({
        type: "dust",
        r,
        angle: spiralAngle + armOffset + noise,
        fixedX: 0,
        fixedY: 0,
        size: Math.random() * 1.5 + 0.5,
        color: COLORS.dust[Math.floor(Math.random() * COLORS.dust.length)],
        speed: 0.0002 + (20 / (r + 100)) * 0.0005,
        twinklePhase: 0,
        twinkleSpeed: 0,
      });
    }

    for (let i = 0; i < 300; i++) {
      particles.push({
        type: "star",
        r: 0,
        angle: 0,
        fixedX: (Math.random() - 0.5) * MAX_RADIUS * 3,
        fixedY: (Math.random() - 0.5) * MAX_RADIUS * 3,
        size: Math.random() * 1.5 + 0.5,
        color: COLORS.stars[Math.floor(Math.random() * COLORS.stars.length)],
        speed: 0,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.005 + Math.random() * 0.01,
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let globalRotation = 0;

    const draw = () => {
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, width, height);

      const centerX = width / 2;
      const centerY = height / 2;
      const mouseRelX = (mouseRef.current.x - centerX) / centerX;
      const mouseRelY = (mouseRef.current.y - centerY) / centerY;
      const offsetX = -mouseRelX * 40;
      const offsetY = -mouseRelY * 40;

      globalRotation -= 0.0003;

      ctx.globalCompositeOperation = "lighter";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        let x, y;

        if (p.type === "dust") {
          p.angle += p.speed;
          const currentAngle = p.angle + globalRotation;
          x = centerX + Math.cos(currentAngle) * p.r + offsetX * 0.3;
          y = centerY + Math.sin(currentAngle) * p.r + offsetY * 0.3;

          if (x < -50 || x > width + 50 || y < -50 || y > height + 50) continue;

          ctx.fillStyle = p.color;
          ctx.globalAlpha = Math.max(0.1, 1 - p.r / MAX_RADIUS);
          ctx.fillRect(x, y, p.size, p.size);
        } else {
          x = centerX + p.fixedX + offsetX;
          y = centerY + p.fixedY + offsetY;

          if (x < -100 || x > width + 100 || y < -100 || y > height + 100)
            continue;

          p.twinklePhase += p.twinkleSpeed;
          const twinkle = Math.abs(Math.sin(p.twinklePhase));

          ctx.globalAlpha = 0.1 + twinkle * 0.9;

          const img = tintedStarImages.get(p.color);
          if (img) {
            const renderSize = (img.width / 2) * p.size;
            ctx.drawImage(
              img,
              x - renderSize / 2,
              y - renderSize / 2,
              renderSize,
              renderSize,
            );
          }
        }
      }

      ctx.globalCompositeOperation = "source-over";
      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
  );
}
