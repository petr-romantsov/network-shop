import { CollectionSection } from '@/core/components/(homePage)/CollectionSection/CollectionSection';
import { HeroSection } from '@/core/components/(homePage)/HeroSection/HeroSection';
import { ProductsSection } from '@/core/components/(homePage)/ProductsSection/ProductsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <CollectionSection />
      <ProductsSection />
    </>
  );
}
