'use client';

import React, { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

export const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: -100, y: -100 });
  const rafId = useRef<number | null>(null);
  const isHoveredRef = useRef(false);
  const isVisibleRef = useRef(false);

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    // Enable custom cursor only on devices with fine pointer (mouse/trackpad) and no reduced motion preference
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsEnabled(false);
      return;
    }

    setIsEnabled(true);

    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
        if (!isVisibleRef.current) {
          isVisibleRef.current = true;
          cursorRef.current.style.opacity = '1';
        }
      }
      rafId.current = null;
    };

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;

      if (rafId.current === null) {
        rafId.current = requestAnimationFrame(updateCursor);
      }

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const shouldHover = Boolean(
        target.closest('a') ||
        target.closest('button') ||
        target.closest('[data-cursor-expand]') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      );

      if (shouldHover !== isHoveredRef.current) {
        isHoveredRef.current = shouldHover;
        if (dotRef.current) {
          if (shouldHover) {
            dotRef.current.className = "-translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-green transition-all duration-200 w-10 h-10 bg-brand-green/10 backdrop-blur-[1px] scale-110";
          } else {
            dotRef.current.className = "-translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-green transition-all duration-200 w-3.5 h-3.5 bg-brand-green/40";
          }
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.style.opacity = '0';
        isVisibleRef.current = false;
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []); // Run once on mount, zero re-binding

  if (!isEnabled) {
    return null;
  }

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-50 opacity-0 transition-opacity duration-200 will-change-transform"
      style={{
        transform: `translate3d(-100px, -100px, 0)`,
      }}
    >
      <div
        ref={dotRef}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-green transition-all duration-200 w-3.5 h-3.5 bg-brand-green/40"
      />
    </div>
  );
};
