'use client';
import { Box, Container, Divider, Grid, Stack, Typography } from '@mui/material';

export default function StatisticsWidget() {
  return (
    <section style={{ marginTop: 50, paddingBottom: 60 }}>
      <Container maxWidth="md">
        <Grid
          container
          sx={(theme) => ({
            display: 'flex',
            height: 200,
            color: 'white',
            backgroundColor: theme.palette.primary.main,
            background: 'linear-gradient(90deg, hsla(213, 100%, 30%, 1) 20%, hsla(213, 100%, 50%, 1) 100%)',
            borderRadius: theme.shape.borderRadius,
            padding: 2,
          })}
        >
          <Grid item xs={4} display="flex" justifyContent="center" alignItems="center" p={2}>
            <Typography variant="h5" fontWeight={500} component="p">
              Delivering cutting-edge technology solutions for over two years
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Stack height="100%" direction="row" justifyContent="space-between">
              <Box width="100%" display="flex" flexDirection="column" p={2}>
                <Typography variant="h3" component="p" fontWeight={500}>100+</Typography>
                <Typography variant="subtitle1" component="p" fontWeight={400}>success stories in our portfolio</Typography>
              </Box>
              <Divider flexItem orientation="vertical" sx={{ width: 2, background: 'white' }}/>
              <Box width="100%" display="flex" flexDirection="column" p={2}>
                <Typography variant="h3" component="p" fontWeight={500}>10+</Typography>
                <Typography variant="subtitle1" component="p" fontWeight={400}>clients of 2+ years</Typography>
              </Box>
              <Divider flexItem orientation="vertical" sx={{ width: 2, background: 'white' }}/>
              <Box width="100%" display="flex" flexDirection="column" p={2}>
                <Typography variant="h3" component="p" fontWeight={500}>50+</Typography>
                <Typography variant="subtitle1" component="p" fontWeight={400}>team members</Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
