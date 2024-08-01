import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px

export function useIsMobile() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return matches;
}