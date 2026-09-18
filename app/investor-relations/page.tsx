import React from 'react';
import { fundRegistrations, complianceInfo } from '@/data/investorRelations';
import { ShieldCheck, FileText, ArrowUpRight, Scale, Lock } from 'lucide-react';

export const metadata = {
  title: '8i Ventures — Investor Relations & Regulatory Disclosures',
  description: 'Statutory disclosures, SEBI Alternative Investment Fund registrations, Scores IDs, and compliance information for 8i Ventures funds.',
};

export default function InvestorRelationsPage() {
  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 max-w-5xl mx-auto">
      {/* Formal Header */}
      <div className="mb-14 pb-8 border-b border-line">
        <div className="flex items-center gap-2 mb-2">
          <ShieldCheck className="w-4 h-4 text-brand-green" />
          <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
            REGULATORY DISCLOSURES & GOVERNANCE
          </span>
        </div>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-ink mb-4">
          Investor Relations.
        </h1>
        <p className="font-sans text-sm sm:text-base text-ink-muted max-w-2xl leading-relaxed">
          Statutory registrations, Alternative Investment Fund (AIF) compliance details, and SEBI grievance redressal mechanisms for institutional and limited partners.
        </p>
      </div>

      {/* Structured Ledger Aesthetic Cards */}
      <div className="space-y-10 mb-16">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs tracking-widest text-ink uppercase font-semibold">
            REGISTERED ALTERNATIVE INVESTMENT FUNDS (AIF)
          </span>
          <span className="font-mono text-xs text-ink-muted">
            SEBI Regulated · Category II
          </span>
        </div>

        {fundRegistrations.map((fund, idx) => (
          <div
            key={fund.id}
            className="rounded-2xl border border-line bg-surface p-8 sm:p-10 shadow-xs relative"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-line gap-3 mb-6">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold block mb-1">
                  FUND REGISTRATION 0{idx + 1}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                  {fund.nameOfAIF}
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green font-mono text-xs font-semibold self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                <span>{fund.status}</span>
              </span>
            </div>

            {/* Formal Tabular Ledger */}
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 text-xs sm:text-sm">
              <div className="p-4 rounded-xl bg-bg border border-line">
                <dt className="font-mono text-[10px] tracking-wider text-ink-muted uppercase mb-1">
                  Name of AIF
                </dt>
                <dd className="font-serif text-base font-bold text-ink">
                  {fund.nameOfAIF}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-line">
                <dt className="font-mono text-[10px] tracking-wider text-ink-muted uppercase mb-1">
                  Category
                </dt>
                <dd className="font-serif text-base font-bold text-ink">
                  {fund.category}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-line">
                <dt className="font-mono text-[10px] tracking-wider text-ink-muted uppercase mb-1">
                  SEBI Registration Number
                </dt>
                <dd className="font-mono text-base font-bold text-brand-green">
                  {fund.sebiRegistrationNumber}
                </dd>
              </div>

              <div className="p-4 rounded-xl bg-bg border border-line">
                <dt className="font-mono text-[10px] tracking-wider text-ink-muted uppercase mb-1">
                  Investment Manager
                </dt>
                <dd className="font-serif text-base font-bold text-ink">
                  {fund.investmentManager}
                </dd>
              </div>

              <div className="sm:col-span-2 p-4 rounded-xl bg-bg border border-line flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <dt className="font-mono text-[10px] tracking-wider text-ink-muted uppercase mb-1">
                    Scores Login ID
                  </dt>
                  <dd className="font-mono text-lg font-bold text-brand-vermillion">
                    {fund.scoresLoginId}
                  </dd>
                </div>
                <a
                  href={complianceInfo.investorGrievancePortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-brand-green hover:underline"
                >
                  <span>SEBI Scores Portal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </dl>
          </div>
        ))}
      </div>

      {/* Compliance & Redressal Information Section */}
      <div className="p-8 sm:p-10 rounded-2xl bg-surface border border-line shadow-2xs space-y-6 mb-16">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-brand-green" />
          <h3 className="font-serif text-xl font-bold text-ink">
            Grievance Redressal & Institutional Inquiries
          </h3>
        </div>

        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
          In accordance with SEBI circulars on grievance redressal mechanisms, investors may lodge complaints on SEBI’s SCORES platform (SEBI Complaints Redress System) at{' '}
          <a
            href={complianceInfo.investorGrievancePortal}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-green font-medium underline"
          >
            scores.sebi.gov.in
          </a>{' '}
          using the official Scores Login IDs provided above.
        </p>

        <p className="font-sans text-xs sm:text-sm text-ink-muted leading-relaxed">
          For LP reporting, audit inquiries, and compliance correspondence, contact the fund administrator at{' '}
          <a href={`mailto:${complianceInfo.contactEmail}`} className="font-mono font-bold text-ink hover:underline">
            {complianceInfo.contactEmail}
          </a>.
        </p>

        <div className="pt-6 border-t border-line font-sans text-xs text-ink-muted/80 leading-relaxed italic">
          {complianceInfo.disclaimer}
        </div>
      </div>
    </div>
  );
}
