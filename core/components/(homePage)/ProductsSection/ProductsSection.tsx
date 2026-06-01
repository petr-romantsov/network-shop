'use client';

import { Container, Embla, EmblaControls } from '@/core/components/common';
import { useProducts } from '@/core/hooks/useProducts';
import { cn } from '@/core/utils/helpers';
import { ProductCard } from './ProductCard';

export const ProductsSection = () => {
  const { data: products, isLoading, error } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="px-2 py-6 md:pt-10 md:pb-15">
      <Container className="flex flex-col gap-6 md:gap-10 items-center">
        <h3 className="text-2xl font-medium text-center">Популярные товары</h3>
        <Embla
          className="w-full"
          controls={
            <EmblaControls
              variant="bordered"
              className="hidden lg:flex w-full xl:w-[110%] left-1/2 -translate-x-1/2 top-[calc((100%-151px)/2)]"
              color="black"
            />
          }
          pagination={false}
        >
          {products.map((product, index) => (
            <div
              key={product.id}
              className={cn(
                'embla__slide grow-0 shrink-0  min-w-0 w-[63vw] md:w-[220px]',
                {
                  'mr-4 md:mr-6': index !== products.length - 1,
                }
              )}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </Embla>
      </Container>
    </section>
  );
};
