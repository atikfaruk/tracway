import { getGallery, getTourPackages, getTrendingDestinations } from "@/services";
import HeroSection from "@/components/home/HeroSection";
import PackageSection from "@/components/home/PackageSection";
import TrendingSection from "@/components/home/TrendingSection";
import FAQSection from "@/components/home/FAQSection";
import GallerySection from "@/components/home/GallerySection";

const Home = async () => {
  const tourPackages = await getTourPackages();
  const trendingDestinations = await getTrendingDestinations();
  const gallery = await getGallery();

  return (
    <main className="main">
      {/* hero section */}
      <HeroSection />
      {/* package section */}
      <PackageSection packages={tourPackages} />
      {/* trending section */}
      <TrendingSection destinations={trendingDestinations} />
      {/* faq section */}
      <FAQSection />
      {/* gallery section */}
      <GallerySection gallery={gallery} />
    </main>
  );
};

export default Home;
