"use client";

import React, { useEffect, useState, useRef } from "react";

const iconList = [
  "icons/clover.png",
  "icons/fern.png",
  "icons/flower.png",
  "icons/plant.png",
  "icons/sapling.png",
  "icons/sparkle.png",
  "icons/tulip.png",
];

const PatternIconCover: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [icons, setIcons] = useState<
    { icon: string; left: string; top: string }[]
  >([]);

  useEffect(() => {
    const generatePattern = (rows: number, cols: number) => {
      const icons = [];
      const spacingX = 100 / cols;
      const spacingY = 100 / rows;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const offsetX = row % 2 === 0 ? spacingX / 2 : 0;
          const left = `${col * spacingX + offsetX}%`;
          const top = `${row * spacingY}%`;
          const randomIcon =
            iconList[Math.floor(Math.random() * iconList.length)];
          icons.push({ icon: randomIcon, left, top });
        }
      }
      return icons;
    };

    const handleResize = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const containerWidth = containerRef.current.offsetWidth;
        const rows = Math.ceil(containerHeight / 200);
        const cols = Math.ceil(containerWidth / 250);
        setIcons(generatePattern(rows, cols));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden">
      {icons.map((icon, index) => (
        <img
          key={index}
          src={icon.icon}
          alt={`icon-${index}`}
          className="absolute h-10 spin"
          style={{
            left: icon.left,
            top: icon.top,
          }}
        />
      ))}
    </div>
  );
};

export default PatternIconCover;
