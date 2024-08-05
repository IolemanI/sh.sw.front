import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Box, Button, Container, Link as MuiLink, Stack, Toolbar } from '@mui/material';
// import { pages } from '../../data';

export default function DesktopAppBar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/public" style={{ flexGrow: 1 }}>
            <Image
              src="/images/logo-no-background.svg"
              alt="Shield&Sword"
              width={80}
              height={28}
              style={{ width: 220 }}
              priority
            />
          </Link>

          <Stack sx={{ flexGrow: 1, justifyContent: 'center' }} direction="row" spacing={2}>
            <MuiLink href="#who-we-are" underline="hover" variant="button">
              Who We Are
            </MuiLink>
            <MuiLink href="#what-we-do" underline="hover" variant="button">
              What We Do
            </MuiLink>
            <MuiLink href="#tech-stack" underline="hover" variant="button">
              Tech Stack
            </MuiLink>
          </Stack>

          <Link href="#contact-us" style={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            <Button
              sx={{ my: 2, height: 54, display: 'block' }}
              variant="contained"
            >
              Get in touch
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
