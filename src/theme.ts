'use client';
import { Lora } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const font = Lora({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#0063db',
    },
    secondary: {
      main: '#d90000',
    },
  },
  typography: {
    fontFamily: font.style.fontFamily,
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        color: 'default'
      },
    },
  },
});

export default theme;
