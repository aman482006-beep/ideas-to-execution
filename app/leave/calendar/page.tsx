import React from 'react';
import type { Metadata } from 'next';
import { LeaveTeamCalendar } from '@/components/leave/LeaveTeamCalendar';

export const metadata: Metadata = {
  title: 'Team Leave Calendar — Meridian Capital Leave Hub',
  description: 'Shared presence and scheduled leave visibility across Chennai and Delhi offices.',
};

export default function TeamCalendarPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <LeaveTeamCalendar />
    </div>
  );
}
