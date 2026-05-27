import { UiSliderButton } from '@/core/components/ui';
import { cn } from '@/core/utils/helpers';
import { useEmblaContext } from './EmblaContext';

type EmblaControlsProps = {
  className?: string;
  variant?: 'basic' | 'bordered';
};

export const EmblaControls = ({ className, variant }: EmblaControlsProps) => {
  const { scrollPrev, scrollNext } = useEmblaContext();

  return (
    <div
      className={cn(
        'flex justify-between absolute top-1/2 -translate-y-1/2 left-0 w-full ',
        className
      )}
    >
      <UiSliderButton
        direction="left"
        variant={variant}
        color="white"
        onClick={scrollPrev}
        className="embla__prev"
      />
      <UiSliderButton
        direction="right"
        variant={variant}
        color="white"
        onClick={scrollNext}
        className="embla__next"
      />
    </div>
  );
};
