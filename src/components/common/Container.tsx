import type { ComponentPropsWithoutRef } from 'react';

interface ContainerProps extends ComponentPropsWithoutRef<'div'> {
  size?: 'default' | 'wide';
}

export function Container({ className = '', size = 'default', ...props }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 sm:px-8 lg:px-10 ${
        size === 'wide' ? 'max-w-[1440px]' : 'max-w-[1240px]'
      } ${className}`}
      {...props}
    />
  );
}
