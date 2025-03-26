"use client";

import Image from "next/image";

const UnderConstruction = () => {
  // under construction styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20",
    title: "heading-03 text-center mb-2 mobile:mb-1",
    subtitle: "heading-04 text-center text-neutral-500 mb-10 laptop:mb-8 mobile:mb-5",
    image: "w-full h-auto rounded-3xl",
  };

  return (
    <section className={styles.container}>
      {/* title */}
      <h2 className={styles.title}>This page is under construction</h2>
      {/* subtitle */}
      <h3 className={styles.subtitle}>Please come back later</h3>
      {/* image */}
      <Image
        src="https://res.cloudinary.com/dazc5yfhr/image/upload/v1742988015/mohammad-rahmani-_Fx34KeqIEw-unsplash_rxnb4k.jpg"
        alt="Under Construction"
        width={1920}
        height={1080}
        className={styles.image}
      />
    </section>
  );
};

export default UnderConstruction;
