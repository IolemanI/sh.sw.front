import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TechCardProps } from '@/app/_components/TechStackSection/_components/TechCard/types';

export default function TechCard({ title, icon, width }: TechCardProps) {
  return (
    <Card
      elevation={0}
      variant="outlined"
      sx={(theme) => ({
        width: 120,
        minWidth: 120,
        position: 'relative',
        height: 'min-content',
        p: 1,
      })}
    >
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        filter: 'grayscale(1) brightness(58%) contrast(7.5) contrast(0.8)',
        transition: 'filter 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        '&:hover': { filter: 'grayscale(0)' },
      }}>
        <CardMedia
          component="img"
          sx={{ width: width || 60, height: 60, objectFit: 'contain' }}
          image={icon}
          alt={title}
        />
        <Typography component="span" variant="body1" gutterBottom mt={1}>
          {title}
        </Typography>
      </Box>
    </Card>
  );
}
