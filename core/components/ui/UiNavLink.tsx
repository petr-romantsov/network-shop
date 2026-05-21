import Link from 'next/link';

import { cn } from '@/core/utils/helpers';

type UiNavLinkProps = {
  href: string;
  text: string;
  className?: string;
};

export const UiNavLink = ({ href, text, className }: UiNavLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'text-sm font-medium text-black uppercase cursor-pointer hover:text-black/50 transition-colors ease-(--base-easing) duration-(--base-duration)',
        className
      )}
    >
      {text}
    </Link>
  );
};
