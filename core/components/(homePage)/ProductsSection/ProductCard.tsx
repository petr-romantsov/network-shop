import Image from 'next/image';

import { UiButton } from '@/core/components/ui';
import type { Product } from '@/core/types/api';

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <article className="flex flex-col gap-4 w-full">
      <div className="relative w-full h-[91.66vw] md:h-[330px] ">
        <Image
          className="w-full h-full object-cover"
          src={product.image.src}
          alt={product.image.alt}
          fill
        />
      </div>
      <div className="flex flex-col gap-4 items-start w-full">
        <h4 className="text-sm font-normal">{product.title}</h4>
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium line-through text-black/50">
            {product.originalPrice} руб.
          </span>
          <span className="text-base font-medium text-black">
            {product.discountPrice} руб.
          </span>
        </div>
        <div className="flex items-center gap-2 w-full">
          <UiButton
            variant="primary"
            text="Где купить"
            buttonType="link"
            href="/stores"
          />
          <UiButton variant="primary" text="Купить" buttonType="button" />
        </div>
      </div>
    </article>
  );
};
