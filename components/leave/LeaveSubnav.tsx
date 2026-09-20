'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Compass,
  BookOpen,
  CalendarPlus,
  UserCheck,
  CalendarDays,
  LayoutDashboard,
} from 'lucide-react';

const SUBNAV_ITEMS = [
  {
    label: 'Overview',
    href: '/leave',
    exact: true,
    icon: Compass,
  },
  {
    label: 'Leave Policy',
    href: '/leave/policy',
    exact: false,
    icon: BookOpen,
  },
  {
    label: 'Request Leave',
    href: '/leave/request',
    exact: false,
    icon: CalendarPlus,
  },
  {
    label: 'My Leave',
    href: '/leave/my-leave',
    exact: false,
    icon: UserCheck,
    badge: 'Employee',
  },
  {
    label: 'Team Calendar',
    href: '/leave/calendar',
    exact: false,
    icon: CalendarDays,
  },
  {
    label: 'Partners Office',
    href: '/leave/admin',
    exact: false,
    icon: LayoutDashboard,
    badge: 'Admin Preview',
  },
];

export const LeaveSubnav: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="w-full border-b border-line bg-surface/85 backdrop-blur-xs sticky top-16 sm:top-20 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Breadcrumb / Hub Tag */}
        <div className="flex items-center gap-2">
          <Link
            href="/leave"
            className="flex items-center gap-2 group text-xs font-mono tracking-wider text-ink-muted hover:text-ink transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-brand-green group-hover:bg-brand-vermillion transition-colors" />
            <span className="font-bold text-ink uppercase">MERIDIAN LEAVE HUB</span>
            <span className="text-ink-faint">/</span>
          </Link>
          <span className="text-[11px] font-mono text-ink-muted hidden sm:inline-block">Chennai & Delhi Offices</span>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center gap-1 overflow-x-auto no-scrollbar py-0.5" aria-label="Leave Hub Navigation">
          {SUBNAV_ITEMS.map((item) => {
            const isActive = item.exact
              ? pathname === item.href || pathname === item.href + '/'
              : pathname === item.href || pathname.startsWith(item.href + '/');
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-all shrink-0 ${
                  isActive
                    ? 'bg-ink text-bg font-semibold shadow-xs'
                    : 'text-ink-muted hover:text-ink hover:bg-line/30'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-bg' : 'text-ink-muted'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[9px] font-mono uppercase px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? 'bg-white/20 text-bg'
                        : 'bg-brand-vermillion/10 text-brand-vermillion border border-brand-vermillion/20'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
