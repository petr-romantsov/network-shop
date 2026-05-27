'use client';

import { useQuery } from '@tanstack/react-query';

import { fetchHeroContent } from '../api/fetchHeroContent';

export const useHeroContent = () => {
  return useQuery({
    queryKey: ['heroContent'],
    queryFn: fetchHeroContent,
  });
};
