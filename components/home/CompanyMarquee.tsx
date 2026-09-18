'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companies, Company } from '@/data/companies';
import { ArrowRight, ArrowUpRight, Globe } from 'lucide-react';

export const CompanyMarquee: React.FC = () => {
  const [activeCompany, setActiveCompany] = useState<Company>(companies[0]);

  // First 14 companies for marquee teaser
  const marqueeList = companies.slice(0, 14);

  return (
    <section className="py-24 border-t border-line bg-surface/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-2">
              THE PORTFOLIO
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Stories of compounding value.
            </h2>
          </div>
          <Link
            href="/companies"
            className="inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-ink hover:text-brand-vermillion transition-colors"
          >
            <span>View all {companies.length} companies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Interactive Ribbon Matrix with Real Logos */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-10">
          {marqueeList.map((comp) => {
            const isSelected = activeCompany.slug === comp.slug;
            return (
              <button
                key={comp.slug}
                type="button"
                onClick={() => setActiveCompany(comp)}
                onMouseEnter={() => {
                  if (activeCompany.slug !== comp.slug) {
                    setActiveCompany(comp);
                  }
                }}
                className={`p-3.5 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between min-h-[96px] ${
                  isSelected
                    ? 'bg-brand-green text-bg border-brand-green shadow-md scale-[1.03]'
                    : 'bg-surface border-line hover:border-ink/40 text-ink'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg p-1 flex items-center justify-center ${isSelected ? 'bg-white' : 'bg-bg border border-line'}`}>
                    {comp.logo ? (
                      <Image src={comp.logo} alt={comp.name} width={28} height={28} className="object-contain" />
                    ) : (
                      <span className="font-serif font-bold text-xs text-ink">{comp.name.slice(0, 2)}</span>
                    )}
                  </div>
                  <span
                    className={`font-mono text-[9px] tracking-widest uppercase ${
                      isSelected ? 'text-bg/80' : 'text-ink-muted'
                    }`}
                  >
                    {comp.partneredYear}
                  </span>
                </div>
                <h3
                  className={`font-serif text-sm font-bold truncate ${
                    isSelected ? 'text-bg' : 'text-ink'
                  }`}
                >
                  {comp.name}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card for Active Hovered/Tapped Company */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-line shadow-sm relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded bg-bg border border-line text-ink">
                  {activeCompany.location}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  Founded {activeCompany.foundedYear} · Backed {activeCompany.partneredYear}
                </span>
                {activeCompany.status === 'exited' && (
                  <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-brand-vermillion/15 text-brand-vermillion border border-brand-vermillion/30">
                    ACQUIRED / EXITED
                  </span>
                )}
              </div>

              <div className="flex items-center gap-4 mb-3">
                {activeCompany.logo && (
                  <div className="w-12 h-12 rounded-xl bg-bg border border-line p-2 shrink-0 flex items-center justify-center">
                    <Image src={activeCompany.logo} alt={activeCompany.name} width={36} height={36} className="object-contain" />
                  </div>
                )}
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                  {activeCompany.name}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed max-w-3xl">
                {activeCompany.description}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 pt-4 border-t border-line">
                <div className="font-mono text-xs text-ink-muted">
                  <span className="uppercase text-[10px] tracking-wider block text-ink-muted/70">Founders</span>
                  <span className="text-ink font-medium">{activeCompany.founders.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              {/* Direct Website Button */}
              <a
                href={activeCompany.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-green text-bg font-sans text-xs font-bold hover:bg-brand-ink transition-colors shadow-xs"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Visit {activeCompany.website.replace('https://', '')}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <Link
                href={`/companies/${activeCompany.slug}`}
                className="inline-flex items-center gap-1.5 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
              >
                <span>Read Full Company Profile</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
