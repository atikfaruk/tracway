import { Button } from "@/material";
import Image from "next/image";
import Link from "next/link";

const GallerySection = () => {
  const gallery = [
    "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/732629/pexels-photo-732629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  // gallery section styles
  const styles = {
    container: "content grid-12 mb-28 laptop:mb-24 mobile:mb-20",
    content: "col-span-8 col-start-3 tablet:col-span-full",

    heading: `heading-02 text-center mb-12 laptop:mb-10 mobile:mb-8`,
    images: {
      container: `grid grid-cols-3 mobile:grid-cols-2 gap-4 relative`,
      wrapper: `w-full aspect-square rounded-xl overflow-hidden relative`,
      image: `object-cover object-center`,
      overlay: `
        w-full h-full bg-gradient-to-b from-white/0 via-white/80 to-white/100
        absolute inset-0 z-[1] grid place-items-center
      `,
      action: `bg-black`,
    },
  };

  return (
    <section className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* heading */}
        <h2 className={styles.heading}>Our Gallery</h2>

        {/* images */}
        <div className={styles.images.container}>
          {gallery.map((image, index) => (
            <figure key={index} className={styles.images.wrapper}>
              <Image
                src={image}
                alt="Yaseen Aftab Foundation's Gallery Photo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className={styles.images.image}
              />
            </figure>
          ))}

          {/* overlay */}
          <div className={styles.images.overlay}>
            {/* gallery link */}
            <Link href="/gallery">
              <Button size="lg" variant="filled" className={styles.images.action}>
                Explore Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
