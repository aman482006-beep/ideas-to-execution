'use client';

import React, { useState, useMemo } from 'react';
import { newsItems } from '@/data/news';
import { ArrowUpRight, Calendar } from 'lucide-react';

export default function NewsPage() {
  const [activeTab, setActiveTab] = useState<'All' | 'News' | 'Insights'>('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = useMemo(() => {
    if (activeTab === 'All') return newsItems;
    return newsItems.filter((item) => item.category === activeTab);
  }, [activeTab]);

  const featured = filteredItems[0] || newsItems[0];
  const secondary = filteredItems.slice(1, 3);
  const archive = filteredItems.slice(3, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header & Tabs */}
      <div className="mb-14 pb-8 border-b border-line flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full bg-brand-vermillion" />
            <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
              DISPATCHES & INTELLIGENCE
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-7xl font-bold tracking-tight text-ink">
            News & Insights.
          </h1>
          <p className="mt-3 font-sans text-base text-ink-muted max-w-xl">
            Portfolio milestones, fund announcements, liquidity events, and tactical field notes on early-stage company building.
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex items-center gap-2 bg-surface p-1.5 rounded-full border border-line">
          {(['All', 'News', 'Insights'] as const).map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setVisibleCount(6);
              }}
              className={`px-5 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all ${
                activeTab === tab
                  ? 'bg-brand-green text-bg font-semibold shadow-xs'
                  : 'text-ink-muted hover:text-ink'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Headline Lead (1 Large Featured Card) */}
      {featured && (
        <article className="mb-16 rounded-3xl bg-surface border border-line p-8 sm:p-12 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-brand-vermillion/10 text-brand-vermillion font-mono text-xs font-semibold uppercase tracking-wider border border-brand-vermillion/20">
                  {featured.category} · FEATURED
                </span>
                <span className="font-mono text-xs text-ink-muted flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {featured.date}
                </span>
                <span className="font-mono text-xs text-ink-muted">
                  Source: <strong className="text-ink">{featured.source}</strong>
                </span>
              </div>

              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink tracking-tight leading-tight mb-4 group-hover:text-brand-green transition-colors">
                {featured.title}
              </h2>

              {featured.summary && (
                <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed max-w-2xl">
                  {featured.summary}
                </p>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              {featured.href ? (
                <a
                  href={featured.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-brand-green text-bg font-sans text-sm font-semibold hover:bg-brand-ink transition-colors group-hover:translate-x-1"
                >
                  <span>Read full dispatch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              ) : (
                <span className="font-mono text-xs text-ink-muted bg-bg px-4 py-2 rounded-full border border-line">
                  Internal Announcement
                </span>
              )}
            </div>
          </div>
        </article>
      )}

      {/* Secondary Stories (2 Medium Cards) */}
      {secondary.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {secondary.map((item) => (
            <article
              key={item.id}
              className="p-8 rounded-2xl bg-surface border border-line shadow-xs hover:border-ink/30 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] tracking-widest text-brand-green uppercase font-semibold">
                    {item.category}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    {item.date}
                  </span>
                </div>

                <h3 className="font-serif text-2xl font-bold text-ink leading-snug tracking-tight mb-3 group-hover:text-brand-green transition-colors">
                  {item.title}
                </h3>

                {item.summary && (
                  <p className="font-sans text-sm text-ink-muted leading-relaxed mb-6">
                    {item.summary}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between">
                <span className="font-mono text-xs text-ink-muted">
                  Source: <span className="text-ink font-medium">{item.source}</span>
                </span>
                {item.href && (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-mono text-xs text-brand-green hover:underline"
                    aria-label={`Read article: ${item.title}`}
                  >
                    <span>Source Link</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Archive Grid */}
      {archive.length > 0 && (
        <div className="space-y-4 mb-14">
          <div className="pb-3 border-b border-line">
            <span className="font-mono text-xs tracking-widest uppercase text-ink-muted">
              ARCHIVE DISPATCHES
            </span>
          </div>

          {archive.map((item) => (
            <article
              key={item.id}
              className="p-6 rounded-xl bg-surface/80 border border-line hover:border-line/90 hover:bg-white transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="flex items-start sm:items-center gap-4">
                <span className="font-mono text-xs text-ink-muted min-w-[90px]">
                  {item.date}
                </span>
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider text-brand-vermillion block">
                    {item.category} · {item.source}
                  </span>
                  <h4 className="font-serif text-lg font-bold text-ink">
                    {item.title}
                  </h4>
                </div>
              </div>

              {item.href && (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-ink-muted hover:text-ink px-3 py-1.5 rounded border border-line bg-bg self-start sm:self-auto"
                >
                  <span>Open</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              )}
            </article>
          ))}
        </div>
      )}

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center pt-8 border-t border-line">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + 4)}
            className="px-8 py-3.5 rounded-full border border-line bg-surface hover:border-ink font-mono text-xs tracking-wider uppercase text-ink transition-colors"
          >
            Load More Stories
          </button>
        </div>
      )}
    </div>
  );
}
