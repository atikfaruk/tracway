"use client";

import { Button } from "@material-tailwind/react";
import { BiArrowBack } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Image from "next/image";

const PageHeading = ({ bg, title }) => {
  const router = useRouter();

  // page heading styles
  const styles = {
    container: "w-full relative mb-28 laptop:mb-24 mobile:mb-20 overflow-hidden",
    background: "w-full h-full object-cover object-center",
    content:
      "w-full h-full bg-black/75 grid place-items-center relative z-[1] pt-40 laptop:pt-36 mobile:pt-32 pb-20 laptop:pb-16 mobile:pb-12",
    title: "heading-01 text-white text-center mb-4 laptop:mb-3 mobile:mb-2",
    back: "secondary-button !backdrop-blur-0 !backdrop-saturate-100 flex items-center gap-2 pl-2 pr-4",
  };

  return (
    <section className={styles.container}>
      {/* background */}
      <Image
        src={bg}
        alt={`Tracway's ${title} page background`}
        priority
        fill
        sizes="100vw"
        className={styles.background}
      />

      {/* content */}
      <div className={styles.content}>
        {/* title */}
        <h1 className={styles.title}>{title}</h1>
        {/* back */}
        <Button size="lg" color="white" variant="text" onClick={() => router.back()} className={styles.back}>
          <BiArrowBack /> Go Back
        </Button>
      </div>
    </section>
  );
};

export default PageHeading;
