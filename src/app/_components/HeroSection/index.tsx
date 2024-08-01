'use client';
import { Box, Typography } from '@mui/material';

export default function HeroSection() {
  return (
    <section style={{ marginTop: 50, paddingBottom: 60 }}>
      <Box
        sx={(theme) => ({
          display: 'flex',
          height: 540,
          backgroundColor: theme.palette.primary.main,
          background: 'linear-gradient(135deg, hsla(211, 100%, 46%, 1) 0%, hsla(222, 85%, 40%, 1) 100%)',
          borderRadius: theme.shape.borderRadius,
          padding: 'max(40px,min(8vw,120px)) max(24px,min(8vw,200px)) max(40px,min(8vw,120px)) max(24px,min(8vw,110px))',
        })}
        justifyContent="center"
        flexDirection="column"
        alignItems="start"
      >
        <Typography variant="h4" fontWeight="500" gutterBottom color="primary.contrastText">
          Transforming Ideas into Innovative Solutions <br /> with Shield&Sword
        </Typography>
        <Typography variant="h6" fontWeight="500" gutterBottom color="primary.contrastText">
          Championing Innovation, Empowering Progress - Building Tomorrow's Technology Solutions Today, For a Connected and Sustainable World.
        </Typography>
      </Box>
    </section>
  );
}
