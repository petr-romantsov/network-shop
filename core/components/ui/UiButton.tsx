import Link from 'next/link';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/core/utils/helpers';

const uiButtonVariants = cva(
  'text-base/[100%] font-medium text-black p-4 rounded-sm cursor-pointer ',
  {
    variants: {
      variant: {
        primary:
          'bg-white border border-solid border-black hover:bg-black hover:text-white transition-colors ease-linear duration-(--base-duration)',
        secondary:
          'bg-white/50 border-none hover:bg-white/100 transition-colors ease-(--base-easing) duration-(--base-duration)',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);

type BaseProps = VariantProps<typeof uiButtonVariants> & {
  text: string;
  className?: string;
};

type ButtonProps = BaseProps & {
  buttonType?: 'button';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type NavLinkProps = BaseProps & {
  buttonType: 'navLink';
  href: string;
} & Omit<React.ComponentProps<typeof Link>, 'href' | 'className'>;

type LinkProps = BaseProps & {
  buttonType: 'link';
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type UiButtonProps = ButtonProps | NavLinkProps | LinkProps;

export const UiButton = (props: UiButtonProps) => {
  const { text, variant } = props;

  if (props.buttonType === 'link') {
    const { href, buttonType, className, ...linkProps } = props;
    return (
      <a
        href={href}
        {...linkProps}
        className={cn(uiButtonVariants({ variant }), className)}
      >
        {text}
      </a>
    );
  }

  if (props.buttonType === 'navLink') {
    const { href, buttonType, className, ...navLinkProps } = props;
    return (
      <Link
        href={href}
        {...navLinkProps}
        className={cn(uiButtonVariants({ variant }), className)}
      >
        {text}
      </Link>
    );
  }

  const { buttonType, onClick, className, ...buttonProps } = props;
  return (
    <button
      {...buttonProps}
      className={cn(uiButtonVariants({ variant }), className)}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
