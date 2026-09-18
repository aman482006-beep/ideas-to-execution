'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy } from 'lucide-react';

export const FinalHomeCTA: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hello@8ivc.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-28 px-6 sm:px-8 border-t border-line relative overflow-hidden bg-bg">
      {/* Visual Vector Terminating Path */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-24 pointer-events-none opacity-40">
        <svg viewBox="0 0 600 100" fill="none" className="w-full h-full">
          <path
            d="M 300 0 V 60 C 300 80 300 90 300 100"
            stroke="#cf4322"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <circle cx="300" cy="100" r="4" fill="#cf4322" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10 pt-10">
        <span className="font-mono text-xs tracking-[0.25em] text-brand-vermillion uppercase block mb-4">
          DESTINATION & CONVICTION
        </span>

        <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-none mb-8">
          Build something enduring.
        </h2>

        <p className="font-sans text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-10 leading-relaxed">
          If you are building early in fintech, consumer disruption, or AI infrastructure, we want to hear your story before certainty exists.
        </p>

        {/* Action Button & Direct Copy */}
        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@8ivc.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-bg font-sans font-semibold text-base sm:text-lg hover:bg-brand-ink transition-all shadow-md group"
          >
            <span>hello@8ivc.com</span>
            <ArrowUpRight className="w-5 h-5 text-bg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          <button
            type="button"
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-5 py-4 rounded-full bg-white border border-line font-mono text-xs text-ink hover:border-ink transition-colors"
            title="Copy email to clipboard"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-brand-green" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-ink-muted" />
                <span>Copy Email</span>
              </>
            )}
          </button>
        </div>

        <div className="mt-8 font-mono text-xs text-ink-muted flex items-center justify-center gap-3">
          <span>Mumbai Office</span>
          <span>·</span>
          <span>Bangalore Office</span>
          <span>·</span>
          <span>Origami Pre-Seed</span>
        </div>
      </div>
    </section>
  );
};
