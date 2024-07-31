'use client';
import { Aboreto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const aboreto = Aboreto({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  typography: {
    fontFamily: aboreto.style.fontFamily,
  },
});

export default theme;
