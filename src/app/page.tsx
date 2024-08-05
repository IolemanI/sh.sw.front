'use client';
import { Container, Typography } from '@mui/material';
import {
  ContactUsSection,
  HeroSection,
  StatisticsWidget,
  TechStackSection,
  WhatWeDoSection,
  WhoWeAreSection
} from '@/app/_components/';
import { useIsMobile } from '@/lib/hooks/breakpoints';

export default function Home() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <main>
        <Container maxWidth="sm">
          <Typography variant="h5" textAlign="center" mt={10}>Mobile version is in development!</Typography>
        </Container>
      </main>
    );
  }

  return (
    <main>
      <Container maxWidth="xl">
        <HeroSection/>
        <WhoWeAreSection/>
        <WhatWeDoSection/>
        <TechStackSection/>
        <StatisticsWidget/>
        <ContactUsSection/>
      </Container>
    </main>
  );
}
