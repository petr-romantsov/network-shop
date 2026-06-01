import Image from 'next/image';

import { ImageData } from '@/core/types/api';
import { cn, getItemKey } from '@/core/utils/helpers';

type GridWithImagesProps = {
  images: ImageData[];
};

const positionProperties: string[] = [
  'md:col-span-3',
  'md:col-span-3',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
];

export const GridWithImages = ({ images }: GridWithImagesProps) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-6 gap-4 grid-rows-[61vw_61vw_145vw_145vw_145vw] md:grid-rows-[345px_524px]">
      {images.map((image, index) => (
        <div
          key={getItemKey(image.src, index)}
          className={cn('relative', positionProperties[index])}
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            fill
          />
        </div>
      ))}
    </div>
  );
};
