'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import ContactUsForm from '@/app/_components/ContactUsSection/_components/ContactUsForm';

export default function ContactUsSection() {
  return (
    <section id="contact-us" style={{ padding: '50px 0' }}>
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
              <Typography variant="h4" component="h2" mb={4}>
                What happens after you get in touch?
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                1
              </Typography>
              <Typography variant="body1" component="p" mb={4}>
                Our expert will contact you within 12 hours to provide a consultancy and further support
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                2
              </Typography>
              <Typography variant="body1" component="p" mb={4}>
                We will clarify the requirements and set up an engagement process to make your journey smooth
              </Typography>

              <Typography variant="h5" component="h2" gutterBottom>
                3
              </Typography>
              <Typography variant="body1" component="p" mb={4}>
                Based on the info gathered and your business objectives, you’ll get a detailed project vision
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
