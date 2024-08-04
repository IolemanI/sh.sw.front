'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContactUsForm from '@/app/_components/ContactUsSection/_components/ContactUsForm';

export default function ContactUsSection() {
  return (
    <section style={{ padding: '50px 0' }}>
      <Container maxWidth="lg">
        <Box
          sx={(theme) => ({
            width: '100%',
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
          })}
        >
          <Grid container width="100%">
            <Grid item xs={6} sx={(theme) => ({
              backgroundColor: theme.palette.background.paper,
              p: 4,
            })}>
              <Typography variant="h4" component="h2" mb={4}>
                Let us know your software requirements:
              </Typography>

              <ContactUsForm />
            </Grid>
            <Grid item xs={6} sx={(theme) => ({
              backgroundColor: theme.palette.primary.main,
              background: 'linear-gradient(180deg, hsla(0, 100%, 65%, 1) 0%, hsla(213, 100%, 50%, 1) 100%)',
              p: 4,
              color: theme.palette.primary.contrastText,
            })}>
              <Typography variant="h4" component="h2">
                What happens after you get in touch?
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
