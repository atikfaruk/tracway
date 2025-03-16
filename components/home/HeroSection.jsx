import HeroContent from "../shared/HeroContent";
import HeroSlider from "../shared/HeroSlider";

const HeroSection = () => {
  // hero section styles
  const styles = {
    section: "w-full aspect-[21/9] tablet:aspect-[16/9] mobile:aspect-[9/16] relative",
  };

  return (
    <section className={styles.section}>
      {/* background */}
      <HeroSlider />
      {/* content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
