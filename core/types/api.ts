type HeroSlideContent = {
  id: number;
  image: string;
  title: string;
  description: string;
  position: 'center' | 'left' | 'right';
};

type Collection = string[];

type Api = {
  heroSlides: HeroSlideContent[];
  collections: {
    male: Collection;
    female: Collection;
  };
};

export type { Api, Collection, HeroSlideContent };
