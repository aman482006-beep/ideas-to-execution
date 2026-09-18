'use client';

import React, { useState } from 'react';
import { OfficeGoogleMap } from '@/components/contact/OfficeGoogleMap';
import { Check, Copy, Mail, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleCopy = () => {
    navigator.clipboard.writeText('hello@8ivc.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate inquiry draft submission / open email client
    const mailto = `mailto:hello@8ivc.com?subject=Inquiry from ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.company)})&body=${encodeURIComponent(formData.message)}%0A%0AReply to: ${encodeURIComponent(formData.email)}`;
    window.location.href = mailto;
    setFormSubmitted(true);
    try {
      confetti({
        particleCount: 65,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#143224', '#cf4322', '#1d4a38', '#34d399']
      });
    } catch {
      // fallback if canvas is not supported
    }
  };

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-16 pb-8 border-b border-line">
        <span className="font-mono text-xs tracking-widest text-brand-vermillion uppercase block mb-3">
          DIRECT LINE TO PARTNERS
        </span>
        <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-ink mb-6">
          Come Build With Us.
        </h1>
        <p className="font-sans text-base sm:text-lg text-ink-muted max-w-2xl leading-relaxed">
          Whether you are exploring Day Zero venture backing, pitching an early-stage company, or discussing institutional co-investments.
        </p>
      </div>

      {/* Main Grid: Map & Interactive Hubs on Left, Direct Contact on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        {/* Left Column: Interactive Google Map View & Office Hubs */}
        <div className="lg:col-span-6">
          <OfficeGoogleMap />
        </div>

        {/* Right Column: Direct Email Action & Quick Message Form */}
        <div className="lg:col-span-6 space-y-8">
          {/* Primary Action Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-green text-bg shadow-md relative overflow-hidden">
            <span className="font-mono text-[10px] tracking-[0.2em] text-bg/70 uppercase block mb-2">
              PRIMARY INBOX
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">
              hello@8ivc.com
            </h2>
            <p className="font-sans text-xs sm:text-sm text-bg/80 leading-relaxed mb-6">
              Our shared inbox goes directly to all general partners and the investment team. Every pitch deck sent here is logged and reviewed.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@8ivc.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-brand-green font-sans text-xs font-bold hover:bg-bg transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Launch Mail App</span>
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 font-mono text-xs text-white transition-colors"
              >
                {copied ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
            </div>
          </div>

          {/* Quick Pitch Drafting Form / Success Confirmation */}
          <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-line shadow-xs">
            {formSubmitted ? (
              <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-2">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-ink">
                  Inquiry Prepared & Routed
                </h3>
                <p className="font-sans text-xs text-ink-muted max-w-sm mx-auto leading-relaxed">
                  Your mail client has been opened to <strong className="text-ink">hello@8ivc.com</strong> with your pitch summary. If your client didn&apos;t open automatically, you can send your materials directly to hello@8ivc.com.
                </p>
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                    }}
                    className="px-5 py-2.5 rounded-full border border-line font-mono text-xs text-ink hover:bg-bg transition-colors"
                  >
                    Draft another note
                  </button>
                  <a
                    href={`mailto:hello@8ivc.com?subject=Inquiry from ${encodeURIComponent(formData.name)} (${encodeURIComponent(formData.company)})&body=${encodeURIComponent(formData.message)}`}
                    className="px-5 py-2.5 rounded-full bg-brand-green text-bg font-mono text-xs font-bold hover:bg-brand-ink transition-colors"
                  >
                    Reopen email client
                  </a>
                </div>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-bold text-ink mb-2">
                  Send a direct note
                </h3>
                <p className="font-sans text-xs text-ink-muted mb-6">
                  Prepare a message with your project link or deck summary to route straight to the investment committee.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Founder Name"
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                      />
                    </div>
                    <div>
                      <label className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="founder@company.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
                      Company / Project Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company Name"
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                    />
                  </div>

                  <div>
                    <label className="block font-mono text-[10px] tracking-wider uppercase text-ink-muted mb-1">
                      Brief Thesis / Deck URL
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="One sentence on what you're building, current stage, and deck link..."
                      className="w-full px-4 py-2.5 rounded-xl border border-line bg-bg font-sans text-xs text-ink focus:outline-none focus:border-ink"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-full bg-ink text-bg font-sans text-xs font-semibold hover:bg-brand-green transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit to hello@8ivc.com</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
