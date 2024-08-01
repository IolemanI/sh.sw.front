import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { TechCardProps } from '@/app/_components/TechStackSection/_components/TechCard/types';

export default function TechCard({ title, icon, width }: TechCardProps) {
  return (
    <Card sx={{ width: 180, display: 'flex', flexDirection: 'column', alignItems: 'center', height: 'min-content', p: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: width || 80, minHeight: 60, objectFit: 'contain' }}
        image={icon}
        alt={title}
      />
      <Box sx={{ flex: '1 0 auto', pt: 2 }}>
        <Typography component="span" variant="h5">
          {title}
        </Typography>
      </Box>
    </Card>
  );
}
