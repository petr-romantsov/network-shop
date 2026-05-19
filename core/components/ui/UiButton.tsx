import Link from 'next/link';

import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/core/utils/helpers';

const uiButtonVariants = cva(
  'text-base/[100%] font-medium color-black p-4 rounded-sm cursor-pointer ',
  {
    variants: {
      variant: {
        primary:
          'bg-white border border-solid border-black hover:bg-black hover:text-white transition-colors ease-linear duration-300',
        secondary:
          'bg-white/50 border-none hover:bg-white/100 transition-colors ease-linear duration-300',
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
  asLink?: false;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = BaseProps & {
  asLink: true;
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type UiButtonProps = ButtonProps | LinkProps;

export const UiButton = (props: UiButtonProps) => {
  const { text, variant } = props;

  if (props.asLink) {
    const { href, asLink, className, ...linkProps } = props;
    return (
      <Link
        href={href}
        className={cn(uiButtonVariants({ variant }), className)}
        {...linkProps}
      >
        {text}
      </Link>
    );
  }

  const { className, asLink, onClick, ...buttonProps } = props;
  return (
    <button
      className={cn(uiButtonVariants({ variant }), className)}
      {...buttonProps}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
