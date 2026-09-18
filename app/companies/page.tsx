'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { companies } from '@/data/companies';
import { ArrowUpRight, Search, Filter, Globe } from 'lucide-react';
import { GenerativePattern } from '@/components/visual/GenerativePattern';

export default function CompaniesPage() {
  const [filter, setFilter] = useState<'all' | 'active' | 'exited'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filteredCompanies = useMemo(() => {
    return companies.filter((c) => {
      const matchesFilter =
        filter === 'all' ? true : c.status === filter;
      const matchesQuery =
        searchQuery.trim() === '' ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.founders.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesFilter && matchesQuery;
    });
  }, [filter, searchQuery]);

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="mb-16 pb-8 border-b border-line">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-brand-green" />
              <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                PORTFOLIO ARCHIVE · {companies.length} COMPANIES
              </span>
            </div>
            <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-ink">
              Our Companies.
            </h1>
            <p className="mt-4 font-sans text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
              We back category-defining founders at Day Zero. From India’s UPI payment infrastructure to consumer brands and enterprise AI agents.
            </p>
          </div>

          {/* Search Input */}
          <div className="w-full lg:w-72">
            <div className="relative">
              <Search className="w-4 h-4 text-ink-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search company, founder, city..."
                className="w-full pl-10 pr-4 py-2.5 bg-surface border border-line rounded-full text-sm sm:text-xs font-sans text-ink focus:outline-none focus:border-ink placeholder:text-ink-muted/70 transition-colors"
                aria-label="Filter companies by name, founder, or location"
              />
            </div>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-line/60">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto" aria-label="Portfolio Status Filter">
            <span className="font-mono text-xs text-ink-muted flex items-center gap-1 mr-1 shrink-0">
              <Filter className="w-3.5 h-3.5" />
              <span>Status:</span>
            </span>

            {(['all', 'active', 'exited'] as const).map((statusKey) => {
              const isActive = filter === statusKey;
              const count =
                statusKey === 'all'
                  ? companies.length
                  : companies.filter((c) => c.status === statusKey).length;

              return (
                <button
                  key={statusKey}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setFilter(statusKey)}
                  className={`shrink-0 px-4 py-1.5 rounded-full font-mono text-xs tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-brand-green text-bg font-semibold shadow-xs'
                      : 'bg-surface text-ink-muted border border-line hover:text-ink'
                  }`}
                >
                  {statusKey} ({count})
                </button>
              );
            })}
          </div>

          {/* Screen reader live region */}
          <div className="sr-only" aria-live="polite">
            Showing {filteredCompanies.length} companies matching filter {filter}.
          </div>

          <div className="font-mono text-xs text-ink-muted">
            Showing <span className="text-ink font-bold">{filteredCompanies.length}</span> of {companies.length}
          </div>
        </div>
      </div>

      {/* Editorial Companies List */}
      <div className="space-y-4">
        {filteredCompanies.map((comp, idx) => {
          const isExpanded = expandedSlug === comp.slug;
          const displayIndex = String(idx + 1).padStart(2, '0');

          return (
            <div
              key={comp.slug}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isExpanded
                  ? 'bg-white border-ink/40 shadow-md'
                  : 'bg-surface/70 border-line hover:border-line/90 hover:bg-white'
              }`}
            >
              {/* Primary Row Header */}
              <div
                onClick={() => setExpandedSlug(isExpanded ? null : comp.slug)}
                className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                tabIndex={0}
                role="button"
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setExpandedSlug(isExpanded ? null : comp.slug);
                  }
                }}
              >
                {/* Left: Index, Logo & Name */}
                <div className="flex items-start sm:items-center gap-5">
                  <span className="font-mono text-sm sm:text-base font-bold text-ink-muted/50 w-8">
                    {displayIndex}
                  </span>

                  {/* Real Company Logo Thumbnail */}
                  <div className="w-14 h-14 rounded-xl border border-line bg-white flex items-center justify-center p-2 shrink-0 shadow-2xs relative">
                    {comp.logo ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={comp.logo}
                          alt={`${comp.name} logo`}
                          fill
                          sizes="56px"
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span className="font-serif text-base font-bold text-ink-muted">
                        {comp.name.slice(0, 2)}
                      </span>
                    )}
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                        {comp.name}
                      </h2>
                      {comp.status === 'exited' ? (
                        <span className="px-2 py-0.5 rounded font-mono text-[9px] uppercase font-bold bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/30">
                          Exited / Acquired
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded font-mono text-[9px] uppercase font-semibold bg-brand-green/10 text-brand-green border border-brand-green/20">
                          Active
                        </span>
                      )}
                    </div>
                    {comp.tagline && (
                      <p className="font-sans text-xs text-ink-muted mt-1 font-normal">
                        {comp.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Right: Metadata Chips & Direct Website Link */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-ink-muted lg:justify-end">
                  <span className="px-2.5 py-1 bg-bg border border-line rounded">
                    {comp.location}
                  </span>
                  <span className="text-ink font-semibold">
                    {comp.foundedYear} → {comp.partneredYear}
                  </span>

                  {/* Direct Website Launch Button */}
                  <a
                    href={comp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface border border-line text-ink font-mono text-xs hover:border-ink hover:bg-bg transition-colors shadow-2xs"
                    title={`Open official ${comp.name} website`}
                  >
                    <span>Website</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-green" />
                  </a>

                  <span className="text-brand-green text-xs font-sans font-medium underline underline-offset-4 hidden sm:inline ml-2">
                    {isExpanded ? 'Collapse' : 'Details'}
                  </span>
                </div>
              </div>

              {/* Expanded Detail Panel */}
              {isExpanded && (
                <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-line/60 bg-bg animate-in fade-in duration-200">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Real Company Photo / Visual Block */}
                    <div className="lg:col-span-5 h-56 sm:h-64 rounded-2xl overflow-hidden border border-line bg-white relative shadow-sm">
                      {comp.photo ? (
                        <Image
                          src={comp.photo}
                          alt={`${comp.name} product`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover"
                        />
                      ) : (
                        <GenerativePattern seed={comp.slug} name={comp.name} accentColor="#143224" />
                      )}

                      {comp.logo && (
                        <div className="absolute top-3 left-3 bg-white/95 border border-line px-3 py-1.5 rounded-xl shadow-xs flex items-center gap-2">
                          <Image src={comp.logo} alt={comp.name} width={20} height={20} className="object-contain" />
                          <span className="font-mono text-[9px] text-ink uppercase tracking-wider font-semibold">
                            Official Logo
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Content & Founders */}
                    <div className="lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-semibold block mb-1">
                          OFFICIAL COMPANY PROFILE
                        </span>
                        <p className="font-sans text-sm sm:text-base text-ink leading-relaxed mb-6">
                          {comp.description}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 border-t border-b border-line text-xs">
                          <div>
                            <span className="font-mono text-[10px] uppercase text-ink-muted block mb-1">
                              Founders
                            </span>
                            <span className="font-sans font-semibold text-ink">
                              {comp.founders.join(', ')}
                            </span>
                          </div>

                          <div>
                            <span className="font-mono text-[10px] uppercase text-ink-muted block mb-1">
                              HQ Location (Source-of-truth)
                            </span>
                            <span className="font-sans font-semibold text-ink">
                              {comp.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* External links and Dedicated Page Link */}
                      <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          {/* Prominent Direct Website Button */}
                          <a
                            href={comp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-green text-bg font-sans text-xs font-semibold hover:bg-brand-ink transition-colors shadow-xs"
                          >
                            <Globe className="w-3.5 h-3.5" />
                            <span>Visit Official Website</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>

                          {comp.linkedin && (
                            <a
                              href={comp.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full border border-line bg-white font-mono text-xs text-ink hover:border-ink transition-colors"
                            >
                              <span>LinkedIn</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}

                          {comp.x && (
                            <a
                              href={comp.x}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-3.5 py-2.5 rounded-full border border-line bg-white font-mono text-xs text-ink hover:border-ink transition-colors"
                            >
                              <span>X</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <Link
                          href={`/companies/${comp.slug}`}
                          className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-green hover:underline"
                        >
                          <span>Full Company Page →</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
