import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../common/Container';
import { HeroContent } from './HeroContent';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  const { scrollYProgress } = useScroll();
  const visualY = useTransform(scrollYProgress, [0, 0.18], [0, 70]);
  const visualOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0.55]);

  return (
    <section id="home" className="hero-section relative min-h-screen overflow-hidden pb-12 lg:pb-16" aria-labelledby="hero-heading">
      <div className="ambient ambient-cyan" />
      <div className="ambient ambient-violet" />
      <div className="cyber-grid absolute inset-0 opacity-35" />
      <Container size="wide" className="relative grid min-h-screen items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <HeroContent />
        </div>
        <motion.div style={{ y: visualY, opacity: visualOpacity }}>
          <HeroVisual />
        </motion.div>
      </Container>
      <motion.div
        className="absolute bottom-0 left-1/2 h-24 w-px origin-top bg-gradient-to-b from-cyan via-blue to-transparent"
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        aria-hidden="true"
      />
    </section>
  );
}
