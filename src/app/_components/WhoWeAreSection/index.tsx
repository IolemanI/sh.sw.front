'use client';
import { Button, Container, Typography } from '@mui/material';

export default function WhoWeAreSection() {
  return (
    <section style={{ padding: '50px 0' }}>
      <Typography variant="h4" component="h2" mb={10} textAlign="center">Who we are</Typography>

      <Container maxWidth="md">
        <Typography variant="h6" component="p" fontWeight={400} mb={1}>
          Embark on a transformative journey with us as we design and bring to life your unique products,
          revolutionizing your business with innovative digital strategies and solutions.
        </Typography>
        <Typography variant="h6" component="p" fontWeight={400} mb={1}>
          Shield&Sword is a premier Software Development and Testing company based in the United Kingdom.
        </Typography>
        <Typography variant="h6" component="p" fontWeight={400}>
          Our commitment to continuous learning drives talent development through active technical communities and
          mentorship. Experience the impact of our Agile, bureaucracy-free approach and discover the success driven by
          our culture and values.
        </Typography>
        <Button
          onClick={() => null}
          sx={{ my: 2, height: 54, display: 'block' }}
          variant="contained"
        >
          Contact us
        </Button>
      </Container>
    </section>
  );
}