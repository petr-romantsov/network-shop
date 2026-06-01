type HeroSlideContent = {
  id: number;
  image: string;
  title: string;
  description: string;
  position: 'center' | 'left' | 'right';
};

type ImageData = {
  src: string;
  alt: string;
};

type Product = {
  id: number;
  title: string;
  originalPrice: number;
  discountPrice: number;
  image: ImageData;
};
type Api = {
  heroSlides: HeroSlideContent[];
  collections: {
    male: ImageData[];
    female: ImageData[];
  };
  products: Product[];
};

type EndpointMap = {
  heroSlides: Api['heroSlides'];
  collections: Api['collections'];
  products: Api['products'];
};

type Endpoints = keyof EndpointMap;

export type {
  Api,
  EndpointMap,
  Endpoints,
  HeroSlideContent,
  ImageData,
  Product,
};
