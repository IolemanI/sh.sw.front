import { Container } from '@mui/material';
import {
  ContactUsSection,
  HeroSection,
  StatisticsWidget,
  TechStackSection,
  WhatWeDoSection,
  WhoWeAreSection
} from '@/app/_components/';

export default function Home() {
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
