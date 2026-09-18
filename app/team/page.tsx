'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { generalPartners, teamMembers, teamPageIntro, operatorMetrics, TeamMember } from '@/data/team';
import { NetworkConstellation } from '@/components/visual/NetworkConstellation';
import {
  ArrowUpRight,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
  MapPin,
  Zap,
  CheckCircle2,
  Mail,
  Building2,
  Layers,
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Globe
} from 'lucide-react';

export default function TeamPage() {
  const [filterDepartment, setFilterDepartment] = useState<'all' | 'investment' | 'operations'>('all');
  const [vikramTab, setVikramTab] = useState<'timeline' | 'bets' | 'playbook' | 'education'>('timeline');
  const [vishyTab, setVishyTab] = useState<'timeline' | 'bets' | 'playbook' | 'education'>('timeline');

  const vikram = generalPartners[0];
  const vishy = generalPartners[1];

  const filteredTeam = teamMembers.filter((m) => {
    if (filterDepartment === 'all') return true;
    return m.department === filterDepartment;
  });

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-7xl mx-auto space-y-28">
      {/* 1. HERO SECTION & OPERATOR THESIS */}
      <section className="pt-6 pb-12 border-b border-line relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green border border-brand-green/20 font-mono text-xs uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            <span>{teamPageIntro.tagline}</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.02] mb-8">
            {teamPageIntro.heading}
          </h1>

          <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink/90 italic font-normal leading-snug mb-6">
            “{teamPageIntro.narrativeLead}”
          </p>

          <p className="font-sans text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed">
            {teamPageIntro.description}
          </p>
        </div>

        {/* Operator Key Figures Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 pt-10 border-t border-line">
          {operatorMetrics.map((metric, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-surface border border-line shadow-2xs">
              <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink block mb-1">
                {metric.value}
              </span>
              <span className="font-mono text-xs font-bold text-brand-vermillion uppercase tracking-wider block mb-1">
                {metric.label}
              </span>
              <p className="font-sans text-xs text-ink-muted leading-relaxed">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 2. THE 8i INTERACTIVE OPERATING CONSTELLATION */}
      <section className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-brand-vermillion uppercase block mb-1">
              NETWORK ARCHITECTURE
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              The 8i Leadership & Syndicate Radar.
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-ink-muted max-w-md">
            Click or hover over any node to inspect operating backgrounds, core functional focus, and early signature bets.
          </p>
        </div>

        <NetworkConstellation />
      </section>

      {/* 3. GENERAL PARTNER DOSSIER 1: VIKRAM CHACHRA */}
      <section className="rounded-3xl bg-surface border border-line p-8 sm:p-14 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Identity */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-square max-w-sm rounded-3xl overflow-hidden border-2 border-line bg-bg shadow-md mb-6 relative group">
              <Image
                src={vikram.photo || "https://framerusercontent.com/images/qZbEhvJg8OOBkZ8xtBy3Pt3blpg.png"}
                alt="Vikram Chachra, Founding Partner & CIO"
                fill
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 border border-line px-3 py-1 rounded-full backdrop-blur-xs font-mono text-[10px] text-brand-vermillion font-bold uppercase tracking-wider">
                GP & CIO · MUMBAI HQ
              </div>
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-vermillion uppercase font-bold block mb-1">
              FOUNDING GENERAL PARTNER
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-1">
              {vikram.name}
            </h2>
            <p className="font-mono text-xs tracking-wider text-ink-muted uppercase mb-4">
              {vikram.role} · 8i Ventures
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {vikram.linkedin && (
                <a
                  href={vikram.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line bg-bg font-mono text-xs font-semibold text-ink hover:border-ink transition-colors shadow-2xs"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href="mailto:hello@8ivc.com?subject=Pitch%20to%20Vikram%20Chachra"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-green text-bg font-mono text-xs font-semibold hover:bg-brand-ink transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Vikram</span>
              </a>
            </div>

            {/* Domain Focus Badges */}
            <div className="p-5 rounded-2xl bg-bg border border-line mb-6">
              <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold block mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-vermillion" />
                <span>Primary Investment Thesis</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {vikram.focus?.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 bg-surface border border-line rounded-md font-mono text-[11px] text-ink font-semibold shadow-2xs"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="p-5 rounded-2xl bg-bg border border-line">
              <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold block mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-green" />
                <span>Academic Credentials</span>
              </span>
              <ul className="font-sans text-xs text-ink space-y-1.5 font-medium">
                {vikram.education?.map((edu) => (
                  <li key={edu} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Thesis Quote & Tabbed Deep-Dives */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Partner Thesis Pull-Quote */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-line shadow-xs mb-8 relative">
                <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-2">
                  FOUNDER THESIS
                </span>
                <blockquote className="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
                  “{vikram.quote}”
                </blockquote>
              </div>

              {/* Bio Paragraphs */}
              <div className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed space-y-4 mb-8">
                <p>
                  Vikram Chachra is Founding Partner at 8i Ventures, where he backs founders who strip friction out of finance for consumers and small businesses. A builder first, Vikram co-founded SNAZ Commerce in 1999—raising $18 million for one of the earliest mobile-payments plays—then led sales at More Magic Solutions and helped scale Snapfish to its $300 million cash exit to HP.
                </p>
                <p>
                  Returning to India, he co-launched Eight Capital, the country’s first turnaround fund, before turning his focus to seed investing. Signature early bets include Slice, M2P, Signzy, Easebuzz, and CarWale.
                </p>
              </div>

              {/* Interactive Tabs for Operator Dossier */}
              <div className="border border-line rounded-2xl p-6 bg-bg/50">
                <div className="flex items-center gap-2 border-b border-line pb-4 mb-6 overflow-x-auto">
                  {[
                    { id: 'timeline', label: 'Operator Timeline' },
                    { id: 'bets', label: 'Signature Bets' },
                    { id: 'playbook', label: 'Operating Playbook' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setVikramTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl font-mono text-xs transition-all whitespace-nowrap ${
                        vikramTab === tab.id
                          ? 'bg-brand-green text-bg font-bold shadow-xs'
                          : 'bg-surface border border-line text-ink-muted hover:text-ink'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: Timeline */}
                {vikramTab === 'timeline' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                    {vikram.careerMilestones?.map((m) => (
                      <div key={m.year} className="p-4 rounded-xl border border-line bg-white shadow-2xs">
                        <span className="font-mono text-xs font-bold text-brand-vermillion block">
                          {m.year}
                        </span>
                        <h4 className="font-serif text-base font-bold text-ink mt-0.5">
                          {m.title}
                        </h4>
                        <p className="font-sans text-xs text-ink-muted mt-1 leading-normal">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Signature Bets */}
                {vikramTab === 'bets' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="font-sans text-xs text-ink-muted">
                      Direct early institutional investments with hands-on board partnership:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vikram.signatureBets?.map((bet) => (
                        <Link
                          key={bet}
                          href={`/companies/${bet.toLowerCase().replace(/\s+/g, '')}`}
                          className="p-4 rounded-xl border border-line bg-white hover:border-brand-green transition-colors flex items-center justify-between group shadow-2xs"
                        >
                          <div>
                            <span className="font-serif text-lg font-bold text-ink block">
                              {bet}
                            </span>
                            <span className="font-mono text-[10px] text-brand-green font-semibold uppercase">
                              Seed Portfolio Dossier
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-brand-green group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Operating Playbook */}
                {vikramTab === 'playbook' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {vikram.playbook?.map((p, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-line bg-white flex items-start gap-3 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-brand-vermillion shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-ink font-medium leading-relaxed">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. GENERAL PARTNER DOSSIER 2: VISHWANATH V */}
      <section className="rounded-3xl bg-surface border border-line p-8 sm:p-14 shadow-sm relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Portrait & Identity */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-square max-w-sm rounded-3xl overflow-hidden border-2 border-line bg-bg shadow-md mb-6 relative group">
              <Image
                src={vishy.photo || "https://framerusercontent.com/images/ieSdD7VQaN9EO4B1ZzlBjSC0fg.png"}
                alt="Vishwanath V, General Partner"
                fill
                sizes="(max-width: 1024px) 100vw, 384px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/95 border border-line px-3 py-1 rounded-full backdrop-blur-xs font-mono text-[10px] text-brand-jade font-bold uppercase tracking-wider">
                GENERAL PARTNER · BANGALORE HQ
              </div>
            </div>

            <span className="font-mono text-[10px] tracking-[0.25em] text-brand-jade uppercase font-bold block mb-1">
              CONSUMER & BRAND GENERAL PARTNER
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-ink mb-1">
              {vishy.name}
            </h2>
            <p className="font-mono text-xs tracking-wider text-ink-muted uppercase mb-4">
              {vishy.role} · 8i Ventures
            </p>

            {/* Quick Action Links */}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {vishy.linkedin && (
                <a
                  href={vishy.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line bg-bg font-mono text-xs font-semibold text-ink hover:border-ink transition-colors shadow-2xs"
                >
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              <a
                href="mailto:hello@8ivc.com?subject=Pitch%20to%20Vishwanath%20V"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-brand-green text-bg font-mono text-xs font-semibold hover:bg-brand-ink transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Email Vishy</span>
              </a>
            </div>

            {/* Domain Focus Badges */}
            <div className="p-5 rounded-2xl bg-bg border border-line mb-6">
              <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold block mb-3 flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-brand-jade" />
                <span>Primary Investment Thesis</span>
              </span>
              <div className="flex flex-wrap gap-1.5">
                {vishy.focus?.map((f) => (
                  <span
                    key={f}
                    className="px-2.5 py-1 bg-surface border border-line rounded-md font-mono text-[11px] text-ink font-semibold shadow-2xs"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Education Box */}
            <div className="p-5 rounded-2xl bg-bg border border-line">
              <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted font-bold block mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-brand-green" />
                <span>Academic Credentials</span>
              </span>
              <ul className="font-sans text-xs text-ink space-y-1.5 font-medium">
                {vishy.education?.map((edu) => (
                  <li key={edu} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    <span>{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Thesis Quote & Tabbed Deep-Dives */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full">
            <div>
              {/* Partner Thesis Pull-Quote */}
              <div className="p-6 sm:p-8 rounded-2xl bg-surface-card border border-line shadow-xs mb-8 relative">
                <span className="font-mono text-[10px] tracking-widest text-brand-jade uppercase font-bold block mb-2">
                  FOUNDER THESIS
                </span>
                <blockquote className="font-serif text-xl sm:text-2xl text-ink italic leading-snug">
                  “{vishy.quote}”
                </blockquote>
              </div>

              {/* Bio Paragraphs */}
              <div className="font-sans text-base sm:text-lg text-ink/90 leading-relaxed space-y-4 mb-8">
                <p>
                  Vishy brings two decades of consumer-brand muscle to 8i Ventures. After earning his MBA from IIM Ahmedabad, he spent nine years at Hindustan Unilever, running the $300 million Popular Soaps portfolio with full P&L ownership across sales, marketing, and supply-chain.
                </p>
                <p>
                  He then shifted to high-growth digital commerce, first as Marketing Director at Urban Ladder (Sequoia-backed Series C) and later as Chief Marketing Officer at fashion marketplace Voonik, shepherding the company through its $100 million scale-up phase. Vishy now channels that operator depth into backing India’s next wave of consumer and commerce disruptors.
                </p>
              </div>

              {/* Interactive Tabs for Operator Dossier */}
              <div className="border border-line rounded-2xl p-6 bg-bg/50">
                <div className="flex items-center gap-2 border-b border-line pb-4 mb-6 overflow-x-auto">
                  {[
                    { id: 'timeline', label: 'Operator Timeline' },
                    { id: 'bets', label: 'Consumer Bets' },
                    { id: 'playbook', label: 'Operating Playbook' },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setVishyTab(tab.id as any)}
                      className={`px-4 py-2 rounded-xl font-mono text-xs transition-all whitespace-nowrap ${
                        vishyTab === tab.id
                          ? 'bg-brand-jade text-white font-bold shadow-xs'
                          : 'bg-surface border border-line text-ink-muted hover:text-ink'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: Timeline */}
                {vishyTab === 'timeline' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-in fade-in duration-200">
                    {vishy.careerMilestones?.map((m) => (
                      <div key={m.year} className="p-4 rounded-xl border border-line bg-white shadow-2xs">
                        <span className="font-mono text-xs font-bold text-brand-jade block">
                          {m.year}
                        </span>
                        <h4 className="font-serif text-base font-bold text-ink mt-0.5">
                          {m.title}
                        </h4>
                        <p className="font-sans text-xs text-ink-muted mt-1 leading-normal">
                          {m.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 2: Consumer Bets */}
                {vishyTab === 'bets' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <p className="font-sans text-xs text-ink-muted">
                      Direct early consumer & commerce brand partnerships:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {vishy.signatureBets?.map((bet) => (
                        <Link
                          key={bet}
                          href={`/companies/${bet.toLowerCase().replace(/\s+/g, '')}`}
                          className="p-4 rounded-xl border border-line bg-white hover:border-brand-jade transition-colors flex items-center justify-between group shadow-2xs"
                        >
                          <div>
                            <span className="font-serif text-lg font-bold text-ink block">
                              {bet}
                            </span>
                            <span className="font-mono text-[10px] text-brand-jade font-semibold uppercase">
                              Consumer Portfolio Dossier
                            </span>
                          </div>
                          <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-brand-jade group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Operating Playbook */}
                {vishyTab === 'playbook' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    {vishy.playbook?.map((p, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-line bg-white flex items-start gap-3 shadow-2xs">
                        <CheckCircle2 className="w-4 h-4 text-brand-jade shrink-0 mt-0.5" />
                        <span className="font-sans text-xs sm:text-sm text-ink font-medium leading-relaxed">
                          {p}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ELEVATED CORE INVESTMENT & OPERATIONS TEAM ROSTER */}
      <section className="space-y-10 pt-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-line">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-1">
              THE FULL 8i BENCH
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Investment team & operations.
            </h3>
          </div>

          {/* Department Filter Pills */}
          <div className="flex items-center gap-2">
            {[
              { key: 'all', label: 'All Members (8)' },
              { key: 'investment', label: 'Investment & Deals (5)' },
              { key: 'operations', label: 'Operations & Platform (3)' },
            ].map((tab) => {
              const isActive = filterDepartment === tab.key;
              return (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilterDepartment(tab.key as any)}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs transition-all ${
                    isActive
                      ? 'bg-brand-green text-bg font-bold shadow-xs'
                      : 'bg-surface border border-line text-ink-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Responsive Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTeam.map((member) => (
            <div
              key={member.id}
              className="p-6 rounded-3xl bg-surface border border-line shadow-2xs hover:border-ink/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Team Portrait Frame */}
                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-bg border border-line mb-5 relative">
                  {member.photo ? (
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 350px"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-2xl font-bold text-ink-muted">
                      {member.name.split(' ').map((n) => n[0]).join('')}
                    </div>
                  )}

                  {/* Location Tag */}
                  <div className="absolute top-2.5 right-2.5 bg-black/75 backdrop-blur-xs px-2 py-0.5 rounded-md font-mono text-[9px] text-white flex items-center gap-1 font-bold">
                    <MapPin className="w-2.5 h-2.5 text-brand-vermillion" />
                    <span>{member.location}</span>
                  </div>

                  {/* Department Badge */}
                  <div className="absolute bottom-2.5 left-2.5 bg-white/90 border border-line px-2 py-0.5 rounded-md font-mono text-[9px] text-ink uppercase font-bold">
                    {member.department === 'investment' ? 'Investment' : 'Platform'}
                  </div>
                </div>

                <h4 className="font-serif text-xl font-bold text-ink group-hover:text-brand-green transition-colors">
                  {member.name}
                </h4>
                <p className="font-mono text-xs font-semibold text-brand-vermillion mt-0.5">
                  {member.role}
                </p>

                {member.shortBio && (
                  <p className="font-sans text-xs text-ink-muted mt-2.5 line-clamp-2 leading-relaxed">
                    {member.shortBio}
                  </p>
                )}

                {/* Focus Badges */}
                {member.focus && (
                  <div className="mt-4 flex flex-wrap gap-1">
                    {member.focus.slice(0, 3).map((f) => (
                      <span
                        key={f}
                        className="px-2 py-0.5 rounded bg-bg border border-line font-mono text-[9px] text-ink/80"
                      >
                        #{f.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* LinkedIn Button */}
              {member.linkedin && (
                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-mono text-[10px] text-ink-muted uppercase font-medium">
                    8i Ventures Team
                  </span>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-ink hover:text-brand-vermillion p-1 transition-colors"
                    aria-label={`LinkedIn for ${member.name}`}
                  >
                    <span>Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 6. THE 8i OPERATOR MANIFESTO (WHY FOUNDERS PICK 8i OVER TRADITIONAL VCS) */}
      <section className="p-8 sm:p-14 rounded-3xl bg-night text-[#fbf9f5] border border-night-line shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-vermillion/20 text-brand-vermillion border border-brand-vermillion/40 font-mono text-xs uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>THE 8i OPERATING ADVANTAGE</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white mb-4">
            Why founders pick operators over finance committees.
          </h3>
          <p className="font-sans text-sm sm:text-base text-white/70 leading-relaxed">
            Most seed funds are run by investment bankers who view your company through a spreadsheet. We have personally built companies, hired hundreds of operators, lived through multiple economic cycles, and scaled businesses to hundreds of millions in revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "01",
              title: "Direct Partner Access",
              detail: "You never pitch to junior analysts who have never built a company. From day zero, your partners are Vikram and Vishy."
            },
            {
              step: "02",
              title: "Operating War Room",
              detail: "Weekly unblocking sessions on RBI regulatory clearances, banking rails, D2C retail distribution, and senior hiring."
            },
            {
              step: "03",
              title: "Origami Velocity SLA",
              detail: "Firm response in 7 days, institutional term sheet in 14 days, and capital wired into your bank within 30 days."
            },
            {
              step: "04",
              title: "Global Syndicate Muscle",
              detail: "Direct syndicate pipeline to global Tier-1 Series A/B leads including Tiger Global, Insight Partners, and Peak XV."
            }
          ].map((pillar) => (
            <div key={pillar.step} className="p-6 rounded-2xl bg-night-panel border border-night-line shadow-xs">
              <span className="font-mono text-2xl font-bold text-brand-vermillion block mb-3">
                {pillar.step}
              </span>
              <h4 className="font-serif text-xl font-bold text-white mb-2">
                {pillar.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-white/65 leading-relaxed">
                {pillar.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. DUAL INNOVATION HUBS: MUMBAI & BANGALORE */}
      <section className="pt-4 border-t border-line">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-1">
            DUAL HEADQUARTERS
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
            Bridging India’s Financial Capital & Tech Heartland.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mumbai Hub */}
          <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-vermillion/10 border border-brand-vermillion/20 flex items-center justify-center text-brand-vermillion">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-ink">Mumbai Hub</h4>
                  <span className="font-mono text-xs text-ink-muted">Financial Capital · Nariman Point & BKC</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-vermillion/10 text-brand-vermillion font-mono text-[10px] font-bold uppercase">
                Vikram Chachra
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
              Anchoring our financial infrastructure, regulatory liaison, banking alliances, and institutional LP governance across India’s primary capital market hub.
            </p>
            <div className="pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-ink">
              <span>Key Focus: Banking Rails · Fintech · SEBI Compliance</span>
              <span className="text-brand-green font-bold">Active HQ</span>
            </div>
          </div>

          {/* Bangalore Hub */}
          <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-brand-jade/10 border border-brand-jade/20 flex items-center justify-center text-brand-jade">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-2xl font-bold text-ink">Bangalore Hub</h4>
                  <span className="font-mono text-xs text-ink-muted">Tech Heartland · Indiranagar & Koramangala</span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-brand-jade/10 text-brand-jade font-mono text-[10px] font-bold uppercase">
                Vishwanath V
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
              Rooted in the pulse of India’s technology ecosystem, consumer product innovation, D2C category creators, and engineering leadership.
            </p>
            <div className="pt-4 border-t border-line flex items-center justify-between font-mono text-xs text-ink">
              <span>Key Focus: Consumer Brands · D2C · AI & Engineering</span>
              <span className="text-brand-jade font-bold">Active HQ</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TALENT & FOUNDER INVITATION CTA */}
      <section className="py-16 text-center border-t border-line">
        <span className="font-mono text-xs tracking-[0.25em] text-brand-vermillion uppercase block mb-3">
          BUILD WITH 8i VENTURES
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink max-w-3xl mx-auto mb-6">
          Ready to partner with real operators?
        </h2>
        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
          Whether you are an ambitious founder looking for pre-seed Origami conviction or an exceptional analyst eager to join our investment team, our doors are open.
        </p>

        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@8ivc.com?subject=Pitch%20to%208i%20Ventures"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-brand-green text-bg font-sans font-semibold text-sm hover:bg-brand-ink transition-all shadow-md group"
          >
            <span>Pitch Your Startup</span>
            <ArrowRight className="w-4 h-4 text-bg group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="mailto:hello@8ivc.com?subject=Careers%20at%208i%20Ventures"
            className="font-mono text-xs font-semibold text-ink hover:text-brand-vermillion transition-colors px-6 py-4 rounded-full border border-line bg-surface"
          >
            Join the Team: hello@8ivc.com
          </a>
        </div>
      </section>
    </div>
  );
}
