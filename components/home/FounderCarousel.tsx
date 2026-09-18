'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { homeTestimonials } from '@/data/testimonials';
import { ArrowLeft, ArrowRight, ArrowUpRight, Quote } from 'lucide-react';
import { GenerativePattern } from '@/components/visual/GenerativePattern';

export const FounderCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Preload all testimonial images into browser cache on mount
  useEffect(() => {
    homeTestimonials.forEach((item) => {
      if (item.photo) {
        const img = new window.Image();
        img.src = item.photo;
      }
    });
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? homeTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === homeTestimonials.length - 1 ? 0 : prev + 1));
  };

  const current = homeTestimonials[currentIndex];

  return (
    <section className="py-24 px-6 sm:px-8 border-t border-line bg-surface/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 pb-6 border-b border-line gap-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-brand-vermillion uppercase block mb-2 font-semibold">
              FOUNDER PROOF
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink tracking-tight">
              In their own words.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            {/* Tabular centered counter */}
            <span className="font-mono text-xs tabular-nums text-ink-muted inline-flex items-center justify-center min-w-[54px] px-2.5 py-1 rounded-full bg-white/70 border border-line">
              {String(currentIndex + 1).padStart(2, '0')} / {String(homeTestimonials.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-ink hover:bg-bg transition-colors active:scale-95"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-line flex items-center justify-center text-ink hover:border-ink hover:bg-bg transition-colors active:scale-95"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Central Editorial Testimonial Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-h-[380px]">
          {/* Left Column: Pre-rendered / Preloaded Stack of Founder Portraits */}
          <div className="lg:col-span-5 h-72 sm:h-96 rounded-3xl overflow-hidden border border-line shadow-sm relative bg-bg/60">
            {homeTestimonials.map((item, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-300 ease-out will-change-[opacity] ${
                    isActive ? 'opacity-100 z-10' : 'opacity-0 pointer-events-none z-0'
                  }`}
                >
                  {item.photo ? (
                    <Image
                      src={item.photo}
                      alt={`${item.name}, ${item.role} of ${item.company}`}
                      fill
                      priority={idx === 0 || idx === 1}
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover object-top"
                    />
                  ) : (
                    <GenerativePattern
                      seed={item.id}
                      name={item.company}
                      accentColor="#143224"
                      className="w-full h-full"
                    />
                  )}
                </div>
              );
            })}

            {/* Overlays on portrait */}
            <div className="absolute top-4 left-4 z-20 bg-bg/90 border border-line px-3 py-1 rounded-full backdrop-blur-xs font-mono text-[10px] text-ink font-semibold">
              PORTFOLIO PARTNER
            </div>

            <div className="absolute bottom-4 right-4 z-20 bg-bg/90 border border-line px-3.5 py-1.5 rounded-xl backdrop-blur-xs flex items-center gap-2 shadow-xs transition-all">
              <span className="font-serif text-xs font-bold text-ink">{current.company}</span>
              <a
                href={current.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink-muted hover:text-brand-green flex items-center gap-1 font-mono text-[10px]"
                aria-label={`Visit ${current.company} website`}
              >
                <span>Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Large Editorial Quote */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full py-4">
            <div className="transition-opacity duration-200 min-h-[140px] flex flex-col justify-center">
              <Quote className="w-10 h-10 text-brand-green/20 mb-6 shrink-0" />
              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-ink leading-snug tracking-tight">
                “{current.quote}”
              </blockquote>
            </div>

            <div className="mt-8 pt-6 border-t border-line flex items-center justify-between">
              <div>
                <h3 className="font-serif text-xl font-bold text-ink">
                  {current.name}
                </h3>
                <p className="font-mono text-xs text-ink-muted mt-0.5">
                  {current.role}, <span className="text-ink font-medium">{current.company}</span>
                </p>
              </div>

              {current.companySlug && (
                <Link
                  href={`/companies/${current.companySlug}`}
                  className="font-mono text-xs text-brand-green hover:text-ink underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Company Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Progress Bar / Indicator Dots */}
        <div className="mt-12 flex items-center justify-center gap-2">
          {homeTestimonials.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-8 bg-brand-green' : 'w-2 bg-line hover:bg-ink-muted/40'
              }`}
              aria-label={`Go to slide ${idx + 1}: ${item.name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
