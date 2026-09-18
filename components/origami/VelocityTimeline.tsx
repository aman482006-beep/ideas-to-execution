'use client';

import React, { useState } from 'react';
import {
  Clock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  ShieldCheck,
  Award,
  ArrowRight,
  FileCheck,
  Scale,
  Users
} from 'lucide-react';

interface Milestone {
  id: string;
  dayNumber: number;
  dayLabel: string;
  stageName: string;
  headline: string;
  summary: string;
  primaryPromise: string;
  metrics: { label: string; value: string }[];
  deepDive: {
    founderExperience: string;
    covenants: string[];
    partnerQuote: { quote: string; author: string; role: string };
    traditionalContrast: string;
  };
}

const MILESTONES: Milestone[] = [
  {
    id: 'day-0',
    dayNumber: 0,
    dayLabel: 'DAY 00',
    stageName: 'Direct Intake',
    headline: 'Materials go straight to General Partners. Zero junior gatekeepers.',
    summary:
      'Your pitch does not get dumped into an analyst screening queue. General Partners Vikram Chachra and Vishwanath V evaluate your company directly within 48 hours.',
    primaryPromise: 'Evaluated directly by cheque-writers within 48 hours.',
    metrics: [
      { label: 'Junior Gatekeepers', value: '0 Layers' },
      { label: 'Decision Makers', value: '2 GPs Direct' },
      { label: 'Initial Review', value: '≤ 48 Hours' }
    ],
    deepDive: {
      founderExperience:
        'Instead of pitch decks sitting in generic inboxes or being screened by junior associates who have never built a company, your deck is logged directly into Vikram and Vishy’s active deliberation pipeline.',
      covenants: [
        'Direct GP materials intake',
        'Zero analyst / associate filtering',
        'Transparent confirmation of receipt within 24h'
      ],
      partnerQuote: {
        quote:
          'We were entrepreneurs before venture capitalists. We know the frustration of being filtered by analysts who have never run payroll.',
        author: 'Vikram Chachra',
        role: 'Founding General Partner'
      },
      traditionalContrast:
        'In traditional VC, 80% of founders never meet a partner; decks languish in associate databases for 4–6 weeks without feedback.'
    }
  },
  {
    id: 'day-7',
    dayNumber: 7,
    dayLabel: 'DAY 07',
    stageName: 'Qualitative Verdict',
    headline: 'Substantive response in 7 calendar days. Absolutely zero ghosting.',
    summary:
      'You receive a clear, substantive qualitative verdict within one week. If conviction aligns, we schedule an in-depth partner strategy session on distribution and unit economics.',
    primaryPromise: 'Firm qualitative answer delivered within 7 calendar days.',
    metrics: [
      { label: 'Response SLA', value: '7 Days Flat' },
      { label: 'Partner Deep Dive', value: 'Scheduled' },
      { label: 'Ambiguity', value: '0% Allowed' }
    ],
    deepDive: {
      founderExperience:
        'Within 7 calendar days, you receive a firm, substantive response directly from our general partners. If it’s a fit, we dive straight into an intensive strategy session exploring your distribution wedge, customer retention, and unit economics.',
      covenants: [
        '7-Calendar-Day response SLA',
        'Detailed qualitative reasoning',
        'Direct GP deep-dive session'
      ],
      partnerQuote: {
        quote:
          'If it’s a no, we explain why with genuine respect for your journey. If it’s a yes, we immediately run toward the goal line together.',
        author: 'Vishwanath V',
        role: 'General Partner'
      },
      traditionalContrast:
        'Traditional funds average 3 to 6 weeks of vague radio silence, non-committal interest, or repeated requests to “check back when you have more numbers.”'
    }
  },
  {
    id: 'day-14',
    dayNumber: 14,
    dayLabel: 'DAY 14',
    stageName: 'Term Sheet',
    headline: 'Clean institutional term sheet in hand. No moving goalposts.',
    summary:
      'Clean NVCA governance standard: 1x non-participating liquidation preference, founder voting control, and transparent valuation. We price with conviction and do not wait for a syndicate.',
    primaryPromise: 'Binding institutional term sheet delivered within 14 days.',
    metrics: [
      { label: 'Term Sheet SLA', value: '14 Days' },
      { label: 'Governance', value: 'NVCA Standard' },
      { label: 'Liquidation Pref', value: '1x Non-Part.' }
    ],
    deepDive: {
      founderExperience:
        'By Day 14, a clean institutional term sheet is delivered. No punitive liquidation preferences, no unstandard control terms, no syndication conditions. We price with conviction as your sole lead.',
      covenants: [
        '1x Non-participating liquidation preference',
        'Founder board control maintained',
        'Sole-lead conviction (no syndicate dependencies)'
      ],
      partnerQuote: {
        quote:
          'We do not negotiate against our founders. We price with conviction early and protect your cap table for the next decade of compounding.',
        author: 'Vikram Chachra',
        role: 'Founding General Partner'
      },
      traditionalContrast:
        'Conventional firms drag founders through 8 to 12 weeks of partner committee votes, renegotiate terms at the eleventh hour, or wait for someone else to lead.'
    }
  },
  {
    id: 'day-30',
    dayNumber: 30,
    dayLabel: 'DAY 30',
    stageName: 'Capital Wired',
    headline: '100% investment wired to your bank. Fundraising distraction ends.',
    summary:
      'Confirmatory diligence is finalized and investment funds are wired directly via RTGS into your company account within 30 days. You save 4 to 6 months of distraction and get right back to shipping.',
    primaryPromise: 'Legal diligence closed and capital wired within 30 days.',
    metrics: [
      { label: 'Total Timeline', value: '30 Days' },
      { label: 'Time Preserved', value: '4–6 Months' },
      { label: '8i Guild Network', value: 'Active' }
    ],
    deepDive: {
      founderExperience:
        'Within 30 calendar days of intake, legal documentation is signed and 100% of the capital is wired directly to your company bank account. You immediately gain full access to the 8i Operator Guild (Slice, Blue Tokai, EaseMyTrip).',
      covenants: [
        'Capital in company bank account within 30 days',
        'Confirmatory legal diligence completed swiftly',
        'Immediate onboarding into the 8i Operator Guild'
      ],
      partnerQuote: {
        quote:
          'The greatest service an early-stage investor can provide is to wire capital fast, get out of your way, and stay relentlessly useful.',
        author: 'Vishwanath V',
        role: 'General Partner'
      },
      traditionalContrast:
        'Typical VC deal closings take 120 to 180 days, exhausting the founding team’s runway, stalling product releases, and creating unnecessary operational anxiety.'
    }
  }
];

const COMPARISON_ROWS = [
  {
    criterion: 'First Deck Review',
    traditional: 'Screens by junior analysts; 4–6 weeks in database queues',
    origami: 'Direct GP review (Vikram & Vishy) within 48 hours'
  },
  {
    criterion: 'Qualitative Verdict',
    traditional: '4–8 weeks of vague non-answers, soft interest, or ghosting',
    origami: 'Firm, qualitative answer in 7 calendar days guaranteed'
  },
  {
    criterion: 'Term Sheet Delivery',
    traditional: '8–12 weeks of committee votes and moving valuation goalposts',
    origami: 'Delivered in 14 days with standard NVCA founder-friendly terms'
  },
  {
    criterion: 'Deal Closing & Wire',
    traditional: '120 to 180 days of dragged-out legal diligence',
    origami: 'Confirmatory diligence completed & capital wired in 30 days'
  },
  {
    criterion: 'Founder Runway Spent',
    traditional: '4 to 6 months of distraction away from building product',
    origami: 'Zero distraction. Straight back to shipping'
  }
];

export const VelocityTimeline: React.FC = () => {
  const [activeStage, setActiveStage] = useState(1); // Default to Day 7 verdict
  const [expandedDetails, setExpandedDetails] = useState(false);
  const [activeTab, setActiveTab] = useState<'timeline' | 'comparison'>('timeline');

  const currentMilestone = MILESTONES[activeStage];

  const handleNext = () => {
    setActiveStage((prev) => Math.min(prev + 1, MILESTONES.length - 1));
  };

  const handlePrev = () => {
    setActiveStage((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full">
      {/* Section Sub-header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between pb-8 border-b border-line gap-6 mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-vermillion/10 text-brand-vermillion font-mono text-xs uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE 30-DAY VELOCITY FRAMEWORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
            How Origami Works: Step by Step.
          </h2>
          <p className="mt-2 font-sans text-sm sm:text-base text-ink-muted max-w-xl">
            A clear, fixed timeline from your first pitch submission to money in the bank. No endless associate loops. No moving goalposts.
          </p>
        </div>

        {/* View Mode Toggle: Timeline vs Traditional Comparison */}
        <div className="inline-flex p-1.5 rounded-2xl bg-surface border border-line shadow-xs shrink-0">
          <button
            type="button"
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-2 ${
              activeTab === 'timeline'
                ? 'bg-brand-green text-white font-bold shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>30-Day Sprint</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('comparison')}
            className={`px-4 py-2 rounded-xl font-mono text-xs transition-all flex items-center gap-2 ${
              activeTab === 'comparison'
                ? 'bg-brand-green text-white font-bold shadow-xs'
                : 'text-ink-muted hover:text-ink'
            }`}
          >
            <Scale className="w-3.5 h-3.5" />
            <span>vs. Traditional VC</span>
          </button>
        </div>
      </div>

      {activeTab === 'timeline' ? (
        <div className="space-y-8">
          {/* THE 30-DAY PROGRESS HORIZON BAR */}
          <div className="p-6 sm:p-8 rounded-3xl bg-surface border border-line shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                30-DAY PROGRESS HORIZON
              </span>
              <span className="font-mono text-xs font-semibold text-brand-green">
                Stage {activeStage + 1} of {MILESTONES.length}: {currentMilestone.dayLabel}
              </span>
            </div>

            {/* Stepper Line & Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {MILESTONES.map((m, idx) => {
                const isActive = activeStage === idx;
                const isPassed = activeStage > idx;

                return (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => {
                      setActiveStage(idx);
                      setExpandedDetails(false);
                    }}
                    className={`relative p-4 rounded-2xl text-left transition-all border ${
                      isActive
                        ? 'bg-white border-brand-green shadow-md ring-2 ring-brand-green/20'
                        : isPassed
                        ? 'bg-surface-card/70 border-brand-green/30 text-ink hover:bg-white'
                        : 'bg-surface-card/40 border-line text-ink-muted hover:bg-surface-card'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`font-mono text-xs font-bold tabular-nums min-w-[68px] h-6 px-2.5 rounded-lg inline-flex items-center justify-center text-center tracking-tight transition-colors ${
                          isActive
                            ? 'bg-brand-green text-white shadow-xs'
                            : isPassed
                            ? 'bg-brand-green/10 text-brand-green'
                            : 'bg-bg text-ink-muted border border-line/60'
                        }`}
                      >
                        {m.dayLabel}
                      </span>
                      {isPassed && <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />}
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-brand-vermillion animate-ping shrink-0" />
                      )}
                    </div>
                    <span className="font-serif text-sm sm:text-base font-bold text-ink block leading-snug">
                      {m.stageName}
                    </span>
                    <span className="font-mono text-[10px] text-ink-muted block mt-0.5 truncate">
                      {m.primaryPromise}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* MAIN ACTIVE MILESTONE CARD */}
          <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-line shadow-sm relative overflow-hidden transition-all duration-300">
            {/* Top Accent Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-line mb-8">
              <div className="flex items-center gap-3.5">
                {/* Mathematically & Visually Centered Day Badge */}
                <div className="w-14 h-14 rounded-2xl bg-brand-green text-white flex flex-col items-center justify-center font-mono shadow-xs text-center shrink-0">
                  <span className="text-[10px] tracking-widest text-white/75 uppercase leading-none mb-0.5">DAY</span>
                  <span className="text-base font-bold tabular-nums leading-none tracking-normal">{String(currentMilestone.dayNumber).padStart(2, '0')}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block">
                    STAGE {activeStage + 1} · {currentMilestone.stageName.toUpperCase()}
                  </span>
                  <span className="font-mono text-xs text-ink-muted">
                    Certified 8i Origami Commitment
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  disabled={activeStage === 0}
                  onClick={handlePrev}
                  className={`p-2.5 rounded-xl border border-line font-mono text-xs transition-colors flex items-center gap-1 ${
                    activeStage === 0
                      ? 'opacity-30 cursor-not-allowed text-ink-muted'
                      : 'hover:bg-bg text-ink'
                  }`}
                  title="Previous Milestone"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span className="hidden sm:inline">Previous</span>
                </button>

                <button
                  type="button"
                  disabled={activeStage === MILESTONES.length - 1}
                  onClick={handleNext}
                  className={`p-2.5 rounded-xl bg-brand-green text-white font-mono text-xs transition-colors flex items-center gap-1 shadow-xs ${
                    activeStage === MILESTONES.length - 1
                      ? 'opacity-30 cursor-not-allowed'
                      : 'hover:bg-brand-ink'
                  }`}
                  title="Next Milestone"
                >
                  <span className="hidden sm:inline">Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Core Message Headline & Summary */}
            <div className="max-w-3xl mb-8">
              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink leading-tight mb-4">
                {currentMilestone.headline}
              </h3>
              <p className="font-sans text-base sm:text-lg text-ink-muted leading-relaxed">
                {currentMilestone.summary}
              </p>
            </div>

            {/* 3 Clear Metrics Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {currentMilestone.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-line shadow-2xs"
                >
                  <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted block mb-1">
                    {metric.label}
                  </span>
                  <span className="font-serif text-2xl font-bold text-ink block">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>

            {/* "GO DEEPER" ACCORDION DRAWER (For users who want to see more details) */}
            <div className="pt-6 border-t border-line">
              <button
                type="button"
                onClick={() => setExpandedDetails(!expandedDetails)}
                className="w-full flex items-center justify-between p-4 rounded-2xl bg-bg hover:bg-surface-card border border-line transition-colors text-left"
              >
                <div className="flex items-center gap-3">
                  <FileCheck className="w-5 h-5 text-brand-green" />
                  <div>
                    <span className="font-serif text-base font-bold text-ink block">
                      {expandedDetails ? 'Hide Deep Dive & Legal Covenants' : 'Explore Deep Dive, Covenants & Quote'}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">
                      {expandedDetails ? 'Close details panel' : 'See founder experience, NVCA covenants, and partner perspective'}
                    </span>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full border border-line bg-white flex items-center justify-center text-ink shrink-0">
                  {expandedDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </div>
              </button>

              {/* Collapsible Content */}
              {expandedDetails && (
                <div className="mt-4 p-6 sm:p-8 rounded-2xl bg-white border border-line shadow-xs space-y-6 animate-in fade-in duration-200">
                  {/* Founder Experience */}
                  <div>
                    <span className="font-mono text-xs tracking-widest text-brand-green uppercase font-bold block mb-2">
                      WHAT THE FOUNDER EXPERIENCES AT THIS STAGE
                    </span>
                    <p className="font-sans text-sm text-ink leading-relaxed">
                      {currentMilestone.deepDive.founderExperience}
                    </p>
                  </div>

                  {/* Guaranteed Covenants */}
                  <div>
                    <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-bold block mb-2">
                      FIRM 8i COVENANTS & PROTECTION
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {currentMilestone.deepDive.covenants.map((cov, cIdx) => (
                        <div
                          key={cIdx}
                          className="p-3 rounded-xl bg-bg border border-line flex items-start gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                          <span className="font-sans text-xs text-ink font-medium leading-snug">
                            {cov}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Traditional Contrast */}
                  <div className="p-4 rounded-xl bg-surface-card border border-line text-xs font-sans text-ink-muted">
                    <strong className="text-ink block font-mono text-[11px] uppercase tracking-wider mb-1">
                      Traditional VC Contrast:
                    </strong>
                    {currentMilestone.deepDive.traditionalContrast}
                  </div>

                  {/* Partner Quote */}
                  <div className="pt-4 border-t border-line flex items-start gap-3">
                    <Award className="w-5 h-5 text-brand-vermillion shrink-0 mt-0.5" />
                    <div>
                      <blockquote className="font-serif italic text-sm text-ink leading-snug">
                        “{currentMilestone.deepDive.partnerQuote.quote}”
                      </blockquote>
                      <cite className="font-mono text-xs text-ink-muted not-italic block mt-1">
                        — {currentMilestone.deepDive.partnerQuote.author}, {currentMilestone.deepDive.partnerQuote.role}
                      </cite>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        /* COMPARISON TABLE VIEW */
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-line shadow-xs">
          <div className="max-w-3xl mb-8">
            <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase font-bold block mb-2">
              WHY FOUNDERS CHOOSE ORIGAMI
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink leading-tight mb-3">
              Traditional VC Gauntlet vs. 8i Origami
            </h3>
            <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
              Most seed rounds in India turn into a 4 to 6 month full-time job. Here is how our 30-day process compares side-by-side with conventional funds.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b-2 border-line">
                  <th className="pb-4 font-mono text-xs uppercase tracking-wider text-ink-muted w-1/4">
                    Stage / Dimension
                  </th>
                  <th className="pb-4 font-mono text-xs uppercase tracking-wider text-ink-muted w-3/8">
                    Traditional VC Process
                  </th>
                  <th className="pb-4 font-mono text-xs uppercase tracking-wider text-brand-green font-bold w-3/8">
                    8i Origami Framework
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line font-sans text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/50 transition-colors">
                    <td className="py-4 pr-4 font-serif font-bold text-ink align-top">
                      {row.criterion}
                    </td>
                    <td className="py-4 pr-4 text-ink-muted align-top leading-relaxed">
                      {row.traditional}
                    </td>
                    <td className="py-4 font-medium text-brand-green align-top leading-relaxed bg-brand-green/5 px-3 rounded-lg">
                      <span className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                        <span>{row.origami}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-green" />
              <span>Full commitment backed by Vikram Chachra & Vishwanath V</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('timeline')}
              className="font-bold text-brand-vermillion hover:underline"
            >
              Back to 30-Day Sprint Timeline →
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
