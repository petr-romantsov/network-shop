'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchData } from '../api/fetchData';

const HERO_SLIDES_ENDPOINT = 'heroSlides';
const fetchHeroSlides = () => fetchData(HERO_SLIDES_ENDPOINT);

export const useHeroContent = () => {
  return useQuery({
    queryKey: ['heroContent'],
    queryFn: fetchHeroSlides,
  });
};
