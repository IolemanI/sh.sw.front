'use client';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Typography
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CodeIcon from '@mui/icons-material/Code';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import { design, rnd, softwareConsulting, softwareEngineering } from '@/app/_components/WhatWeDoSection/data';
import Link from 'next/link';

export default function WhatWeDoSection() {
  return (
    <section style={{ padding: '50px 0' }}>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Box sx={{ position: 'sticky', top: '100px' }}>
            <Typography variant="h4" fontWeight="bold">
              Select the service that aligns with your current project requirements.
            </Typography>

            <Link href="/#footer">
              <Button
                onClick={() => null}
                sx={{ my: 2, height: 54, display: 'block' }}
                variant="contained"
              >
                Get in touch
              </Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={6}>
          <Accordion sx={{ padding: '24px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="software-engineering-content"
              id="software-engineering-header"
              sx={{ alignItems: 'center' }}
            >
              <CodeIcon color="primary" sx={{ width: 30, height: 30, marginRight: 2 }} />
              <Typography variant="h5" fontWeight="bold">Software engineering</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {softwareEngineering.map((title) => (
                  <ListItem key={title}>
                    <Typography variant="h6" fontWeight="normal">{title}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ padding: '24px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="software-engineering-content"
              id="software-engineering-header"
              sx={{ alignItems: 'center' }}
            >
              <TimelineOutlinedIcon color="primary" sx={{ width: 30, height: 30, marginRight: 2 }} />
              <Typography variant="h5" fontWeight="bold">Research and development</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {rnd.map((title) => (
                  <ListItem key={title}>
                    <Typography variant="h6" fontWeight="normal">{title}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ padding: '24px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="software-engineering-content"
              id="software-engineering-header"
              sx={{ alignItems: 'center' }}
            >
              <DesignServicesOutlinedIcon color="primary" sx={{ width: 30, height: 30, marginRight: 2 }} />
              <Typography variant="h5" fontWeight="bold">Software Design</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {design.map((title) => (
                  <ListItem key={title}>
                    <Typography variant="h6" fontWeight="normal">{title}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

          <Accordion sx={{ padding: '24px' }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="software-engineering-content"
              id="software-engineering-header"
              sx={{ alignItems: 'center' }}
            >
              <SummarizeOutlinedIcon color="primary" sx={{ width: 30, height: 30, marginRight: 2 }} />
              <Typography variant="h5" fontWeight="bold">Software Consulting</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <List dense>
                {softwareConsulting.map((title) => (
                  <ListItem key={title}>
                    <Typography variant="h6" fontWeight="normal">{title}</Typography>
                  </ListItem>
                ))}
              </List>
            </AccordionDetails>
          </Accordion>

        </Grid>
      </Grid>
    </section>
  );
}
