import { UiSliderButton } from '@/core/components/ui';
import { cn } from '@/core/utils/helpers';
import { useEmblaContext } from './EmblaContext';

type EmblaControlsProps = {
  className?: string;
  variant?: 'basic' | 'bordered';
  color?: 'white' | 'black';
};

export const EmblaControls = ({
  className,
  variant,
  color = 'white',
}: EmblaControlsProps) => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useEmblaContext();

  return (
    <div
      className={cn(
        'justify-between absolute top-1/2 -translate-y-1/2 left-0 w-full hidden lg:flex pointer-events-none',
        className
      )}
    >
      <UiSliderButton
        direction="left"
        variant={variant}
        color={color}
        onClick={scrollPrev}
        className={cn('embla__prev pointer-events-auto', {
          'opacity-0 visibility-hidden': !canScrollPrev,
        })}
      />
      <UiSliderButton
        direction="right"
        variant={variant}
        color={color}
        onClick={scrollNext}
        className={cn('embla__next pointer-events-auto', {
          'opacity-0 visibility-hidden': !canScrollNext,
        })}
      />
    </div>
  );
};
