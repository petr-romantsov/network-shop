import Image from 'next/image';

import { type HeroSlideContent } from '@/core/types/api';
import { cn } from '@/core/utils/helpers';
import { UiButton } from '../../ui/UiButton';

type HeroSlideProps = {
  slide: HeroSlideContent;
  className?: string;
};

export const HeroSlide = ({ slide, className }: HeroSlideProps) => {
  return (
    <div
      className={cn(
        'embla__slide relative flex  min-w-0 h-103 md:h-140 grow-0 shrink-0 basis-full',
        slide.image ? 'md:px-0' : 'md:px-24',
        className,
        {
          'bg-salmon': !slide.image,
          'items-center justify-start': slide.position === 'left',
          'items-center justify-end': slide.position === 'right',
        }
      )}
    >
      {slide.image && (
        <Image
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover absolute inset-0"
          fill
        />
      )}
      <div
        className={cn(
          'flex flex-col gap-2 md:gap-4 pt-4 md:pt-0 w-full min-h-35 relative z-1 bg-white/80 md:bg-transparent items-center justify-start ',
          slide.image
            ? 'mx-auto mt-auto md:mt-70 max-w-225'
            : 'mt-auto md:m-0 md:max-w-[525px] ',
          {
            'md:items-start': slide.position === 'left',
            'md:items-end': slide.position === 'right',
          }
        )}
      >
        <h2
          className={cn(
            'text-[28px] md:text-5xl text-center font-bold leading-[1.1] uppercase',
            slide.image ? 'text-black md:text-white' : 'text-black',
            {
              'md:text-start': slide.position === 'left',
              'md:text-end': slide.position === 'right',
              'md:text-center': slide.position === 'center',
            }
          )}
        >
          {slide.title}
        </h2>
        <p className="text-xs font-medium text-black uppercase">
          {slide.description}
        </p>
        <UiButton
          text="Смотреть"
          variant="secondary"
          className="hidden md:block"
          buttonType="navLink"
          href="/collections"
        />
      </div>
    </div>
  );
};
