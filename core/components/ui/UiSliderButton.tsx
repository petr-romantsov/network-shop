import { cva, type VariantProps } from 'class-variance-authority';

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
  'size-[50px] flex items-center justify-center bg-transparent cursor-pointer color-black',
  {
    variants: {
      variant: {
        basic:
          'border-none hover:scale-[1.2] transition-transform ease-linear duration-300',
        bordered:
          'border border-solid border-black rounded-sm hover:bg-black hover:text-white transition-colors ease-linear duration-300',
      },
    },
    defaultVariants: {
      variant: 'basic',
    },
  }
);

type UiSliderButtonProps = BaseProps & React.HTMLAttributes<HTMLButtonElement>;

export const UiSliderButton = ({
  direction,
  variant,
  onClick,
  ...props
}: UiSliderButtonProps) => {
  return (
    <button
      className={uiSliderButtonVariants({ variant })}
      {...props}
      onClick={onClick}
    >
      {direction && icons[direction]}
    </button>
  );
};
