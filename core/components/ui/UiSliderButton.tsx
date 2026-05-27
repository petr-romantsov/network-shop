import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/core/utils/helpers';
import { ArrowLeftIcon, ArrowRightIcon } from '@/public/assets/icons';

type Direction = 'left' | 'right';

const icons: Record<Direction, React.ReactNode> = {
  left: <ArrowLeftIcon />,
  right: <ArrowRightIcon />,
};

type BaseProps = VariantProps<typeof uiSliderButtonVariants> & {
  direction: Direction;
  onClick?: () => void;
};

const uiSliderButtonVariants = cva(
  'size-[50px] flex items-center justify-center bg-transparent cursor-pointer',
  {
    variants: {
      variant: {
        basic:
          'border-none hover:scale-[1.2] transition-transform ease-(--base-easing) duration-(--base-duration)',
        bordered:
          'border border-solid border-black rounded-sm hover:bg-black hover:text-white transition-colors ease-(--base-easing) duration-(--base-duration)',
      },
      color: {
        black: 'text-black',
        white: 'text-white',
      },
    },
    defaultVariants: {
      variant: 'basic',
      color: 'black',
    },
  }
);

type UiSliderButtonProps = BaseProps & React.HTMLAttributes<HTMLButtonElement>;

export const UiSliderButton = ({
  direction,
  variant,
  color,
  className,
  onClick,
  ...props
}: UiSliderButtonProps) => {
  return (
    <button
      {...props}
      className={cn(uiSliderButtonVariants({ variant, color }), className)}
      type="button"
      onClick={onClick}
    >
      {direction && icons[direction]}
    </button>
  );
};
