import Link from 'next/link'
import Image from 'next/image'
import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import { pages } from '../../data';

export default function DesktopAppBar() {
  return (
    <AppBar position="sticky" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/" style={{ flexGrow: 1 }}>
            <Image
              src="/images/logo-no-background.svg"
              alt="Shield&Sword"
              width={80}
              height={28}
              style={{ width: 180 }}
              priority
            />
          </Link>

          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={() => null}
                sx={{ my: 2, display: 'block' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          <Link href="/#footer" style={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            <Button
              onClick={() => null}
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
