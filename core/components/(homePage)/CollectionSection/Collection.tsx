import { GridWithImages } from '@/core/components/common';
import { UiButton } from '@/core/components/ui';
import type { ImageData } from '@/core/types/api';

type CollectionProps = {
  collectionType: 'female' | 'male';
  images: ImageData[];
};

export const Collection = ({ collectionType, images }: CollectionProps) => {
  return (
    <div className="flex flex-col gap-4 md:gap-10 py-6 md:py-10">
      <GridWithImages images={images} />
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-6 items-center justify-center">
        {collectionType === 'female' && (
          <UiButton
            variant="primary"
            text="Женская коллекция.pdf"
            buttonType="link"
            href="/collections/female.pdf"
            download="Женская коллекция.pdf"
            className="w-full md:w-auto text-center"
          />
        )}
        {collectionType === 'male' && (
          <UiButton
            variant="primary"
            text="Мужская коллекция.pdf"
            buttonType="link"
            href="/collections/male.pdf"
            download="Мужская коллекция.pdf"
            className="w-full md:w-auto text-center"
          />
        )}
        <UiButton
          variant="primary"
          text="Cписок магазинов"
          buttonType="navLink"
          href="/stores"
          className="w-full md:w-auto text-center "
        />
      </div>
    </div>
  );
};
