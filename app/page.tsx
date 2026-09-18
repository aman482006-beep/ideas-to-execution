import { HomeHero } from '@/components/home/HomeHero';
import { FounderCarousel } from '@/components/home/FounderCarousel';
import { Why8i } from '@/components/home/Why8i';
import { CompanyMarquee } from '@/components/home/CompanyMarquee';
import { TeamTeaser } from '@/components/home/TeamTeaser';
import { OrigamiTeaser } from '@/components/home/OrigamiTeaser';
import { HomeFAQ } from '@/components/home/HomeFAQ';
import { FinalHomeCTA } from '@/components/home/FinalHomeCTA';

export default function HomePage() {
  return (
    <div className="w-full relative">
      {/* 01 HERO */}
      <HomeHero />

      {/* 02 FOUNDER PROOF */}
      <FounderCarousel />

      {/* 03 EARLY BELIEF ("Why 8i") */}
      <Why8i />

      {/* 04 THE PORTFOLIO */}
      <CompanyMarquee />

      {/* 05 TEAM */}
      <TeamTeaser />

      {/* 06 ORIGAMI */}
      <OrigamiTeaser />

      {/* 07 FAQ */}
      <HomeFAQ />

      {/* 08 FINAL HOME CTA */}
      <FinalHomeCTA />
    </div>
  );
}
