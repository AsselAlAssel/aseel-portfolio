import { ArrowDown, ArrowRight } from 'lucide-react';
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react';

interface GlowButtonProps extends PropsWithChildren, AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary';
  icon?: 'arrow' | 'download' | 'none';
}

export function GlowButton({
  children,
  className = '',
  variant = 'primary',
  icon = 'arrow',
  ...props
}: GlowButtonProps) {
  const Icon = icon === 'download' ? ArrowDown : ArrowRight;
  return (
    <a
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-4 focus-visible:ring-offset-background ${
        variant === 'primary'
          ? 'glow-button text-primary'
          : 'text-secondary hover:bg-surface hover:text-primary'
      } ${className}`}
      {...props}
    >
      {children}
      {icon !== 'none' ? (
        <Icon
          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      ) : null}
    </a>
  );
}
