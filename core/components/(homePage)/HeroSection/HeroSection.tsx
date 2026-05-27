'use client';

import { Embla } from '@/core/components';
import { useHeroContent } from '@/core/hooks/useHeroContent';
import { HeroSlide } from './HeroSlide';
import { EmblaControls } from '../../common/(embla)/EmblaControls';

export const HeroSection = () => {
  const { data: heroSlides, isLoading, isError } = useHeroContent();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !heroSlides || heroSlides.length === 0) {
    return null;
  }

  return (
    <section className="w-full max-w-[1532px] mx-auto">
      <Embla
        controls={<EmblaControls variant="basic" className="hidden md:flex" />}
        pagination={true}
      >
        {heroSlides.map((slide) => (
          <HeroSlide key={slide.id} slide={slide} />
        ))}
      </Embla>
    </section>
  );
};
