'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Companies', href: '/companies' },
  { label: 'News', href: '/news' },
  { label: 'Team', href: '/team' },
  { label: 'Origami', href: '/origami', highlight: true },
  { label: 'Leave Hub', href: '/leave' },
  { label: 'Contact Us', href: '/contact' },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrolledRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const isPast = window.scrollY > 40;
      if (isPast !== scrolledRef.current) {
        scrolledRef.current = isPast;
        setScrolled(isPast);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-bg/85 backdrop-blur-md border-b border-line py-3.5 shadow-sm'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none"
            aria-label="8i Ventures Home"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded border border-line bg-surface shadow-xs group-hover:border-ink transition-colors">
              <span className="font-serif font-black text-base text-ink tracking-tighter">
                8i
              </span>
              <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-brand-vermillion opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm tracking-tight text-ink leading-none">
                8i Ventures
              </span>
              <span className="font-mono text-[9px] tracking-widest text-ink-muted uppercase leading-none mt-1">
                Early Believers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium tracking-normal transition-colors rounded-full ${
                    isActive
                      ? 'text-ink font-semibold bg-line/30'
                      : 'text-ink-muted hover:text-ink hover:bg-line/20'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {item.label}
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion inline-block" />
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-ink rounded-md hover:bg-line/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-bg md:hidden flex flex-col justify-between p-8 pt-24 overflow-y-auto animate-in fade-in duration-200">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 pointer-events-none opacity-5 paper-grain" />

          <nav className="flex flex-col space-y-6 relative z-10">
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase">
              Navigation
            </span>
            {NAV_LINKS.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-2xl font-serif font-bold text-ink py-1 border-b border-line group"
                  style={{ animationDelay: `${idx * 40}ms` }}
                >
                  <span className="flex items-center gap-2">
                    {item.label}
                    {item.highlight && (
                      <span className="px-2 py-0.5 text-[9px] font-mono font-semibold rounded-full bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20">
                        7·14·30
                      </span>
                    )}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-ink-muted group-hover:text-ink transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              );
            })}
          </nav>

          <div className="relative z-10 pt-8 border-t border-line mt-8">
            <span className="font-mono text-[10px] tracking-widest text-ink-muted uppercase block mb-1">
              Direct Contact
            </span>
            <a
              href="mailto:hello@8ivc.com"
              className="font-serif text-lg font-bold text-brand-green hover:underline"
            >
              hello@8ivc.com
            </a>
            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-ink-muted">
              <span>MUMBAI</span>
              <span>·</span>
              <span>BANGALORE</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
