import Link from "next/link";
import Image from "next/image";
import { Button } from "@/material";
import { BiChevronRight } from "react-icons/bi";

const GallerySection = ({ gallery }) => {
  // gallery section styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20",
    heading: "heading-02 text-center mb-10 laptop:mb-8 mobile:mb-5",

    gallery: {
      container: "grid grid-cols-3 mobile:grid-cols-2 gap-5 laptop:gap-4 mobile:gap-3 relative",
      wrapper: "w-full aspect-square rounded-xl overflow-hidden relative",
      image: "w-full h-full object-cover object-center",
      overlay:
        "w-full h-full bg-gradient-to-b from-white/0 via-white/80 to-white/100 absolute inset-0 z-[1] grid place-items-center",
      action: "secondary-button p-4 pl-6",
    },
  };

  return (
    <section className={styles.container}>
      {/* heading */}
      <h2 className={styles.heading}>Our Gallery</h2>

      {/* images */}
      <div className={styles.gallery.container}>
        {gallery.slice(0, 6).map((image, index) => (
          <figure key={index} className={styles.gallery.wrapper}>
            <Image
              src={image.secure_url}
              alt="Tracway's Gallery Photo"
              fill
              sizes="(max-width:767px) 50vw, (max-width: 1023px) 240px, (max-width: 1535px) 300px, 440px"
              className={styles.gallery.image}
            />
          </figure>
        ))}

        {/* overlay */}
        <div className={styles.gallery.overlay}>
          {/* gallery link */}
          <Link href="/about/#gallery">
            <Button variant="outlined" size="lg" color="black" className={styles.gallery.action}>
              Explore Gallery <BiChevronRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
