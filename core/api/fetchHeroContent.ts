import { API_BASE_URL } from '@/core/constants';
import { type HeroSlideContent } from '@/core/types/api';

const PATH = `${API_BASE_URL}/heroSlides`;

export const fetchHeroContent = async (): Promise<HeroSlideContent[]> => {
  const response = await fetch(PATH);

  if (!response.ok) {
    throw new Error('Failed to fetch hero content');
  }

  return response.json();
};
