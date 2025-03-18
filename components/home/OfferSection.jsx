import Image from "next/image";
import CardSlider from "../shared/CardSlider";

const OfferSection = () => {
  const offers = ["/schengen-pack.jpg", "/egypt-pack.jpg"];

  // offer section styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20 overflow-hidden",
    offer: "min-w-0 [transform:translate3d(0,_0,_0)] flex-[0_0_100%] pl-5",
    wrapper: "w-full aspect-[21/9] rounded-3xl laptop:rounded-2xl mobile:rounded-xl overflow-hidden relative",
    cover: "w-full h-full object-cover object-center",
  };

  return (
    <section className={styles.container}>
      {/* content */}
      <CardSlider>
        {offers.map((offer, index) => (
          // offer
          <div key={index} className={styles.offer}>
            <figure className={styles.wrapper}>
              <Image src={offer} alt="offer" fill sizes="100vw" className={styles.cover} />
            </figure>
          </div>
        ))}
      </CardSlider>
    </section>
  );
};

export default OfferSection;
