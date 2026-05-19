import Link from 'next/link';

import { cn } from '@/core/utils/helpers';

type UiLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const UiLink = ({ href, children, className }: UiLinkProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'relative after:content-[""] after:block after:w-full after:h-[1px] after:bg-white after:absolute after:bottom-[-2px] after:left-0 after:scale-x-100 after:origin-center hover:after:scale-x-0 after:transition-transform after:duration-300 after:ease-linear',
        className
      )}
    >
      {children}
    </Link>
  );
};
