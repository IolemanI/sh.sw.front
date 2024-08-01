'use client';
import { Container, Typography } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import TechCard from '@/app/_components/TechStackSection/_components/TechCard';
import { techStack } from '@/app/_components/TechStackSection/data';

export default function TechStackSection() {
  return (
    <section style={{ padding: '50px 0' }}>
      <Typography variant="h4" component="h2" mb={10} textAlign="center">Tech stack</Typography>

      <Container maxWidth="sm">
        <Masonry columns={3} spacing={2}>
          {techStack.map(({ title, icon, width }) => (
            <TechCard title={title} icon={icon} width={width} />
          ))}
        </Masonry>
      </Container>
    </section>
  );
}
