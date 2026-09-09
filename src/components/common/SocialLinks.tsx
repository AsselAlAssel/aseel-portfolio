import { Facebook, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { socials } from '../../data/socials';
import type { SocialLink } from '../../types/portfolio';

const icons: Record<SocialLink['icon'], typeof Github> = {
  github: Github,
  linkedin: Linkedin,
  facebook: Facebook,
  whatsapp: MessageCircle,
  email: Mail,
};

interface SocialLinksProps {
  compact?: boolean;
}

export function SocialLinks({ compact = false }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-3" aria-label="Social links">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        const external = social.url.startsWith('http');
        return (
          <a
            key={social.label}
            href={social.url}
            target={external ? '_blank' : undefined}
            rel={external ? 'noreferrer' : undefined}
            aria-label={social.label}
            className={`group inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-surface/60 text-secondary backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-cyan/50 hover:text-primary hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan ${
              compact ? 'h-11 w-11' : 'h-12 px-4'
            }`}
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {!compact ? <span className="text-sm font-medium">{social.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}
