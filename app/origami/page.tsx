'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { origamiTestimonials } from '@/data/testimonials';
import { origamiFAQs } from '@/data/faqs';
import { VelocityTimeline } from '@/components/origami/VelocityTimeline';
import {
  ArrowRight,
  Plus,
  Quote,
  Sparkles,
  Zap,
  ArrowUpRight
} from 'lucide-react';

export default function OrigamiPage() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(origamiFAQs[0].id);
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  const activeTestimonial = origamiTestimonials[testimonialIdx];

  return (
    <div className="min-h-screen py-12 px-6 sm:px-8 max-w-7xl mx-auto overflow-x-clip">
      {/* 7.3 ORIGAMI HERO ENTRY */}
      <section className="pt-8 pb-16 border-b border-line relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-mono text-xs uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 8i ORIGAMI PRE-SEED PROGRAM</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink leading-[1.02] mb-6">
            Fundraising without the usual delays.
          </h1>

          <div className="p-8 rounded-3xl bg-surface border border-line shadow-xs mb-8">
            <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-bold block mb-2">
              OUR PRIMARY PROMISE
            </span>
            <p className="font-serif text-2xl sm:text-3xl text-ink font-semibold leading-snug">
              “RESPONSE IN 1 WEEK. DECISION IN 2 WEEKS. DEAL CLOSURE IN 4 WEEKS.”
            </p>
            <p className="mt-4 font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              Our primary promise to you is clear: a quick fundraise without the usual delays and distractions. Expect a response within 7 days, a term sheet within 14, and the deal done in 30 days. We have a swift, transparent process to make this happen.
            </p>
          </div>

          {/* Current Application Notice */}
          <div className="p-5 rounded-xl bg-surface-card/70 border border-line text-xs font-sans text-ink leading-relaxed flex items-start gap-3">
            <Zap className="w-4 h-4 text-brand-vermillion shrink-0 mt-0.5" />
            <div>
              <strong className="font-semibold block text-brand-green mb-0.5 font-mono text-[11px] uppercase tracking-wider">
                Origami Cohort Status Notice:
              </strong>
              We thank everyone for the amazing response we got. You can reach out to us with your pitch at{' '}
              <a href="mailto:hello@8ivc.com" className="font-mono font-bold text-brand-vermillion underline">
                hello@8ivc.com
              </a>{' '}
              and we will get back to you once we have processed all Origami applications.
            </div>
          </div>
        </div>
      </section>

      {/* THE 30-DAY ORIGAMI VELOCITY TIMELINE (SCROLLYTELLING) */}
      <section className="py-12 border-b border-line">
        <VelocityTimeline />
      </section>

      {/* 7.8 ORIGAMI FOUNDER TESTIMONIALS WITH REAL PHOTOGRAPHY */}
      <section className="py-24 border-b border-line">
        <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="font-mono text-[11px] tracking-[0.2em] text-brand-vermillion uppercase block mb-2">
              REAL FOUNDER VOICES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
              Founders on Origami speed.
            </h2>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1 w-full sm:w-auto">
            {origamiTestimonials.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTestimonialIdx(idx)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full font-mono text-xs transition-colors ${
                  idx === testimonialIdx
                    ? 'bg-brand-green text-bg font-semibold shadow-xs'
                    : 'bg-surface border border-line text-ink-muted hover:text-ink'
                }`}
              >
                {t.company}
              </button>
            ))}
          </div>
        </div>

        {/* Large Editorial Quote Card with Founder Photo */}
        <div className="p-8 sm:p-14 rounded-3xl bg-surface border border-line shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Founder Photo */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-3xl overflow-hidden border-2 border-line shadow-md bg-bg/60">
              {activeTestimonial.photo ? (
                <Image
                  src={activeTestimonial.photo}
                  alt={activeTestimonial.name}
                  fill
                  sizes="(max-width: 768px) 176px, 224px"
                  className="object-cover object-top"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center font-serif text-3xl font-bold text-ink-muted">
                  {activeTestimonial.name[0]}
                </div>
              )}
              <div className="absolute bottom-2 left-2 right-2 bg-bg/90 backdrop-blur-xs py-1 px-2 rounded-lg text-center font-mono text-[9px] text-ink uppercase tracking-wider border border-line">
                Verified Founder
              </div>
            </div>
          </div>

          {/* Quote & Speaker Info */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <Quote className="w-10 h-10 text-brand-green/20 mb-4" />
            <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-ink leading-snug mb-8">
              “{activeTestimonial.quote}”
            </blockquote>

            <div className="pt-6 border-t border-line flex flex-wrap items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-2xl font-bold text-ink">
                  {activeTestimonial.name}
                </h4>
                <p className="font-mono text-xs text-ink-muted mt-0.5">
                  {activeTestimonial.role}, <strong className="text-ink">{activeTestimonial.company}</strong>
                </p>
              </div>

              {activeTestimonial.companyUrl && (
                <a
                  href={activeTestimonial.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-line font-mono text-xs text-ink hover:border-ink transition-colors"
                >
                  <span>Visit {activeTestimonial.company}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7.9 ORIGAMI FAQ */}
      <section className="py-24 border-b border-line max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="font-mono text-[11px] tracking-[0.2em] text-brand-green uppercase block mb-2">
            FREQUENT QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink">
            Origami Program FAQs.
          </h2>
        </div>

        <div className="space-y-3.5">
          {origamiFAQs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? 'bg-white border-brand-green/30 shadow-xs'
                    : 'bg-white/70 border-line hover:border-ink/30 hover:bg-white/90'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green select-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif text-lg sm:text-xl font-bold transition-colors pr-6 ${
                    isOpen ? 'text-ink' : 'text-ink/90'
                  }`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ease-out ${
                      isOpen
                        ? 'bg-brand-green text-white border-brand-green rotate-45'
                        : 'bg-surface border-line text-ink rotate-0'
                    }`}
                    aria-hidden="true"
                  >
                    <Plus className="w-4 h-4 transition-transform duration-300" />
                  </span>
                </button>

                {/* Smooth Natural Grid Height Expansion */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pt-1 text-sm font-sans text-ink-muted leading-relaxed border-t border-line/40">
                      {faq.answer ? (
                        <p>{faq.answer}</p>
                      ) : (
                        <p className="italic text-ink-muted/80 font-mono text-xs bg-bg p-3 rounded-xl border border-line">
                          Official policy criteria for this question will be published when the next cohort cycle opens. Inquire directly at hello@8ivc.com.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7.10 ORIGAMI FINAL CTA */}
      <section className="py-28 text-center relative">
        <span className="font-mono text-xs tracking-[0.25em] text-brand-vermillion uppercase block mb-4">
          30-DAY CONVICTION
        </span>

        <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-ink leading-tight max-w-3xl mx-auto mb-8">
          BUILD THE COMPANY. WE’LL KEEP THE FUNDRAISE MOVING.
        </h2>

        <div className="inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:hello@8ivc.com?subject=Origami%20Pitch%20Submission"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-green text-bg font-sans font-semibold text-base hover:bg-brand-ink transition-all shadow-md group"
          >
            <span>Pitch us</span>
            <ArrowRight className="w-4 h-4 text-bg group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="mailto:hello@8ivc.com"
            className="font-mono text-sm font-semibold text-ink hover:text-brand-vermillion transition-colors px-6 py-4 rounded-full border border-line bg-surface"
          >
            hello@8ivc.com
          </a>
        </div>
      </section>
    </div>
  );
}
