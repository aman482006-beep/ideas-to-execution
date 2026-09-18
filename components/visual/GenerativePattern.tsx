'use client';

import React from 'react';

interface GenerativePatternProps {
  seed: string;
  name: string;
  className?: string;
  accentColor?: string;
}

export const GenerativePattern: React.FC<GenerativePatternProps> = ({
  seed,
  name,
  className = '',
  accentColor = '#143224',
}) => {
  // Simple deterministic hash from string
  const hash = seed.split('').reduce((acc, char, i) => acc + char.charCodeAt(0) * (i + 1), 0);
  const variant = hash % 5;
  const secondaryHue = (hash * 37) % 360;

  return (
    <div className={`relative overflow-hidden w-full h-full flex items-center justify-center bg-surface-card ${className}`}>
      <svg
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover pointer-events-none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id={`grid-${seed}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(19, 20, 22, 0.05)" strokeWidth="0.8" />
          </pattern>
          <linearGradient id={`grad-${seed}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#143224" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#cf4322" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <rect width="400" height="300" fill={`url(#grad-${seed})`} />
        <rect width="400" height="300" fill={`url(#grid-${seed})`} />

        {/* Variant 0: Concentric Blueprint Rings */}
        {variant === 0 && (
          <g transform="translate(200, 150)" opacity="0.35">
            <circle r="120" stroke={accentColor} strokeWidth="1" strokeDasharray="6 6" />
            <circle r="90" stroke={accentColor} strokeWidth="1.2" />
            <circle r="60" stroke="#cf4322" strokeWidth="1" strokeDasharray="3 3" />
            <circle r="30" stroke={accentColor} strokeWidth="1" />
            <line x1="-130" y1="0" x2="130" y2="0" stroke="rgba(19, 20, 22, 0.15)" strokeWidth="0.8" />
            <line x1="0" y1="-130" x2="0" y2="130" stroke="rgba(19, 20, 22, 0.15)" strokeWidth="0.8" />
          </g>
        )}

        {/* Variant 1: Isometric Modern Architectural Geometry */}
        {variant === 1 && (
          <g transform="translate(140, 80)" opacity="0.3">
            <polygon points="60,0 120,35 60,70 0,35" fill="none" stroke={accentColor} strokeWidth="1.5" />
            <polygon points="0,35 60,70 60,140 0,105" fill="none" stroke={accentColor} strokeWidth="1.5" />
            <polygon points="60,70 120,35 120,105 60,140" fill="none" stroke="#cf4322" strokeWidth="1.5" />
            <line x1="60" y1="0" x2="60" y2="140" stroke="rgba(19, 20, 22, 0.2)" strokeWidth="1" strokeDasharray="2 4" />
          </g>
        )}

        {/* Variant 2: Diagonal Vector Rays & Horizon */}
        {variant === 2 && (
          <g opacity="0.25">
            <line x1="0" y1="300" x2="400" y2="0" stroke={accentColor} strokeWidth="1.5" />
            <line x1="0" y1="200" x2="400" y2="100" stroke={accentColor} strokeWidth="1" strokeDasharray="4 6" />
            <line x1="50" y1="300" x2="350" y2="0" stroke="#cf4322" strokeWidth="1" />
            <circle cx="200" cy="150" r="45" stroke={accentColor} strokeWidth="1.2" fill="none" />
          </g>
        )}

        {/* Variant 3: Topological Wave & Signal Nodes */}
        {variant === 3 && (
          <g opacity="0.3">
            <path d="M 0 150 Q 100 80 200 150 T 400 150" stroke={accentColor} strokeWidth="2" fill="none" />
            <path d="M 0 180 Q 100 110 200 180 T 400 180" stroke="#cf4322" strokeWidth="1" fill="none" strokeDasharray="4 4" />
            <circle cx="100" cy="115" r="4" fill={accentColor} />
            <circle cx="300" cy="185" r="4" fill="#cf4322" />
          </g>
        )}

        {/* Variant 4: Tech Monolith & Grid Points */}
        {variant === 4 && (
          <g opacity="0.28">
            <rect x="130" y="80" width="140" height="140" stroke={accentColor} strokeWidth="1.5" fill="none" />
            <rect x="155" y="105" width="90" height="90" stroke="#cf4322" strokeWidth="1" strokeDasharray="3 3" fill="none" />
            <line x1="130" y1="150" x2="270" y2="150" stroke="rgba(19, 20, 22, 0.2)" strokeWidth="1" />
            <line x1="200" y1="80" x2="200" y2="220" stroke="rgba(19, 20, 22, 0.2)" strokeWidth="1" />
          </g>
        )}
      </svg>

      {/* Central Typographic Brand Mark */}
      <div className="relative z-10 text-center px-6 py-4 bg-bg/90 backdrop-blur-sm border border-line rounded-lg shadow-sm max-w-[85%]">
        <span className="block font-mono text-[10px] tracking-[0.2em] text-ink-muted uppercase mb-1">
          8i PORTFOLIO
        </span>
        <h3 className="font-serif text-2xl font-bold tracking-tight text-ink">
          {name}
        </h3>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
          <span className="font-mono text-[9px] tracking-wider text-ink-muted uppercase">
            ACTIVE ARCHIVE ENTRY
          </span>
        </div>
      </div>
    </div>
  );
};
