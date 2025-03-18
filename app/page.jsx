import HeroSection from "@/components/home/HeroSection";
import FAQSection from "@/components/home/FAQSection";
import GallerySection from "@/components/home/GallerySection";
import OfferSection from "@/components/home/OfferSection";
import PackageSection from "@/components/home/PackageSection";
import TrendingSection from "@/components/home/TrendingSection";
import { getGallery, getTourPackages, getTrendingDestinations } from "@/services";

const Home = async () => {
  const tourPackages = await getTourPackages();
  const trendingDestinations = await getTrendingDestinations();
  const gallery = await getGallery();

  return (
    <main className="main">
      {/* hero section */}
      <HeroSection />
      {/* offer section */}
      <OfferSection />
      {/* package section */}
      <PackageSection packages={tourPackages} />
      {/* trending section */}
      <TrendingSection destinations={trendingDestinations} />
      {/* about section */}
      {/* <AboutSection /> */}
      {/* testimonial section */}
      {/* <TestimonialSection /> */}
      {/* blog section */}
      {/* <BlogSection /> */}
      {/* shop section */}
      {/* <ShopSection /> */}
      {/* faq section */}
      <FAQSection />
      {/* gallery section */}
      <GallerySection gallery={gallery} />
    </main>
  );
};

export default Home;
