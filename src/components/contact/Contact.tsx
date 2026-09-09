import { Send } from 'lucide-react';
import { Container } from '../common/Container';
import { GlowButton } from '../common/GlowButton';
import { Reveal } from '../common/Reveal';
import { SocialLinks } from '../common/SocialLinks';

export function Contact() {
  return (
    <section
      id="contact"
      className="deferred-section relative overflow-hidden border-t border-border py-20 sm:py-24 lg:py-28"
      aria-labelledby="contact-title"
    >
      <div
        className="absolute left-1/2 top-1/2 h-[28rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan/5 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <Reveal className="relative mx-auto max-w-4xl text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-cyan/25 bg-cyan/10 text-cyan shadow-glow">
            <Send className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="eyebrow mt-7">Let&apos;s Connect</p>
          <h2
            id="contact-title"
            className="mt-5 text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.9] tracking-[-0.06em] text-primary"
          >
            Let&apos;s Build
            <br />
            Something <span className="gradient-text">Great.</span>
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-secondary sm:text-lg">
            I&apos;m currently open to new opportunities, collaborations, or just a friendly chat
            about tech, products, or ideas.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <GlowButton href="mailto:aseelalali81@gmail.com">Get in Touch</GlowButton>
            <SocialLinks />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
