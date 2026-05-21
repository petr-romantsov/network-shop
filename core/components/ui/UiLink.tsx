import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/core/utils/helpers';

const UiLinkVariants = cva(
  'relative after:content-[""] after:block after:w-full after:h-px after:absolute after:bottom-[-2px] after:left-0 after:scale-x-100 after:origin-center hover:after:scale-x-0 after:transition-transform after:duration-(--base-duration) after:ease-(--base-easing)',
  {
    variants: {
      color: {
        white: 'text-white after:bg-white',
        black: 'text-black after:bg-black',
      },
    },
    defaultVariants: {
      color: 'black',
    },
  }
);

type BaseProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
} & VariantProps<typeof UiLinkVariants>;

type UiLinkProps = BaseProps & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const UiLink = ({
  href,
  children,
  color,
  className,
  ...props
}: UiLinkProps) => {
  return (
    <a
      href={href}
      className={cn(UiLinkVariants({ color }), className)}
      {...props}
    >
      {children}
    </a>
  );
};
