'use client';
import { Box, Container, Grid, Link as MuiLink, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Footer() {
  return (
    <Box component="section" sx={{ pt: '100px', pb: '50px' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" mb={1}>Contact Us</Typography>
                <Typography variant="body1" gutterBottom>info@shieldsword.com</Typography>
              </Box>

              <Box>
                <Typography variant="h6" mb={1}>Headquarters</Typography>
                <Typography variant="body1" gutterBottom>
                  Kilmarnock Farm House, Charlwood Road, Ifield, Crawley, West
                  Sussex, England, RH11 0JY
                </Typography>
              </Box>

              <Box>
                <Typography variant="h6" mb={1}>Development Center</Typography>
                <Typography variant="body1" gutterBottom>17 600-richchia St., Vinnytsia, Ukraine</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h6" mb={2}>Navigation</Typography>

            <Stack>
              <MuiLink href="#who-we-are" color="inherit" underline="hover">
                Who We Are
              </MuiLink>
              <MuiLink href="#what-we-do" color="inherit" underline="hover">
                What We Do
              </MuiLink>
              <MuiLink href="#tech-stack" color="inherit" underline="hover">
                Tech Stack
              </MuiLink>
              <MuiLink href="#contact-us" color="inherit" underline="hover">
                Get In Touch
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={4} display="flex" flexDirection="column">
            <Stack spacing={4}>
              <Box>
                <Typography variant="h6" mb={1}>Career</Typography>
                <Typography variant="body1">Open positions</Typography>
              </Box>

              <Link href="#">
                <Typography variant="h6" gutterBottom>Privacy Policy</Typography>
              </Link>

              <Box>
                <Typography variant="caption" component="p">© Copyright 2024 Shield&Sword LLC.</Typography>
                <Typography variant="caption">All rights reserved.</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
