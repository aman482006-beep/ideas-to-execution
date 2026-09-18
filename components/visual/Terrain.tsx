'use client';

import React from 'react';

interface TerrainProps {
  progress?: number;
  className?: string;
  variant?: 'subtle' | 'dense' | 'origami';
}

export const Terrain: React.FC<TerrainProps> = ({
  progress = 0.5,
  className = '',
  variant = 'subtle',
}) => {
  return (
    <svg
      viewBox="0 0 1000 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto pointer-events-none opacity-40 ${className}`}
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="terrainGrad1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#143224" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#143224" stopOpacity="0.01" />
        </linearGradient>
        <linearGradient id="terrainGrad2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#cf4322" stopOpacity="0.05" />
          <stop offset="100%" stopColor="#cf4322" stopOpacity="0.0" />
        </linearGradient>
      </defs>

      {/* Topographic layer 1 - Background ridges */}
      <path
        d="M 0 280 Q 250 200 500 260 T 1000 220 L 1000 400 L 0 400 Z"
        fill="url(#terrainGrad1)"
        stroke="rgba(20, 50, 36, 0.08)"
        strokeWidth="1"
      />

      {/* Topographic layer 2 - Midground contour */}
      <path
        d="M 0 320 Q 300 250 600 310 T 1000 280 L 1000 400 L 0 400 Z"
        fill="url(#terrainGrad2)"
        stroke="rgba(207, 67, 34, 0.06)"
        strokeWidth="1"
      />

      {/* Contour elevation lines */}
      <path
        d="M 100 270 C 350 220 700 290 900 240"
        stroke="rgba(19, 20, 22, 0.06)"
        strokeWidth="0.75"
        strokeDasharray="3 5"
      />
      <path
        d="M 50 310 C 280 270 650 340 950 300"
        stroke="rgba(19, 20, 22, 0.05)"
        strokeWidth="0.75"
        strokeDasharray="2 4"
      />

      {/* Minimal botanical geometric accents (Trees / signals) */}
      {variant === 'origami' && (
        <g opacity="0.6">
          <line x1="220" y1="240" x2="220" y2="215" stroke="#143224" strokeWidth="1.5" />
          <circle cx="220" cy="210" r="4.5" fill="#143224" />

          <line x1="240" y1="245" x2="240" y2="225" stroke="#143224" strokeWidth="1" />
          <circle cx="240" cy="222" r="3.5" fill="#143224" />

          <line x1="680" y1="290" x2="680" y2="260" stroke="#143224" strokeWidth="1.5" />
          <polygon points="680,250 673,265 687,265" fill="#143224" />

          <line x1="710" y1="300" x2="710" y2="275" stroke="#143224" strokeWidth="1" />
          <polygon points="710,268 704,280 716,280" fill="#143224" />
        </g>
      )}
    </svg>
  );
};
