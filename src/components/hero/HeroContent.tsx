import { m } from 'framer-motion';
import { GlowButton } from '../common/GlowButton';
import { fadeUp, staggerContainer } from '../../utils/motion';

const stats = [
  { value: '3+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Delivered' },
  { value: '4', label: 'Companies' },
  { value: '∞', label: 'Always Learning' },
];

export function HeroContent() {
  return (
    <m.div
      className="relative z-20 flex flex-col justify-center pt-28 lg:pt-32"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <m.p variants={fadeUp} className="eyebrow">
        Hey, I&apos;m
      </m.p>
      <div className="mt-5 overflow-hidden">
        <m.h1
          id="hero-heading"
          variants={fadeUp}
          className="text-[clamp(3.65rem,9vw,8.25rem)] font-black uppercase leading-[0.78] tracking-[-0.072em] text-primary"
        >
          Aseel
          <span className="mt-4 block whitespace-nowrap text-[clamp(2.1rem,4.3vw,4rem)] leading-[0.9] tracking-[-0.055em] gradient-text">
            Hussain Al-Ali
          </span>
        </m.h1>
      </div>
      <m.p variants={fadeUp} className="mt-7 text-xl font-semibold text-primary sm:text-2xl">
        Frontend Engineer
      </m.p>
      <m.p
        variants={fadeUp}
        className="mt-5 max-w-xl text-lg leading-8 text-primary/90 sm:text-2xl sm:leading-9"
      >
        Transforming complex ideas into{' '}
        <span className="text-cyan">high-performance web experiences.</span>
      </m.p>
      <m.p variants={fadeUp} className="mt-4 max-w-lg text-base leading-7 text-secondary">
        3+ years of crafting scalable frontend architectures with React, Next.js &amp; TypeScript.
      </m.p>
      <m.div
        variants={fadeUp}
        className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center"
      >
        <GlowButton href="#projects">View My Work</GlowButton>
        <GlowButton href="/aseel-al-ali-cv.pdf" download variant="secondary" icon="download">
          Download CV
        </GlowButton>
      </m.div>

      <m.dl
        variants={fadeUp}
        className="mt-9 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6 sm:grid-cols-4"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="relative sm:not-last:after:absolute sm:not-last:after:-right-3 sm:not-last:after:top-0 sm:not-last:after:h-full sm:not-last:after:w-px sm:not-last:after:bg-border"
          >
            <dt className="text-xs leading-5 text-secondary">{stat.label}</dt>
            <dd className="order-first mb-1 text-2xl font-bold tracking-tight text-primary">
              {stat.value}
            </dd>
          </div>
        ))}
      </m.dl>
    </m.div>
  );
}
