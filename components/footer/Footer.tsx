'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-night text-[#fbf9f5] pt-20 pb-12 px-6 sm:px-8 border-t border-line relative overflow-hidden">
      {/* Decorative subtle path spine in footer */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#cf4322] to-transparent opacity-40" />

      <div className="max-w-7xl mx-auto">
        {/* Large Editorial Headline */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <span className="font-mono text-[11px] tracking-[0.25em] text-[#cf4322] uppercase block mb-3">
            ACTION OVER PROOF
          </span>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fbf9f5] max-w-3xl leading-[1.05]">
            Ready to build something enduring?
          </h2>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="mailto:hello@8ivc.com"
              className="inline-flex items-center gap-2 font-mono text-sm sm:text-base text-[#fbf9f5] bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full border border-white/15 transition-colors group"
            >
              <span>hello@8ivc.com</span>
              <ArrowUpRight className="w-4 h-4 text-[#cf4322] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <span className="font-mono text-xs text-white/50">
              Pitch deck & executive summary reviewed within 7 days
            </span>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16 text-sm">
          {/* Col 1: Brand & Presence */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-serif font-bold text-xl text-white">8i Ventures</span>
            </div>
            <p className="font-sans text-xs text-white/60 leading-relaxed mb-4">
              Early believers in founders building enduring companies across India and global markets.
            </p>
            <div className="font-mono text-xs text-white/70 space-y-1">
              <div>MUMBAI</div>
              <div>BANGALORE</div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-4">
              Explore
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-white/70 hover:text-white transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white/70 hover:text-white transition-colors">
                  News & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-white/70 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/leave" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Leave Hub</span>
                  <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-white/10 text-white/70">
                    Internal
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Programs & Terms */}
          <div>
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-4">
              Fast Capital
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link href="/origami" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Origami (7·14·30)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#cf4322]" />
                </Link>
              </li>
              <li>
                <Link href="/founders-day" className="text-white/70 hover:text-white transition-colors flex items-center gap-1.5">
                  <span>Founders&apos; Day (28 Nov)</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Governance & Compliance */}
          <div>
            <span className="font-mono text-[10px] tracking-widest text-white/40 uppercase block mb-4">
              Governance & LPs
            </span>
            <ul className="space-y-2.5 font-sans text-xs">
              <li>
                <Link
                  href="/investor-relations"
                  className="text-white/90 font-medium hover:text-white transition-colors flex items-center gap-1.5 group"
                >
                  <span>Investor Relations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white/50 group-hover:text-white" />
                </Link>
              </li>
              <li className="text-white/50 text-[11px] leading-relaxed pt-1">
                SEBI Registered Category II Alternative Investment Funds: Eight Innovate Investment Trust I & II.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} 8iVC. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/investor-relations" className="hover:text-white transition-colors">
              SEBI Scores & Compliance
            </Link>
            <span>·</span>
            <span>Zero Delays. Real Conviction.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
