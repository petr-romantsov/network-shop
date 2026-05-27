'use client';

import { createContext, useContext } from 'react';

import { EmblaCarouselType } from 'embla-carousel';

type EmblaContextValue = {
  emblaApi: EmblaCarouselType | undefined;
  scrollPrev: () => void;
  scrollNext: () => void;
};

export const EmblaContext = createContext<EmblaContextValue | null>(null);

export const useEmblaContext = () => {
  const context = useContext(EmblaContext);
  if (!context)
    throw new Error('useEmblaContext must be used within an EmblaProvider');

  return context;
};
