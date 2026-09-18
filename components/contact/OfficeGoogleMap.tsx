'use client';

import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Copy, Check, Building2, Laptop } from 'lucide-react';

interface OfficeLocation {
  id: 'mumbai' | 'bangalore';
  city: string;
  name: string;
  badge: string;
  tagline: string;
  address: string;
  area: string;
  postalCode: string;
  state: string;
  country: string;
  focus: string[];
  meetingPolicy: string;
  mapQuery: string;
  googleMapsUrl: string;
}

const OFFICES: Record<'mumbai' | 'bangalore', OfficeLocation> = {
  mumbai: {
    id: 'mumbai',
    city: 'Mumbai',
    name: '8i Ventures HQ',
    badge: 'HEADQUARTERS & FUND OPS',
    tagline: 'Investment Committee, SEBI Compliance & Investor Relations',
    address: 'Bandra Kurla Complex (BKC), G Block',
    area: 'Bandra East',
    postalCode: '400051',
    state: 'Maharashtra',
    country: 'India',
    focus: ['Investment Committee Deliberations', 'Institutional LP Relations', 'SEBI Registered Fund Operations'],
    meetingPolicy: 'Open for scheduled founder deep-dives and LP visits by prior appointment.',
    mapQuery: 'Bandra Kurla Complex, Bandra East, Mumbai, Maharashtra 400051, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Bandra+Kurla+Complex+Mumbai+Maharashtra+India'
  },
  bangalore: {
    id: 'bangalore',
    city: 'Bangalore',
    name: '8i Studio & Operator Hub',
    badge: 'TECH & PORTFOLIO STUDIO',
    tagline: 'Origami Evaluation, Founder Residency & Diligence',
    address: '100 Feet Road, Indiranagar',
    area: 'Indiranagar 1st Stage',
    postalCode: '560038',
    state: 'Karnataka',
    country: 'India',
    focus: ['Origami Cohort Evaluations', 'Founder Product & Architecture Reviews', '8i Operator Guild Roundtables'],
    meetingPolicy: 'Active founder hub for working sessions, product sprints, and Origami pitch reviews.',
    mapQuery: '100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038, India',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=100+Feet+Road+Indiranagar+Bengaluru+Karnataka+India'
  }
};

export const OfficeGoogleMap: React.FC<{ className?: string }> = ({ className = '' }) => {
  const [activeOfficeId, setActiveOfficeId] = useState<'mumbai' | 'bangalore'>('mumbai');
  const [copied, setCopied] = useState(false);

  const office = OFFICES[activeOfficeId];

  const handleCopyAddress = () => {
    const fullText = `${office.name}, ${office.address}, ${office.area}, ${office.city}, ${office.state} ${office.postalCode}, ${office.country}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`w-full flex flex-col space-y-5 ${className}`}>
      {/* City Switcher Tabs */}
      <div className="flex items-center justify-between gap-3 p-1.5 rounded-2xl bg-surface-card border border-line">
        <button
          type="button"
          onClick={() => setActiveOfficeId('mumbai')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-xs transition-all ${
            activeOfficeId === 'mumbai'
              ? 'bg-brand-green text-white font-bold shadow-xs'
              : 'text-ink-muted hover:text-ink hover:bg-bg/60'
          }`}
        >
          <Building2 className="w-3.5 h-3.5" />
          <span>Mumbai HQ</span>
          <span className={`text-[10px] hidden sm:inline opacity-80 ${activeOfficeId === 'mumbai' ? 'text-white/80' : ''}`}>
            (BKC)
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveOfficeId('bangalore')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-xs transition-all ${
            activeOfficeId === 'bangalore'
              ? 'bg-brand-green text-white font-bold shadow-xs'
              : 'text-ink-muted hover:text-ink hover:bg-bg/60'
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>Bangalore Studio</span>
          <span className={`text-[10px] hidden sm:inline opacity-80 ${activeOfficeId === 'bangalore' ? 'text-white/80' : ''}`}>
            (Indiranagar)
          </span>
        </button>
      </div>

      {/* Google Maps Container */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-line shadow-xs bg-surface-card aspect-[16/10] sm:aspect-[16/9]">
        {/* Real Interactive Google Map Embed */}
        <iframe
          key={office.id}
          title={`Google Map view of ${office.name} in ${office.city}`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(office.mapQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
          className="w-full h-full border-0 grayscale-[15%] contrast-[1.05] hover:grayscale-0 transition-all duration-300"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />

        {/* Live Badge Overlay on Map */}
        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-1.5 rounded-xl border border-line shadow-xs flex items-center gap-2 pointer-events-none">
          <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
          <span className="font-mono text-[10px] font-bold text-ink uppercase tracking-wider">
            {office.city}, India
          </span>
        </div>

        {/* External Link Overlay Button */}
        <a
          href={office.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 right-3 bg-ink/90 hover:bg-ink text-white font-mono text-[10px] px-3.5 py-1.5 rounded-lg flex items-center gap-1.5 shadow-md transition-colors backdrop-blur-xs"
        >
          <span>Open Full Google Maps</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      {/* Location Detail Card */}
      <div className="p-5 sm:p-6 rounded-2xl bg-surface border border-line">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-line">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-brand-green/10 text-brand-green font-mono text-[10px] uppercase font-bold tracking-wider mb-2">
              <MapPin className="w-3 h-3" />
              <span>{office.badge}</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-ink">
              {office.name}
            </h3>
            <p className="font-sans text-xs text-ink-muted mt-0.5">
              {office.tagline}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handleCopyAddress}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-line font-mono text-xs text-ink hover:bg-bg transition-colors"
              title="Copy full address"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-brand-green" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>

            <a
              href={office.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-green text-white font-mono text-xs font-semibold hover:bg-brand-ink transition-colors shadow-xs"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Directions</span>
            </a>
          </div>
        </div>

        {/* Address & Operational Focus */}
        <div className="pt-4 grid grid-cols-1 sm:grid-cols-12 gap-4 text-xs font-sans">
          <div className="sm:col-span-6 space-y-1">
            <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted block">
              Physical Location
            </span>
            <p className="text-ink font-medium leading-relaxed">
              {office.address}
              <br />
              {office.area}, {office.city} — {office.postalCode}
              <br />
              {office.state}, {office.country}
            </p>
          </div>

          <div className="sm:col-span-6 space-y-1.5">
            <span className="font-mono text-[10px] tracking-wider uppercase text-ink-muted block">
              Key Office Operations
            </span>
            <ul className="space-y-1">
              {office.focus.map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-ink-muted text-[11px] leading-snug">
                  <span className="w-1 h-1 rounded-full bg-brand-vermillion shrink-0 mt-1.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
