import { m, useTransform } from 'framer-motion';
import heroImage from '../../assets/images/aseel-hero.webp';
import { usePointerMotion } from '../../hooks/usePointerMotion';
import { FloatingCodeWindow } from './FloatingCodeWindow';
import { FloatingTechBadge } from './FloatingTechBadge';

export function HeroVisual() {
  const { x, y } = usePointerMotion();
  const portraitX = useTransform(x, (value) => value * 8);
  const portraitY = useTransform(y, (value) => value * 6);
  const portraitRotateY = useTransform(x, (value) => value * 1.8);
  const portraitRotateX = useTransform(y, (value) => value * -1.2);

  return (
    <m.div
      className="hero-visual relative z-10 mx-auto mt-8 h-[470px] w-full max-w-[650px] sm:h-[570px] lg:mt-16 lg:h-[min(650px,76vh)]"
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.85, delay: 0.48 }}
      aria-label="Portrait of Aseel Hussain Al-Ali in a layered developer workspace composition"
    >
      <div className="absolute inset-[10%_8%_4%_12%] rounded-[3rem] bg-gradient-to-br from-cyan/15 via-blue/5 to-violet/20 blur-3xl" />
      <div className="absolute inset-x-[8%] bottom-[4%] h-[70%] rounded-[2.5rem] border border-border bg-surface/35 shadow-[0_40px_120px_rgb(0_0_0/0.65)] backdrop-blur-sm" />
      <div className="absolute inset-x-[15%] top-[9%] h-px bg-gradient-to-r from-transparent via-cyan/70 to-transparent shadow-[0_0_20px_rgb(var(--cyan)/0.8)]" />

      <m.div
        className="absolute inset-x-[10%] bottom-[4%] z-20 h-[84%] overflow-hidden rounded-[2.2rem] border border-border bg-background shadow-2xl sm:inset-x-[9%]"
        style={{ x: portraitX, y: portraitY, rotateY: portraitRotateY, rotateX: portraitRotateX }}
      >
        <img
          src={heroImage}
          alt="Aseel Hussain Al-Ali wearing a black shirt and sunglasses"
          className="h-full w-full object-cover object-[50%_30%]"
          width="1024"
          height="1400"
          fetchPriority="high"
        />
        <div className="portrait-overlay absolute inset-0" aria-hidden="true" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-background via-background/65 to-transparent p-6 pt-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan">Based in</p>
            <p className="mt-1 text-sm font-medium text-primary">Jenin, Palestine</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-2 text-xs text-primary backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
            </span>
            Open to work
          </div>
        </div>
      </m.div>

      <FloatingCodeWindow x={x} y={y} />
      <FloatingTechBadge
        label="React"
        mark="⚛"
        className="left-[2%] top-[46%]"
        x={x}
        y={y}
        depth={-16}
        delay={0.86}
      />
      <FloatingTechBadge
        label="TypeScript"
        mark="TS"
        className="right-[1%] top-[32%]"
        x={x}
        y={y}
        depth={16}
        delay={0.98}
      />
      <FloatingTechBadge
        label="Next.js"
        mark="N"
        className="right-[4%] bottom-[8%]"
        x={x}
        y={y}
        depth={14}
        delay={1.08}
      />
    </m.div>
  );
}
