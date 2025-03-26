import { Card, CardBody, CardFooter, CardHeader, Button } from "@/material";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

const PackageCard = ({ cover, title, slug, duration, description, containerStyles }) => {
  // package card styles
  const styles = {
    container: cn("w-full h-full", containerStyles),
    content: "w-full shadow-none border border-neutral-300",

    header: {
      container: "aspect-[16/9] shadow-xl shadow-black/10 relative -mt-5",
      cover:
        "w-full h-full object-cover object-center hover:scale-110 will-change-transform transition-transform duration-300 ease-out",
    },

    body: {
      container: "p-5",
      title: "heading-03 text-neutral-800 line-clamp-1 mb-2",
      subtitle: "label mb-3 text-neutral-500",
      description:
        "paragraph text-justify-forced text-neutral-600 h-[6rem] laptop:h-[5.5rem] mobile:h-[5.2rem] overflow-hidden !line-clamp-3",
    },

    footer: {
      container: "p-5 pt-0",
      action: "primary-button px-6",
    },
  };

  return (
    <article className={styles.container}>
      {/* content */}
      <Card className={styles.content}>
        {/* header */}
        <CardHeader color="black" className={styles.header.container}>
          {/* cover */}
          <Link href={`/packages/${slug}`}>
            <Image
              src={cover}
              alt={title}
              width={500}
              height={300}
              sizes="(max-width:767px) 95vw, (max-width: 1023px) 324px, (max-width: 1535px) 424px, 390px"
              className={styles.header.cover}
            />
          </Link>
        </CardHeader>

        {/* body */}
        <CardBody className={styles.body.container}>
          {/* title */}
          <h3 className={styles.body.title}>{title}</h3>
          {/* subtitle */}
          <h4 className={styles.body.subtitle}>{duration}</h4>
          {/* description */}
          <div dangerouslySetInnerHTML={{ __html: description }} className={styles.body.description} />
        </CardBody>

        {/* footer */}
        <CardFooter className={styles.footer.container}>
          {/* explore button */}
          <Link href={`/packages/${slug}`}>
            <Button className={styles.footer.action}>Explore</Button>
          </Link>
        </CardFooter>
      </Card>
    </article>
  );
};

export default PackageCard;
