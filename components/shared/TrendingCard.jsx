import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";

const TrendingCard = ({ cover, title, country, slug, containerStyles }) => {
  // trending card styles
  const styles = {
    container: cn("h-fit pl-5", containerStyles),
    content: "group w-full aspect-[3/4] rounded-xl overflow-hidden relative",
    overlay:
      "w-full h-1/2 bg-gradient-to-b from-black/0 to-black/80 flex justify-center items-end absolute bottom-0 p-5 laptop:p-4 mobile:p-3",
    cover:
      "w-full h-full object-cover object-center group-hover:scale-110 will-change-transform transition-transform duration-300 ease-out",
    title: "heading-03 text-white",
  };

  return (
    <article className={styles.container}>
      {/* content */}
      <Link href="/">
        <div className={styles.content}>
          {/* cover */}
          <Image
            src={cover}
            alt={title}
            fill
            sizes="(max-width:767px) 75vw, (max-width: 1023px) 240px, (max-width: 1535px) 300px, 320px"
            className={styles.cover}
          />

          {/* overlay */}
          <div className={styles.overlay}>
            {/* title */}
            <h4 className={styles.title}>
              {title}, {country}
            </h4>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default TrendingCard;
