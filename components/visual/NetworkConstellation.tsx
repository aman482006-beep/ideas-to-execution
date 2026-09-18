'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { generalPartners, teamMembers, TeamMember } from '@/data/team';
import { ArrowUpRight, Award, Compass, MapPin, Sparkles, UserCheck, Zap } from 'lucide-react';

interface ConstellationNode {
  member: TeamMember;
  x: number;
  y: number;
  isGP: boolean;
  portfolioConnections?: string[];
}

export const NetworkConstellation: React.FC = () => {
  const [activeMember, setActiveMember] = useState<TeamMember>(generalPartners[0]);
  const [filterDepartment, setFilterDepartment] = useState<'all' | 'leadership' | 'investment' | 'operations'>('all');

  // Constellation coordinate mapping on an 880 x 440 grid
  const nodes: ConstellationNode[] = [
    {
      member: generalPartners[0], // Vikram Chachra
      x: 280,
      y: 200,
      isGP: true,
      portfolioConnections: ["Slice", "M2P", "Signzy", "Easebuzz"]
    },
    {
      member: generalPartners[1], // Vishwanath V
      x: 600,
      y: 200,
      isGP: true,
      portfolioConnections: ["Blue Tokai", "BobaBhai", "BBetter", "Naagin"]
    },
    { member: teamMembers[0], x: 440, y: 90, isGP: false },   // Rohan Sharma (Principal)
    { member: teamMembers[1], x: 150, y: 110, isGP: false },  // Akshay Wadhwani
    { member: teamMembers[2], x: 140, y: 310, isGP: false },  // Yug Shah
    { member: teamMembers[3], x: 290, y: 360, isGP: false },  // Priya Vohera
    { member: teamMembers[4], x: 740, y: 110, isGP: false },  // Devansh Purswani
    { member: teamMembers[5], x: 750, y: 300, isGP: false },  // Muskaan Khilnani
    { member: teamMembers[6], x: 590, y: 360, isGP: false },  // Divya Anchan
    { member: teamMembers[7], x: 440, y: 290, isGP: false },  // Pallavi
  ];

  // Key Flagship Portfolio Satellite Nodes
  const portfolioSatellites = [
    { name: "Slice (Unicorn)", x: 210, y: 130, connectedToGP: 0 },
    { name: "M2P (12X Exit)", x: 230, y: 270, connectedToGP: 0 },
    { name: "Blue Tokai", x: 670, y: 140, connectedToGP: 1 },
    { name: "BobaBhai", x: 660, y: 265, connectedToGP: 1 },
  ];

  const filteredNodes = nodes.filter((node) => {
    if (filterDepartment === 'all') return true;
    return node.member.department === filterDepartment;
  });

  return (
    <div className="w-full relative rounded-3xl bg-night border border-night-line text-[#fbf9f5] shadow-2xl overflow-hidden">
      {/* Constellation Header & Filter Ribbon */}
      <div className="p-6 sm:p-8 border-b border-night-line flex flex-col md:flex-row md:items-center justify-between gap-4 bg-night-panel/95 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-brand-vermillion/20 border border-brand-vermillion/40 flex items-center justify-center text-brand-vermillion shadow-xs">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: '16s' }} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] tracking-widest text-night-mist uppercase font-bold">
                LEADERSHIP & SYNDICATE NETWORK
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-brand-vermillion animate-ping" />
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
              The 8i Operating Constellation
            </h3>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
          {[
            { key: 'all', label: 'All Team (10)' },
            { key: 'leadership', label: 'GPs (2)' },
            { key: 'investment', label: 'Investment (5)' },
            { key: 'operations', label: 'Operations (3)' },
          ].map((tab) => {
            const isActive = filterDepartment === tab.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setFilterDepartment(tab.key as any)}
                className={`px-3 py-1.5 rounded-full transition-all text-[11px] ${
                  isActive
                    ? 'bg-brand-vermillion text-white font-bold shadow-xs'
                    : 'bg-night-raise text-night-mist hover:bg-night-raise border border-[#2f5540]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Interactive Radar Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
        {/* Left / Center: Interactive SVG Constellation Canvas */}
        <div className="lg:col-span-8 relative p-6 sm:p-10 flex items-center justify-center bg-gradient-to-b from-[#081410] to-[#0e1f16] overflow-hidden border-b lg:border-b-0 lg:border-r border-night-line">
          {/* Subtle Star & Coordinate Grid Background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:24px_24px]" />

          <svg
            viewBox="0 0 880 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full max-h-[460px] select-none"
          >
            <defs>
              <linearGradient id="gpSpine" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#cf4322" />
                <stop offset="50%" stopColor="#8ff0c6" />
                <stop offset="100%" stopColor="#34d399" />
              </linearGradient>

              <radialGradient id="nodeActiveGlow">
                <stop offset="0%" stopColor="#cf4322" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#081410" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Radar Orbital Circles */}
            <circle cx="280" cy="200" r="140" stroke="rgba(52, 211, 153, 0.07)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="600" cy="200" r="140" stroke="rgba(52, 211, 153, 0.07)" strokeWidth="1" strokeDasharray="4 6" />
            <circle cx="440" cy="200" r="230" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />

            {/* Primary Bridge between General Partners */}
            <line
              x1="280"
              y1="200"
              x2="600"
              y2="200"
              stroke="url(#gpSpine)"
              strokeWidth="2.5"
              strokeDasharray="6 4"
            />

            {/* Spokes connecting GPs to Team Members */}
            {nodes.slice(2).map((n, i) => {
              const connectToGP = n.x < 440 ? nodes[0] : nodes[1];
              const isConnectActive = activeMember.id === n.member.id || activeMember.id === connectToGP.member.id;
              return (
                <line
                  key={i}
                  x1={connectToGP.x}
                  y1={connectToGP.y}
                  x2={n.x}
                  y2={n.y}
                  stroke={isConnectActive ? "rgba(207, 67, 34, 0.5)" : "rgba(52, 211, 153, 0.12)"}
                  strokeWidth={isConnectActive ? 1.8 : 1}
                  strokeDasharray={isConnectActive ? "none" : "3 4"}
                />
              );
            })}

            {/* Satellite Portfolio Links */}
            {portfolioSatellites.map((sat, i) => {
              const gp = sat.connectedToGP === 0 ? nodes[0] : nodes[1];
              return (
                <g key={i} opacity="0.6">
                  <line
                    x1={gp.x}
                    y1={gp.y}
                    x2={sat.x}
                    y2={sat.y}
                    stroke="#34d399"
                    strokeWidth="0.8"
                    strokeDasharray="2 3"
                  />
                  <rect
                    x={sat.x - 35}
                    y={sat.y - 10}
                    width="70"
                    height="18"
                    rx="4"
                    fill="#16301f"
                    stroke="#2f5540"
                    strokeWidth="0.8"
                  />
                  <text
                    x={sat.x}
                    y={sat.y + 2.5}
                    fill="#9fc4b0"
                    fontSize="7.5"
                    fontFamily="monospace"
                    textAnchor="middle"
                    fontWeight="600"
                  >
                    ★ {sat.name}
                  </text>
                </g>
              );
            })}

            {/* Team Nodes */}
            {filteredNodes.map((node) => {
              const isSelected = activeMember.id === node.member.id;
              const { member, x, y, isGP } = node;

              return (
                <g
                  key={member.id}
                  className="cursor-pointer transition-all duration-200 group"
                  onClick={() => setActiveMember(member)}
                  onMouseEnter={() => setActiveMember(member)}
                  transform={`translate(${x}, ${y})`}
                >
                  {/* Glowing halo if selected */}
                  {isSelected && (
                    <circle
                      r={isGP ? 38 : 26}
                      fill="url(#nodeActiveGlow)"
                      className="animate-pulse"
                    />
                  )}

                  {/* Outer ring */}
                  <circle
                    r={isGP ? 24 : 15}
                    fill={isSelected ? (isGP ? "#cf4322" : "#34d399") : "#0e1f16"}
                    stroke={isSelected ? "#ffffff" : isGP ? "#cf4322" : "#2f5540"}
                    strokeWidth={isSelected ? 2.5 : isGP ? 2 : 1.2}
                    className="transition-colors duration-200"
                  />

                  {/* Center dot */}
                  <circle
                    r={isGP ? 7 : 4}
                    fill={isSelected ? "#ffffff" : isGP ? "#8ff0c6" : "#9fc4b0"}
                  />

                  {/* Node Label */}
                  <text
                    x="0"
                    y={isGP ? 40 : 28}
                    fill={isSelected ? "#ffffff" : "#d0e6dc"}
                    fontSize={isGP ? "13" : "10.5"}
                    fontWeight={isGP ? "700" : "600"}
                    textAnchor="middle"
                    fontFamily={isGP ? "serif" : "sans-serif"}
                  >
                    {member.name}
                  </text>

                  <text
                    x="0"
                    y={isGP ? 54 : 40}
                    fill={isSelected ? "#8ff0c6" : "#9fc4b0"}
                    fontSize={isGP ? "9.5" : "8"}
                    fontWeight="700"
                    textAnchor="middle"
                    fontFamily="monospace"
                    letterSpacing="0.05em"
                  >
                    {member.role.toUpperCase()}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Mobile Touch-Friendly Team Selector Strip */}
        <div className="lg:hidden p-4 border-b border-night-line bg-[#0e1f16] overflow-x-auto no-scrollbar flex items-center gap-2.5">
          {filteredNodes.map((n) => {
            const isSelected = activeMember.id === n.member.id;
            return (
              <button
                key={n.member.id}
                type="button"
                onClick={() => setActiveMember(n.member)}
                className={`shrink-0 flex items-center gap-2.5 px-3 py-2 rounded-xl border transition-all text-left ${
                  isSelected
                    ? 'bg-brand-vermillion/25 border-brand-vermillion text-white shadow-sm ring-1 ring-brand-vermillion'
                    : 'bg-[#0e1f16] border-[#2f5540] text-night-mist hover:bg-[#1f3d2b]'
                }`}
              >
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-[#2f5540] bg-night">
                  {n.member.photo ? (
                    <Image src={n.member.photo} alt={n.member.name} fill sizes="32px" className="object-cover object-top" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center font-serif text-xs font-bold text-white">
                      {n.member.name.split(' ').map((p) => p[0]).join('')}
                    </div>
                  )}
                </div>
                <div className="min-w-0 pr-1">
                  <span className="block font-serif text-xs font-bold text-white leading-tight truncate">
                    {n.member.name}
                  </span>
                  <span className="block font-mono text-[9px] text-[#9fc4b0] truncate">
                    {n.member.role}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Column: Live Interactive Hologram Dossier Card */}
        <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between bg-night-panel/95">
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-night-line mb-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-vermillion animate-ping" />
                <span className="font-mono text-[10px] tracking-widest text-brand-vermillion uppercase font-bold">
                  {activeMember.department.toUpperCase()} DOSSIER
                </span>
              </div>

              <span className="font-mono text-[11px] text-night-mist flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-green" />
                <span>{activeMember.location}</span>
              </span>
            </div>

            {/* Member Photo & Bio Header */}
            <div className="flex items-start gap-4 mb-5">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#2f5540] bg-night shrink-0 shadow-md relative">
                {activeMember.photo ? (
                  <Image
                    src={activeMember.photo}
                    alt={activeMember.name}
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-serif text-2xl font-bold text-night-mist">
                    {activeMember.name.split(' ').map(n => n[0]).join('')}
                  </div>
                )}
                <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/80 font-mono text-[8px] text-[#34d399] uppercase font-bold">
                  {activeMember.type.toUpperCase()}
                </div>
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-white leading-tight">
                  {activeMember.name}
                </h4>
                <p className="font-mono text-xs text-night-mist mt-0.5 font-medium">
                  {activeMember.role}
                </p>
                <p className="font-sans text-xs text-white/75 mt-2 line-clamp-3 leading-relaxed">
                  {activeMember.shortBio || activeMember.bio}
                </p>
              </div>
            </div>

            {/* Focus Expertise Tags */}
            {activeMember.focus && (
              <div className="mb-5 p-3.5 rounded-xl bg-night-panel border border-night-line-strong">
                <span className="font-mono text-[10px] uppercase tracking-wider text-night-mist font-bold block mb-2 flex items-center gap-1.5">
                  <Zap className="w-3 h-3 text-brand-vermillion" />
                  <span>Domain Superpowers & Focus</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMember.focus.map((f) => (
                    <span
                      key={f}
                      className="px-2.5 py-1 rounded-md bg-night-raise border border-[#2f5540] font-mono text-[10px] text-white font-medium"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Signature Bets if GP */}
            {activeMember.signatureBets && (
              <div className="mb-5 p-3.5 rounded-xl bg-night-panel border border-night-line-strong">
                <span className="font-mono text-[10px] uppercase tracking-wider text-night-mist font-bold block mb-2 flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-brand-green" />
                  <span>Signature Early Bets</span>
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeMember.signatureBets.map((bet) => (
                    <span
                      key={bet}
                      className="px-2.5 py-1 rounded-md bg-brand-vermillion/20 border border-brand-vermillion/40 font-serif text-xs text-white font-bold"
                    >
                      ★ {bet}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Direct LinkedIn Profile Link */}
          <div className="pt-4 border-t border-night-line flex items-center justify-between">
            <span className="font-mono text-[10px] text-white/50 uppercase">
              Official 8i Verification
            </span>

            {activeMember.linkedin && (
              <a
                href={activeMember.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-green text-bg font-mono text-xs font-bold hover:bg-white transition-colors shadow-xs"
              >
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
