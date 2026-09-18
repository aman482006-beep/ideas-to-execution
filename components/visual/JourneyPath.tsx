'use client';

import React from 'react';

interface JourneyPathProps {
  progress?: number; // 0 to 1
  className?: string;
  variant?: 'hero' | 'horizontal' | 'serpentine' | 'connector';
  showNodes?: boolean;
}

export const JourneyPath: React.FC<JourneyPathProps> = ({
  progress = 1,
  className = '',
  variant = 'hero',
  showNodes = true,
}) => {
  // Clamp progress between 0 and 1
  const p = Math.max(0, Math.min(1, progress));

  if (variant === 'hero') {
    return (
      <svg
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full pointer-events-none ${className}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="heroPathGrad" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#143224" stopOpacity="0.25" />
            <stop offset="50%" stopColor="#143224" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#cf4322" stopOpacity="0.9" />
          </linearGradient>
          <filter id="glowHero" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Faint blueprint contour guides */}
        <path
          d="M 50 550 Q 300 480 500 380 T 950 200 T 1150 120"
          stroke="rgba(19, 20, 22, 0.05)"
          strokeWidth="1"
          strokeDasharray="4 6"
        />
        <path
          d="M 20 450 Q 350 520 650 320 T 1180 80"
          stroke="rgba(19, 20, 22, 0.04)"
          strokeWidth="1"
        />

        {/* Main Journey Spine */}
        <path
          d="M 80 520 C 260 480 340 380 520 340 C 700 300 820 180 1080 140"
          stroke="url(#heroPathGrad)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="1400"
          strokeDashoffset={1400 * (1 - p)}
          style={{ transition: 'stroke-dashoffset 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
        />

        {/* Dynamic Traveling Beacon Node */}
        {showNodes && (
          <>
            <g
              transform={`translate(${80 + (1080 - 80) * p}, ${520 + (140 - 520) * Math.sin(p * Math.PI * 0.5)})`}
              style={{ transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <circle r="9" fill="rgba(207, 67, 34, 0.15)" />
              <circle r="4.5" fill="#cf4322" />
              <circle r="2" fill="#ffffff" />
            </g>

            {/* Seed milestone nodes */}
            <circle cx="80" cy="520" r="4" fill="#143224" />
            <circle cx="520" cy="340" r="4" fill="#143224" opacity={p > 0.4 ? 1 : 0.3} />
            <circle cx="1080" cy="140" r="5" fill="#cf4322" opacity={p > 0.9 ? 1 : 0.3} />
          </>
        )}
      </svg>
    );
  }

  if (variant === 'serpentine') {
    return (
      <svg
        viewBox="0 0 400 1200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full pointer-events-none ${className}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="serpentineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#143224" stopOpacity="0.4" />
            <stop offset="40%" stopColor="#143224" stopOpacity="0.9" />
            <stop offset="75%" stopColor="#1d4a38" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#cf4322" stopOpacity="1" />
          </linearGradient>
        </defs>

        {/* Background track */}
        <path
          d="M 200 40 C 200 150 100 220 100 320 C 100 440 300 520 300 640 C 300 760 120 840 120 960 C 120 1060 200 1120 200 1180"
          stroke="rgba(19, 20, 22, 0.08)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />

        {/* Active drawn path */}
        <path
          d="M 200 40 C 200 150 100 220 100 320 C 100 440 300 520 300 640 C 300 760 120 840 120 960 C 120 1060 200 1120 200 1180"
          stroke="url(#serpentineGrad)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1600"
          strokeDashoffset={1600 * (1 - p)}
          style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
        />
      </svg>
    );
  }

  // connector variant
  return (
    <svg
      viewBox="0 0 800 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-full pointer-events-none ${className}`}
    >
      <path
        d="M 0 80 H 350 C 420 80 440 40 500 40 H 800"
        stroke="rgba(19, 20, 22, 0.15)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <path
        d="M 0 80 H 350 C 420 80 440 40 500 40 H 800"
        stroke="#143224"
        strokeWidth="2"
        strokeDasharray="900"
        strokeDashoffset={900 * (1 - p)}
        style={{ transition: 'stroke-dashoffset 0.5s ease-out' }}
      />
    </svg>
  );
};
