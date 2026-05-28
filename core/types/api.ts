type HeroSlideContent = {
  id: number;
  image: string;
  title: string;
  description: string;
  position: 'center' | 'left' | 'right';
};

type CollectionImage = {
  src: string;
  alt: string;
};

type Api = {
  heroSlides: HeroSlideContent[];
  collections: {
    male: CollectionImage[];
    female: CollectionImage[];
  };
};

type EndpointMap = {
  heroSlides: Api['heroSlides'];
  collections: Api['collections'];
};

type Endpoints = keyof EndpointMap;

export type { Api, CollectionImage, EndpointMap, Endpoints, HeroSlideContent };
