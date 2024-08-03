'use client';
import { Box, Container, Stack, Typography } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import TechCard from '@/app/_components/TechStackSection/_components/TechCard';
import {
  backTechStack,
  dbTechStack,
  frontTechStack,
  infrastructureTechStack,
  mobileTechStack,
} from '@/app/_components/TechStackSection/data';

export default function TechStackSection() {
  return (
    <section style={{ padding: '50px 0' }}>
      <Typography variant="h4" component="h2" mb={10} textAlign="center">Tech stack</Typography>

      <Container maxWidth="md">
        <Carousel next={() => null} prev={() => null}>
          <Box>
            <Typography variant="h5" fontWeight="500" textAlign="center" mb={2}>Frontend Tech</Typography>
            <Stack direction="row" spacing={4} justifyContent="center">
              {frontTechStack.map(({ title, icon, width }, i) => (
                <TechCard key={i} title={title} icon={icon} width={width} />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="500" textAlign="center" mb={2}>Backend Tech</Typography>
            <Stack direction="row" spacing={4} justifyContent="center">
              {backTechStack.map(({ title, icon, width }, i) => (
                <TechCard key={i} title={title} icon={icon} width={width} />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="500" textAlign="center" mb={2}>Mobile Tech</Typography>
            <Stack direction="row" spacing={4} justifyContent="center">
              {mobileTechStack.map(({ title, icon }, i) => (
                <TechCard key={i} title={title} icon={icon} />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="500" textAlign="center" mb={2}>Infrastructure</Typography>
            <Stack direction="row" spacing={4} justifyContent="center">
              {infrastructureTechStack.map(({ title, icon }, i) => (
                <TechCard key={i} title={title} icon={icon} />
              ))}
            </Stack>
          </Box>
          <Box>
            <Typography variant="h5" fontWeight="500" textAlign="center" mb={2}>Databases</Typography>
            <Stack direction="row" spacing={4} justifyContent="center">
              {dbTechStack.map(({ title, icon, width }, i) => (
                <TechCard key={i} title={title} icon={icon} width={width} />
              ))}
            </Stack>
          </Box>
        </Carousel>
      </Container>
    </section>
  );
}
