"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
}

export const SparklesCore = ({
  id,
  className,
  background,
  minSize,
  maxSize,
  particleDensity,
  particleColor,
}: {
  id: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const initParticles = () => {
      const density = particleDensity ?? 50;
      const newParticles = [];
      for (let i = 0; i < density; i++) {
        const particle = {
          x: Math.random() * 100,
          y: Math.random() * 100,
          size:
            Math.random() * ((maxSize ?? 2) - (minSize ?? 0.5)) +
            (minSize ?? 0.5),
          opacity: Math.random(),
        };
        newParticles.push(particle);
      }
      setParticles(newParticles);
    };

    initParticles();
  }, [maxSize, minSize, particleDensity]);

  return (
    <div
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{
        background: background ?? "transparent",
      }}
    >
      <svg width="100%" height="100%">
        {particles.map((particle, i) => (
          <circle
            key={i}
            cx={`${particle.x}%`}
            cy={`${particle.y}%`}
            r={particle.size}
            fill={particleColor ?? "#FFFFFF"}
            opacity={particle.opacity}
          >
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur={`${Math.random() * 3 + 2}s`}
              repeatCount="indefinite"
              begin={`${Math.random() * 2}s`}
            />
          </circle>
        ))}
      </svg>
    </div>
  );
};
