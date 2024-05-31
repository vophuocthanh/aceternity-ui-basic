import { Globe } from '@/components/ui/globe';
import { HeroParallax } from '@/components/ui/hero-parallax';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { SparklesPreview } from '@/components/SparklesPreview';
import { SpotlightPreview } from '@/components/SpotlightPreview';
import { TabsDemo } from '@/components/ui/TabsDemo';
import { products } from '@/data/products';
import { TextGenerateEffectDemo } from '@/components/TextGenerateEffectDemo';
import { VortexDemo } from '@/components/VortexDemo';
import { BackgroundBoxesDemo } from '@/components/BackgroundBoxesDemo';
import { TracingBeamDemo } from '@/components/TracingBeamDemo';

export default function Home() {
  return (
    <div>
      {/* <MacbookScroll /> */}
      <SpotlightPreview />
      <SparklesPreview />
      <TextGenerateEffectDemo />
      <TracingBeamDemo />
      <VortexDemo />
      <BackgroundBoxesDemo />
      <TabsDemo />
      <HeroParallax products={products} />
    </div>
  );
}
