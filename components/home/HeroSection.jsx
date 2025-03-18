import HeroContent from "../shared/HeroContent";
import HeroBg from "../shared/HeroBg";

const HeroSection = () => {
  // hero section styles
  const styles = {
    container: "w-full h-fit relative",
  };

  return (
    <section className={styles.container}>
      {/* content */}
      <HeroContent />
      {/* background */}
      <HeroBg />
    </section>
  );
};

export default HeroSection;
