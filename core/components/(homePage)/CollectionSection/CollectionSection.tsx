'use client';

import { Container } from '@/core/components/common';
import { useCollectionsContent } from '@/core/hooks/useCollectionsContent';
import { Collection } from './Collection';

export const CollectionSection = () => {
  const { data: images, isLoading, error } = useCollectionsContent();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!images) {
    return null;
  }

  return (
    <section className="px-2">
      <Container>
        {images?.female && images.female.length > 0 && (
          <Collection collectionType="female" images={images.female} />
        )}
        {images?.male && images.male.length > 0 && (
          <Collection collectionType="male" images={images.male} />
        )}
      </Container>
    </section>
  );
};
