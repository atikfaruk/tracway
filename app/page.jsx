import HeroSection from "@/components/home/HeroSection";
import FAQSection from "@/components/home/FAQSection";
import GallerySection from "@/components/home/GallerySection";
import OfferSection from "@/components/home/OfferSection";
import PackageSection from "@/components/home/PackageSection";
import TrendingSection from "@/components/home/TrendingSection";

const Home = () => {
  return (
    <main>
      {/* hero section */}
      <HeroSection />
      {/* offer section */}
      <OfferSection />
      {/* package section */}
      <PackageSection />
      {/* trending section */}
      <TrendingSection />
      {/* about section */}
      {/* <AboutSection /> */}
      {/* testimonial section */}
      {/* <TestimonialSection /> */}
      {/* contact section */}
      {/* <ContactSection /> */}
      {/* blog section */}
      {/* <BlogSection /> */}
      {/* shop section */}
      {/* <ShopSection /> */}
      {/* faq section */}
      <FAQSection />
      {/* gallery section */}
      <GallerySection />
    </main>
  );
};

export default Home;
