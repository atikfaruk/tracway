import CardSlider from "../shared/CardSlider";
import TrendingCard from "../shared/TrendingCard";

const TrendingSection = ({ destinations }) => {
  // trending section styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20 overflow-hidden",
    heading: "heading-02 text-center mb-10 laptop:mb-8 mobile:mb-5",

    trending:
      "min-w-0 [transform:translate3d(0,_0,_0)] flex-[0_0_25%] laptop:flex-[0_0_33.333%] mobile:flex-[0_0_75%] pl-5",
  };

  return (
    <section className={styles.container}>
      {/* title */}
      <h2 className={styles.heading}>Trending Destinations</h2>

      {/* content */}
      <CardSlider drag>
        {destinations.map((destination) => (
          // trending
          <TrendingCard
            key={destination.slug}
            cover={destination.cover.secure_url}
            title={destination.title}
            country={destination.country}
            slug={destination.slug}
            containerStyles={styles.trending}
          />
        ))}
      </CardSlider>
    </section>
  );
};

export default TrendingSection;
