import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { companies } from '@/data/companies';
import { ArrowLeft, ArrowUpRight, Calendar, MapPin, Users, Globe } from 'lucide-react';
import { GenerativePattern } from '@/components/visual/GenerativePattern';

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return companies.map((comp) => ({
    slug: comp.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const comp = companies.find((c) => c.slug === params.slug);
  if (!comp) return { title: 'Company Not Found' };

  return {
    title: `${comp.name} — 8i Ventures Portfolio`,
    description: comp.description,
  };
}

export default function CompanyDetailPage({ params }: PageProps) {
  const comp = companies.find((c) => c.slug === params.slug);

  if (!comp) {
    notFound();
  }

  // Find distinct related companies rotating deterministically by index
  const currentIdx = companies.findIndex((c) => c.slug === comp.slug);
  const others = companies.filter((c) => c.slug !== comp.slug);
  const related = [
    others[(currentIdx) % others.length],
    others[(currentIdx + 1) % others.length],
    others[(currentIdx + 2) % others.length],
  ];

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Back to archive link */}
      <div className="mb-10 flex items-center justify-between">
        <Link
          href="/companies"
          className="inline-flex items-center gap-2 font-mono text-xs text-ink-muted hover:text-ink transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL COMPANIES</span>
        </Link>

        {/* Quick External Website Link */}
        <a
          href={comp.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line bg-surface font-mono text-xs text-ink hover:border-ink hover:bg-bg transition-colors shadow-2xs"
        >
          <Globe className="w-3.5 h-3.5 text-brand-green" />
          <span>Open {comp.website.replace('https://', '')}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Dossier Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-line">
        {/* Left: Giant Typography & Description */}
        <div className="lg:col-span-7">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-semibold px-3 py-1 rounded bg-surface border border-line text-ink">
              {comp.location}
            </span>
            {comp.status === 'exited' ? (
              <span className="font-mono text-xs font-bold px-3 py-1 rounded bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/30">
                ACQUIRED / EXITED
              </span>
            ) : (
              <span className="font-mono text-xs font-semibold px-3 py-1 rounded bg-brand-green/10 text-brand-green border border-brand-green/20">
                ACTIVE PORTFOLIO
              </span>
            )}
          </div>

          <div className="flex items-center gap-4 mb-4">
            {comp.logo && (
              <div className="w-16 h-16 rounded-2xl border border-line bg-white flex items-center justify-center p-2.5 shrink-0 shadow-xs">
                <Image src={comp.logo} alt={comp.name} width={48} height={48} className="object-contain" />
              </div>
            )}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.02]">
              {comp.name}
            </h1>
          </div>

          {comp.tagline && (
            <p className="font-serif text-2xl text-ink/80 italic mb-8">
              “{comp.tagline}”
            </p>
          )}

          {/* Direct Website Launch Banner */}
          <div className="mb-8 p-4 rounded-2xl bg-surface border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-brand-green shrink-0" />
              <div>
                <span className="font-mono text-[10px] uppercase text-ink-muted block">Official Website</span>
                <span className="font-mono text-sm font-bold text-ink">{comp.website}</span>
              </div>
            </div>
            <a
              href={comp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-brand-green text-bg font-sans text-xs font-bold hover:bg-brand-ink transition-colors shadow-xs"
            >
              <span>Visit Official Site</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="prose prose-lg text-ink/90 font-sans text-base sm:text-lg leading-relaxed mb-10">
            <p>{comp.description}</p>
          </div>

          {/* Key Facts Ledger */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 rounded-2xl bg-surface border border-line shadow-xs">
            <div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted mb-1">
                <Calendar className="w-3.5 h-3.5 text-brand-green" />
                <span>FOUNDED</span>
              </div>
              <span className="font-serif text-2xl font-bold text-ink">
                {comp.foundedYear}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted mb-1">
                <Calendar className="w-3.5 h-3.5 text-brand-vermillion" />
                <span>PARTNERED</span>
              </div>
              <span className="font-serif text-2xl font-bold text-ink">
                {comp.partneredYear}
              </span>
            </div>

            <div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-ink-muted mb-1">
                <MapPin className="w-3.5 h-3.5 text-brand-jade" />
                <span>LOCATION</span>
              </div>
              <span className="font-serif text-xl font-bold text-ink truncate block">
                {comp.location}
              </span>
            </div>
          </div>

          {/* Founders Section */}
          <div className="mt-8 pt-8 border-t border-line">
            <div className="flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-ink-muted mb-3">
              <Users className="w-4 h-4 text-ink" />
              <span>Founders & Leadership</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {comp.founders.map((founder) => (
                <span
                  key={founder}
                  className="px-3.5 py-1.5 rounded-full bg-surface-card border border-line font-sans text-sm font-semibold text-ink"
                >
                  {founder}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Company Photo / Generative Block & External Rails */}
        <div className="lg:col-span-5 sticky top-28 space-y-6">
          <div className="h-80 sm:h-96 rounded-3xl overflow-hidden border border-line shadow-sm relative bg-white">
            {comp.photo ? (
              <Image
                src={comp.photo}
                alt={`${comp.name} product`}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className="object-cover"
              />
            ) : (
              <GenerativePattern seed={comp.slug} name={comp.name} accentColor="#143224" />
            )}

            {comp.logo && (
              <div className="absolute top-4 left-4 bg-white/95 border border-line px-3.5 py-2 rounded-2xl shadow-sm flex items-center gap-2.5">
                <Image src={comp.logo} alt={comp.name} width={24} height={24} className="object-contain" />
                <span className="font-mono text-[10px] text-ink uppercase tracking-wider font-bold">
                  Official Logo
                </span>
              </div>
            )}
          </div>

          <div className="p-6 rounded-2xl bg-surface border border-line shadow-xs space-y-4">
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase block">
              OFFICIAL EXTERNAL LINKS
            </span>

            <a
              href={comp.website}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-xl border border-line bg-bg hover:border-ink transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-brand-green" />
                <span className="font-mono text-xs font-semibold text-ink truncate max-w-[200px]">
                  {comp.website.replace('https://', '')}
                </span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {comp.linkedin && (
              <a
                href={comp.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-line bg-bg hover:border-ink transition-colors group"
              >
                <span className="font-mono text-xs font-medium text-ink">Company LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-ink" />
              </a>
            )}

            {comp.x && (
              <a
                href={comp.x}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-line bg-bg hover:border-ink transition-colors group"
              >
                <span className="font-mono text-xs font-medium text-ink">Company X Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-ink-muted group-hover:text-ink" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Related Companies Rail */}
      <div className="mt-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase block mb-1">
              PORTFOLIO ECOSYSTEM
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
              Other early bets.
            </h3>
          </div>
          <Link
            href="/companies"
            className="font-mono text-xs text-brand-green hover:underline"
          >
            VIEW ALL 26 COMPANIES →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((rel) => (
            <Link
              key={rel.slug}
              href={`/companies/${rel.slug}`}
              className="p-6 rounded-xl bg-surface border border-line hover:border-ink transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-xs text-ink-muted">
                  Backed {rel.partneredYear}
                </span>
                <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                {rel.logo && (
                  <Image src={rel.logo} alt={rel.name} width={24} height={24} className="object-contain shrink-0" />
                )}
                <h4 className="font-serif text-xl font-bold text-ink">
                  {rel.name}
                </h4>
              </div>
              <p className="font-sans text-xs text-ink-muted line-clamp-2">
                {rel.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
