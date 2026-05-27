'use client';

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

import { cn } from '@/core/utils/helpers';
import { EmblaContext } from './EmblaContext';

type EmblaProps = {
  className?: string;
  controls?: React.ReactNode;
  pagination?: boolean;
};

export const Embla = ({
  children,
  className,
  controls,
  pagination = false,
}: PropsWithChildren<EmblaProps>) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [selectedSnap, setSelectedSnap] = useState<number>(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const setupSnaps = (emblaApi: EmblaCarouselType) => {
      setScrollSnaps(emblaApi.scrollSnapList());
    };

    const setActiveSnap = (emblaApi: EmblaCarouselType) => {
      setSelectedSnap(emblaApi.selectedScrollSnap());
    };

    setupSnaps(emblaApi);
    setActiveSnap(emblaApi);

    emblaApi.on('reInit', setupSnaps);
    emblaApi.on('reInit', setActiveSnap);
    emblaApi.on('select', setActiveSnap);

    return () => {
      emblaApi.off('reInit', setupSnaps);
      emblaApi.off('reInit', setActiveSnap);
      emblaApi.off('select', setActiveSnap);
    };
  }, [emblaApi]);

  const contextValue = useMemo(
    () => ({ emblaApi, scrollPrev, scrollNext }),
    [emblaApi, scrollPrev, scrollNext]
  );

  return (
    <EmblaContext.Provider value={contextValue}>
      <div className={cn('embla relative', className)}>
        <div className="embla__viewport overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex touch-pan-y touch-pinch-zoom">
            {children}
          </div>
        </div>
        {controls}
        {pagination && (
          <div className="embla__dots absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 w-10 flex gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                className={cn(
                  'embla__dot cursor-pointer w-2 h-2 bg-white rounded-full transition-colors duration-(--base-duration) shadow-[1px_1px_0_rgba(0,0,0,0.25)]',
                  selectedSnap === index ? 'bg-black' : 'bg-white'
                )}
                key={index}
                type="button"
                onClick={() => scrollTo(index)}
              ></button>
            ))}
          </div>
        )}
      </div>
    </EmblaContext.Provider>
  );
};
