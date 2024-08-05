'use client';
import { Box, Container, Typography } from '@mui/material';
import { animate, motion, useMotionValue } from 'framer-motion';
import TechCard from '@/app/_components/TechStackSection/_components/TechCard';
import { techStack, } from '@/app/_components/TechStackSection/data';
import { useEffect, useState } from 'react';
import useMeasure from 'react-use-measure';

const FAST_DURATION = 25;
const SLOW_DURATION = 75;

export default function TechStackSection() {
  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: 'linear',
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);

  return (
    <Box component="section" sx={{ padding: '50px 0' }}>
      <Container maxWidth="md" sx={{ height: 180 }}>
        <Typography variant="h4" component="h2" mb={4} textAlign="start">Tech stack</Typography>

        <motion.div
          className="absolute left-0 flex gap-4"
          style={{ x: xTranslation }}
          ref={ref}
          onHoverStart={() => {
            setMustFinish(true);
            setDuration(SLOW_DURATION);
          }}
          onHoverEnd={() => {
            setMustFinish(true);
            setDuration(FAST_DURATION);
          }}
        >
          {[...techStack, ...techStack].map((item, idx) => (
            <TechCard key={idx} title={item.title} icon={item.icon} width={item.width}/>
          ))}
        </motion.div>
      </Container>
    </Box>
  );
}
