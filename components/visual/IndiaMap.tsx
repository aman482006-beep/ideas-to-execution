'use client';

import React, { useState } from 'react';

interface OfficeNodeData {
  city: string;
  region: string;
  role: string;
  focus: string;
  x: number;
  y: number;
}

export const IndiaMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [selectedOffice, setSelectedOffice] = useState<string>('mumbai');

  const offices: Record<string, OfficeNodeData> = {
    mumbai: {
      city: "Mumbai",
      region: "Maharashtra",
      role: "Headquarters & Fund Operations",
      focus: "Investment Committee, SEBI Compliance, Investor Relations",
      x: 185,
      y: 310
    },
    bangalore: {
      city: "Bangalore",
      region: "Karnataka",
      role: "Operator & Tech Studio",
      focus: "Origami Evaluation, Portfolio Acceleration, Founder Diligence",
      x: 235,
      y: 430
    }
  };

  return (
    <div className={`relative w-full max-w-lg mx-auto ${className}`}>
      <svg
        viewBox="0 0 500 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto drop-shadow-md"
      >
        <defs>
          <filter id="nodeGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Abstract India Vector Silhouette */}
        <path
          d="M 230 40 L 260 70 L 290 85 L 320 120 L 310 160 L 360 180 L 400 200 L 430 220 L 390 250 L 360 260 L 370 290 L 340 330 L 310 390 L 280 470 L 250 530 L 240 560 L 230 530 L 190 440 L 160 380 L 130 330 L 100 280 L 120 220 L 160 180 L 180 130 L 200 90 Z"
          fill="rgba(20, 50, 36, 0.04)"
          stroke="rgba(20, 50, 36, 0.25)"
          strokeWidth="1.5"
          strokeLinejoin="round"
          strokeDasharray="4 4"
        />

        {/* Topographic internal latitude/longitude lines */}
        <line x1="80" y1="200" x2="420" y2="200" stroke="rgba(19, 20, 22, 0.06)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="80" y1="350" x2="420" y2="350" stroke="rgba(19, 20, 22, 0.06)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="80" y1="500" x2="350" y2="500" stroke="rgba(19, 20, 22, 0.06)" strokeWidth="0.8" strokeDasharray="3 3" />
        <line x1="250" y1="60" x2="250" y2="550" stroke="rgba(19, 20, 22, 0.06)" strokeWidth="0.8" strokeDasharray="3 3" />

        {/* Connecting vector spine between Mumbai and Bangalore */}
        <path
          d="M 185 310 Q 200 370 235 430"
          stroke="#143224"
          strokeWidth="2"
          strokeDasharray="4 4"
        />

        {/* Mumbai Node */}
        <g
          className="cursor-pointer group"
          onClick={() => setSelectedOffice('mumbai')}
          transform="translate(185, 310)"
        >
          <circle r="24" fill="rgba(207, 67, 34, 0.12)" className="animate-ping origin-center" />
          <circle r="14" fill="rgba(207, 67, 34, 0.2)" />
          <circle r="6" fill="#cf4322" />
          <circle r="2.5" fill="#ffffff" />
          <text
            x="20"
            y="5"
            fill="#131416"
            fontSize="12"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="0.05em"
          >
            MUMBAI
          </text>
        </g>

        {/* Bangalore Node */}
        <g
          className="cursor-pointer group"
          onClick={() => setSelectedOffice('bangalore')}
          transform="translate(235, 430)"
        >
          <circle r="24" fill="rgba(20, 50, 36, 0.12)" className="animate-ping origin-center" />
          <circle r="14" fill="rgba(20, 50, 36, 0.2)" />
          <circle r="6" fill="#143224" />
          <circle r="2.5" fill="#ffffff" />
          <text
            x="20"
            y="5"
            fill="#131416"
            fontSize="12"
            fontWeight="700"
            fontFamily="monospace"
            letterSpacing="0.05em"
          >
            BANGALORE
          </text>
        </g>
      </svg>

      {/* Interactive Detail Card */}
      <div className="mt-4 p-5 bg-white border border-line rounded-xl shadow-sm transition-all duration-300">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span
              className={`w-2.5 h-2.5 rounded-full ${
                selectedOffice === 'mumbai' ? 'bg-brand-vermillion' : 'bg-brand-green'
              }`}
            />
            <h4 className="font-serif text-lg font-bold text-ink">
              {offices[selectedOffice].city}, India
            </h4>
          </div>
          <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase bg-bg px-2 py-0.5 rounded border border-line">
            {offices[selectedOffice].region}
          </span>
        </div>
        <p className="font-sans text-xs font-medium text-ink mb-1">
          {offices[selectedOffice].role}
        </p>
        <p className="font-sans text-xs text-ink-muted">
          {offices[selectedOffice].focus}
        </p>
      </div>
    </div>
  );
};
