'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { generalPartners } from '@/data/team';

export const TeamTeaser: React.FC = () => {
  return (
    <section className="py-24 px-6 sm:px-8 max-w-7xl mx-auto border-t border-line">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and Narrative */}
        <div className="lg:col-span-6">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-3">
            PEOPLE BEHIND THE CONVICTION
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            Meet 8i team.
          </h2>

          <p className="mt-6 font-serif text-xl sm:text-2xl text-ink/90 italic leading-relaxed">
            “We are operators turned investors who’ve built businesses in India and Silicon Valley.”
          </p>

          <p className="mt-4 font-sans text-sm text-ink-muted leading-relaxed">
            We partner with founders as peers. Our General Partners have managed $300M P&Ls at consumer giants like Unilever and scaled technology platforms to $300M exits to Hewlett-Packard.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link
              href="/team"
              className="inline-flex items-center gap-2.5 bg-brand-green text-bg font-sans font-medium text-sm px-6 py-3 rounded-full hover:bg-brand-ink transition-colors group shadow-sm"
            >
              <span>Meet the team</span>
              <ArrowRight className="w-4 h-4 text-bg group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column: Overlapping Editorial Profile Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Vikram Card */}
            <div className="p-6 rounded-2xl bg-white border border-line shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-line mb-4 bg-bg shadow-xs relative">
                <Image
                  src="https://framerusercontent.com/images/qZbEhvJg8OOBkZ8xtBy3Pt3blpg.png"
                  alt="Vikram Chachra, General Partner & CIO"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-semibold">
                GENERAL PARTNER & CIO
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                Vikram Chachra
              </h3>
              <p className="font-sans text-xs text-ink-muted mt-2 line-clamp-3 leading-relaxed">
                Co-founded SNAZ ($18M raise), scaled Snapfish ($300M cash exit to HP), Eight Capital turnaround fund. Signature bets in Slice, M2P, Signzy.
              </p>
              <div className="mt-4 pt-3 border-t border-line font-mono text-[10px] text-ink-muted">
                NYU Stern MBA · SRCC
              </div>
            </div>

            {/* Vishy Card */}
            <div className="p-6 rounded-2xl bg-surface-card border border-line shadow-sm hover:shadow-md transition-shadow sm:translate-y-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-line mb-4 bg-bg shadow-xs relative">
                <Image
                  src="https://framerusercontent.com/images/ieSdD7VQaN9EO4B1ZzlBjSC0fg.png"
                  alt="Vishwanath V, General Partner"
                  fill
                  sizes="64px"
                  className="object-cover object-top"
                />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-brand-jade uppercase font-semibold">
                GENERAL PARTNER
              </span>
              <h3 className="font-serif text-2xl font-bold text-ink mt-1">
                Vishwanath V
              </h3>
              <p className="font-sans text-xs text-ink-muted mt-2 line-clamp-3 leading-relaxed">
                Hindustan Unilever 9-year leader ($300M P&L), Marketing Director at Urban Ladder (Series C), CMO at Voonik ($100M scale).
              </p>
              <div className="mt-4 pt-3 border-t border-line font-mono text-[10px] text-ink-muted">
                IIM Ahmedabad MBA · IIT Madras
              </div>
            </div>
          </div>

          {/* Background Decorative Stamp */}
          <div className="absolute -bottom-6 -right-4 font-mono text-[90px] font-black text-ink/[0.03] select-none pointer-events-none -z-10 leading-none">
            8i TEAM
          </div>
        </div>
      </div>
    </section>
  );
};
