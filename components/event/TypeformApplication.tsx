'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  AlertCircle,
  HelpCircle,
  RotateCcw,
  CheckCircle2,
  Building2,
  Mail,
  User,
  Zap,
} from 'lucide-react';
import {
  ApplicationFormData,
  ConnectionTo8i,
  StartupStage,
} from '@/types/event';
import { submitApplication } from '@/lib/eventService';
import { popularSectors } from '@/data/eventData';
import confetti from 'canvas-confetti';

interface TypeformApplicationProps {
  onClose?: () => void;
}

const INITIAL_FORM: ApplicationFormData = {
  connectionTo8i: '',
  name: '',
  email: '',
  company: '',
  stage: '',
  stageOther: '',
  sector: '',
  liveProblem: '',
  offerToCommunity: '',
};

export const TypeformApplication: React.FC<TypeformApplicationProps> = ({ onClose }) => {
  // Steps:
  // 0: Connection to 8i
  // 1: Name
  // 2: Email
  // 3: Company
  // 4: Stage
  // 5: Sector
  // 6: Live Problem
  // 7: Offer to Community
  // 8: Review Screen
  // 9: Success State
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM);
  const [error, setError] = useState<string>('');
  const [portfolioNotice, setPortfolioNotice] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [referenceId, setReferenceId] = useState<string>('');

  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);

  // Focus input automatically on step change
  useEffect(() => {
    setError('');
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [currentStep]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      // For textarea, require Cmd/Ctrl + Enter
      if (currentStep === 6 || currentStep === 7) {
        if (e.metaKey || e.ctrlKey) {
          e.preventDefault();
          handleNext();
        }
      } else if (currentStep !== 8 && currentStep !== 9) {
        e.preventDefault();
        handleNext();
      }
    }
  };

  const validateCurrentStep = (): boolean => {
    setError('');

    if (currentStep === 0) {
      if (!formData.connectionTo8i) {
        setError('Please select an option to continue.');
        return false;
      }
    } else if (currentStep === 1) {
      if (!formData.name.trim()) {
        setError('Please enter your full name.');
        return false;
      }
    } else if (currentStep === 2) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim()) {
        setError('Please enter your email address.');
        return false;
      } else if (!emailPattern.test(formData.email.trim())) {
        setError('Please enter a valid email address.');
        return false;
      }
    } else if (currentStep === 3) {
      if (!formData.company.trim()) {
        setError('Please enter your company / project name.');
        return false;
      }
    } else if (currentStep === 4) {
      if (!formData.stage) {
        setError('Please select your company stage.');
        return false;
      }
      if (formData.stage === 'Other' && !formData.stageOther?.trim()) {
        setError('Please specify your current stage.');
        return false;
      }
    } else if (currentStep === 5) {
      if (!formData.sector.trim()) {
        setError('Please select or specify your sector.');
        return false;
      }
    } else if (currentStep === 6) {
      if (!formData.liveProblem.trim()) {
        setError('Please describe one live problem you would like help with.');
        return false;
      }
    } else if (currentStep === 7) {
      if (!formData.offerToCommunity.trim()) {
        setError('Please describe what insight or experience you can bring to the room.');
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!validateCurrentStep()) return;

    if (currentStep === 0) {
      if (formData.connectionTo8i === '8i Portfolio Founder' || formData.connectionTo8i === 'Origami') {
        setPortfolioNotice(true);
        return;
      }
    }

    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    setError('');
    setPortfolioNotice(false);
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    } else if (onClose) {
      onClose();
    }
  };

  const jumpToStep = (stepNumber: number) => {
    setError('');
    setPortfolioNotice(false);
    setCurrentStep(stepNumber);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const res = await submitApplication(formData);
      setReferenceId(res.referenceId);
      setCurrentStep(9); // Success step
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.6 },
          colors: ['#143224', '#cf4322', '#1d4a38', '#34d399'],
        });
      } catch {
        // fallback
      }
    } catch {
      setError('An error occurred during prototype submission simulation.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const progressPercentage = Math.min(100, Math.round(((currentStep + 1) / 9) * 100));

  return (
    <div
      className="min-h-[700px] w-full flex flex-col justify-between p-6 sm:p-12 bg-surface rounded-3xl border border-line shadow-editorial relative overflow-hidden"
      onKeyDown={handleKeyDown}
    >
      {/* Top Header Bar: Progress & Back Button */}
      <div className="flex items-center justify-between gap-4 pb-6 border-b border-line">
        <div className="flex items-center gap-3">
          {currentStep < 9 && (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line font-mono text-xs text-ink-muted hover:text-ink hover:bg-bg transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          )}

          <span className="font-mono text-xs text-ink-muted hidden sm:inline-block">
            {currentStep < 8 ? `Question ${currentStep + 1} of 8` : currentStep === 8 ? 'Final Review' : 'Status'}
          </span>
        </div>

        {/* Prototype Indicator Badge */}
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase px-2.5 py-0.5 rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20 font-bold">
            PROTOTYPE APPLICATION
          </span>
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-ink-muted hover:text-ink underline ml-2"
            >
              Exit
            </button>
          )}
        </div>
      </div>

      {/* Visual Progress Bar */}
      {currentStep < 9 && (
        <div className="w-full bg-line/40 h-1 mt-0">
          <div
            className="bg-brand-green h-1 transition-all duration-300 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      )}

      {/* Main Form Center Stage */}
      <div className="flex-1 flex flex-col justify-center py-10 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          {/* STEP 0: CONNECTION TO 8I */}
          {currentStep === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 01 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  How are you connected to 8i?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Select your relationship to the firm.
                </p>
              </div>

              {portfolioNotice ? (
                <div className="p-6 rounded-2xl bg-surface-card border border-brand-green/30 space-y-4 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span>Personal Invitation Pathway</span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-ink leading-relaxed">
                    “You&apos;ll receive / use a personal invitation link. This prototype does not verify invite status.”
                  </p>
                  <p className="font-sans text-xs text-ink-muted leading-relaxed">
                    Portfolio and Origami founders are invited directly via personal GP links. In this prototype, you can proceed as an External Founder to preview the application questions.
                  </p>
                  <div className="pt-2 flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, connectionTo8i: 'External Founder' });
                        setPortfolioNotice(false);
                        setCurrentStep(1);
                      }}
                      className="px-5 py-2.5 rounded-full bg-brand-green text-bg font-sans text-xs font-semibold hover:bg-brand-ink transition-colors"
                    >
                      Continue as External Founder
                    </button>
                    <button
                      type="button"
                      onClick={() => setPortfolioNotice(false)}
                      className="px-4 py-2.5 rounded-full border border-line font-mono text-xs text-ink-muted hover:text-ink"
                    >
                      Change Selection
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(['8i Portfolio Founder', 'Origami', 'External Founder', 'Other'] as ConnectionTo8i[]).map((opt) => {
                    const isSelected = formData.connectionTo8i === opt;
                    return (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, connectionTo8i: opt });
                          setError('');
                        }}
                        className={`p-5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-ink text-bg border-ink shadow-xs'
                            : 'bg-bg/60 border-line text-ink hover:border-ink/40'
                        }`}
                      >
                        <span className="font-sans text-sm font-semibold">{opt}</span>
                        {isSelected && <Check className="w-4 h-4 text-bg" />}
                      </button>
                    );
                  })}
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 1: NAME */}
          {currentStep === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 02 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What should we call you?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Your full name or how you introduce yourself to other founders.
                </p>
              </div>

              <div className="pt-2">
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Vikram Malhotra"
                  className="w-full text-2xl sm:text-3xl font-serif text-ink bg-transparent border-b-2 border-line focus:border-ink pb-2 focus:outline-none transition-colors"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 2: EMAIL */}
          {currentStep === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 03 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What&apos;s your email?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  We&apos;ll use this to route event communications and your curated room itinerary.
                </p>
              </div>

              <div className="pt-2">
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="founder@company.com"
                  className="w-full text-2xl sm:text-3xl font-serif text-ink bg-transparent border-b-2 border-line focus:border-ink pb-2 focus:outline-none transition-colors"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 3: COMPANY */}
          {currentStep === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 04 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What are you building?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Startup / Company Name.
                </p>
              </div>

              <div className="pt-2">
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. Acme Payments or Boba Labs"
                  className="w-full text-2xl sm:text-3xl font-serif text-ink bg-transparent border-b-2 border-line focus:border-ink pb-2 focus:outline-none transition-colors"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 4: STAGE */}
          {currentStep === 4 && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 05 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  Where are you in the journey?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Choose your company&apos;s current operating stage.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {(['Pre-seed', 'Seed', 'Series A', 'Other'] as StartupStage[]).map((stg) => {
                  const isSelected = formData.stage === stg;
                  return (
                    <button
                      key={stg}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, stage: stg });
                        setError('');
                      }}
                      className={`p-4 rounded-2xl border text-center transition-all ${
                        isSelected
                          ? 'bg-ink text-bg border-ink shadow-xs font-semibold'
                          : 'bg-bg/60 border-line text-ink hover:border-ink/40'
                      }`}
                    >
                      <span className="font-sans text-sm">{stg}</span>
                    </button>
                  );
                })}
              </div>

              {formData.stage === 'Other' && (
                <div className="pt-2 animate-in fade-in duration-200">
                  <label className="block font-mono text-[10px] uppercase text-ink-muted mb-1">
                    Please specify your current stage:
                  </label>
                  <input
                    type="text"
                    value={formData.stageOther || ''}
                    onChange={(e) => setFormData({ ...formData, stageOther: e.target.value })}
                    placeholder="e.g. Bootstrapped profitable, Series B, Pre-incorporation"
                    className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                  />
                </div>
              )}
            </motion.div>
          )}

          {/* STEP 5: SECTOR */}
          {currentStep === 5 && (
            <motion.div
              key="step-5"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 06 / 08
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What space are you building in?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Choose a suggested category or type your specific sector.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {popularSectors.map((sec) => {
                  const isSelected = formData.sector === sec;
                  return (
                    <button
                      key={sec}
                      type="button"
                      onClick={() => {
                        setFormData({ ...formData, sector: sec });
                        setError('');
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-sans border transition-all ${
                        isSelected
                          ? 'bg-ink text-bg border-ink font-semibold'
                          : 'bg-bg border-line text-ink hover:border-ink/30'
                      }`}
                    >
                      {sec}
                    </button>
                  );
                })}
              </div>

              <div className="pt-2">
                <label className="block font-mono text-[10px] uppercase text-ink-muted mb-1">
                  Or enter your sector:
                </label>
                <input
                  ref={inputRef as React.RefObject<HTMLInputElement>}
                  type="text"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  placeholder="e.g. Cross-border NBFC lending rails or HealthTech D2C"
                  className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                />
              </div>
            </motion.div>
          )}

          {/* STEP 6: LIVE PROBLEM (PROMPT EMPHASIS) */}
          {currentStep === 6 && (
            <motion.div
              key="step-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-vermillion font-bold block">
                  STEP 07 / 08 · THE CORE ASK
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What&apos;s one live problem you&apos;d genuinely like help with?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
                  “Bring something real. A decision you&apos;re stuck on, a problem you&apos;ve tried to solve, or something another founder might have already figured out.”
                </p>
              </div>

              <div className="pt-2">
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  rows={4}
                  value={formData.liveProblem}
                  onChange={(e) => setFormData({ ...formData, liveProblem: e.target.value })}
                  placeholder="e.g. Navigating our first RBI co-lending compliance review without slowing engineering down, or managing modern trade distribution unit economics in tier-2 cities..."
                  className="w-full p-4 rounded-2xl border-2 border-line bg-bg font-sans text-sm text-ink focus:outline-none focus:border-ink resize-y transition-colors leading-relaxed"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mt-1">
                  <span>Be specific and tactical</span>
                  <span className="hidden sm:inline">Press Cmd/Ctrl + Enter to continue</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 7: OFFER TO COMMUNITY */}
          {currentStep === 7 && (
            <motion.div
              key="step-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-green font-bold block">
                  STEP 08 / 08 · WHAT YOU BRING
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                  What could you bring to the room?
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed max-w-xl">
                  “One thing you&apos;ve learned, built, solved, or experienced that another founder might find useful.”
                </p>
              </div>

              <div className="pt-2">
                <textarea
                  ref={inputRef as React.RefObject<HTMLTextAreaElement>}
                  rows={4}
                  value={formData.offerToCommunity}
                  onChange={(e) => setFormData({ ...formData, offerToCommunity: e.target.value })}
                  placeholder="e.g. Hard-earned playbooks from negotiating payment gateway interchange fees, or managing the first 15 engineering hires with zero attrition..."
                  className="w-full p-4 rounded-2xl border-2 border-line bg-bg font-sans text-sm text-ink focus:outline-none focus:border-ink resize-y transition-colors leading-relaxed"
                />
                <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mt-1">
                  <span>Founder reciprocity in practice</span>
                  <span className="hidden sm:inline">Press Cmd/Ctrl + Enter to continue</span>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 8: REVIEW APPLICATION SCREEN */}
          {currentStep === 8 && (
            <motion.div
              key="step-8"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-widest text-brand-green font-bold block">
                  APPLICATION REVIEW
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-ink">
                  Review your application
                </h2>
                <p className="font-sans text-xs sm:text-sm text-ink-muted">
                  Double check your responses before finalizing.
                </p>
              </div>

              {/* Review summary cards with Edit buttons */}
              <div className="space-y-3 pt-2 text-xs">
                {/* Personal & Company */}
                <div className="p-4 rounded-2xl bg-bg border border-line flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-ink-muted uppercase">Founder & Startup</span>
                    <p className="font-serif text-base font-bold text-ink">{formData.name}</p>
                    <p className="text-ink-muted">{formData.email} · <strong className="text-ink">{formData.company}</strong></p>
                  </div>
                  <button
                    type="button"
                    onClick={() => jumpToStep(1)}
                    className="font-mono text-[11px] text-brand-green hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>

                {/* Stage & Sector */}
                <div className="p-4 rounded-2xl bg-bg border border-line flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-ink-muted uppercase">Stage & Sector</span>
                    <p className="font-sans font-semibold text-ink">
                      {formData.stage === 'Other' ? formData.stageOther : formData.stage} · {formData.sector}
                    </p>
                    <p className="font-mono text-[11px] text-ink-muted">Connection: {formData.connectionTo8i}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => jumpToStep(4)}
                    className="font-mono text-[11px] text-brand-green hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>

                {/* Live Problem */}
                <div className="p-4 rounded-2xl bg-bg border border-line flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-brand-vermillion uppercase font-bold">Live Problem To Solve</span>
                    <p className="font-sans text-ink leading-relaxed whitespace-pre-wrap">{formData.liveProblem}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => jumpToStep(6)}
                    className="font-mono text-[11px] text-brand-green hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>

                {/* What I Can Offer */}
                <div className="p-4 rounded-2xl bg-bg border border-line flex items-start justify-between gap-4">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-brand-green uppercase font-bold">Offer to Community</span>
                    <p className="font-sans text-ink leading-relaxed whitespace-pre-wrap">{formData.offerToCommunity}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => jumpToStep(7)}
                    className="font-mono text-[11px] text-brand-green hover:underline shrink-0"
                  >
                    Edit
                  </button>
                </div>
              </div>

              {/* Exact Prototype Disclosure Required by Prompt */}
              <div className="p-4 rounded-xl bg-surface-card border border-line text-xs font-sans text-ink-muted flex items-start gap-3 leading-relaxed">
                <Sparkles className="w-4 h-4 text-brand-vermillion shrink-0 mt-0.5" />
                <p>
                  “By submitting, you&apos;re applying to attend 8i Founders&apos; Day. This prototype does not currently store or send your application.”
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  disabled={isSubmitting}
                  onClick={handleSubmit}
                  className="w-full py-4 rounded-full bg-brand-green text-bg font-sans text-sm font-semibold hover:bg-brand-ink transition-colors shadow-xs"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 9: SUCCESS SCREEN (PROMPT MANDATE) */}
          {currentStep === 9 && (
            <motion.div
              key="step-9"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center py-6 space-y-6 max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-brand-green font-bold block">
                  CAPTURE CONFIRMATION · REF: {referenceId}
                </span>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-ink">
                  Application ready.
                </h2>
                <p className="font-sans text-sm sm:text-base text-ink-muted leading-relaxed">
                  “Thanks for your interest in 8i Founders&apos; Day. In the live version, your application would be reviewed and eligible applicants would receive confirmation.”
                </p>
              </div>

              {/* Explicit Prototype Disclosure */}
              <div className="p-4 rounded-2xl bg-bg border border-line text-xs font-mono text-ink-muted leading-relaxed">
                <span className="text-brand-vermillion font-bold block mb-1">
                  PROTOTYPE VERIFICATION
                </span>
                “Prototype only — no application has been submitted to 8i.”
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                {onClose ? (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-8 py-3.5 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors"
                  >
                    Back to Event
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setFormData(INITIAL_FORM);
                      setCurrentStep(0);
                      setReferenceId('');
                    }}
                    className="px-8 py-3.5 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors"
                  >
                    Back to Event
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Controls Bar */}
      {currentStep < 8 && !portfolioNotice && (
        <div className="pt-6 border-t border-line flex items-center justify-between gap-4">
          <div className="text-xs font-sans text-red-500">
            {error && (
              <span className="flex items-center gap-1.5 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </span>
            )}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors group shadow-xs"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5 text-bg group-hover:translate-x-0.5 transition-transform" />
            </button>
            <span className="hidden sm:inline font-mono text-[10px] text-ink-muted">
              Press Enter ↵
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
