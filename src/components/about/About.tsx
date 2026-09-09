import { Check } from 'lucide-react';
import { m } from 'framer-motion';
import aboutImage from '../../assets/images/aseel-about.webp';
import { Container } from '../common/Container';
import { Reveal } from '../common/Reveal';
import { TerminalCard } from './TerminalCard';

const qualities = ['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'];

export function About() {
  return (
    <section
      id="about"
      className="section-shell deferred-section relative overflow-hidden"
      aria-labelledby="about-title"
    >
      <div className="section-orb -right-48 top-1/3 bg-violet/10" aria-hidden="true" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8 xl:gap-10">
          <m.figure
            className="relative mx-auto w-full max-w-md lg:col-span-4 lg:mx-0 xl:col-span-3"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-3 rounded-[2.3rem] bg-gradient-to-br from-cyan/20 to-violet/20 blur-xl" />
            <div className="relative aspect-[0.78] overflow-hidden rounded-[2rem] border border-border bg-surface">
              <img
                src={aboutImage}
                alt="Aseel Hussain Al-Ali in a formal black suit"
                className="h-full w-full object-cover object-[45%_30%]"
                width="900"
                height="1150"
                loading="lazy"
                decoding="async"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-background/65 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </m.figure>

          <Reveal className="lg:col-span-8 xl:col-span-4">
            <p className="eyebrow">About Me</p>
            <h2 id="about-title" className="about-title mt-4">
              Clean code.
              <br />
              Thoughtful design.
              <br />
              <span className="gradient-text">Better experiences.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-7 text-secondary">
              <p>
                I&apos;m Aseel, a Frontend Engineer focused on turning ideas into real, user-focused
                products.
              </p>
              <p>
                I care about clean code, scalable frontend architecture, thoughtful design,
                performance, and solving meaningful problems.
              </p>
            </div>
            <ul className="mt-7 grid grid-cols-2 gap-x-4 gap-y-3">
              {qualities.map((quality) => (
                <li key={quality} className="flex items-center gap-2 text-sm text-primary">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                    <Check className="h-3 w-3" />
                  </span>
                  {quality}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-12 xl:col-span-5" delay={0.12}>
            <TerminalCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
