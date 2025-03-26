import Link from "next/link";
import { Button } from "@/material";
import PackageCard from "../shared/PackageCard";
import { BiChevronRight } from "react-icons/bi";
import CardSlider from "../shared/CardSlider";

const PackageSection = ({ packages }) => {
  // packages section styles
  const styles = {
    container: "content mb-28 laptop:mb-24 mobile:mb-20 overflow-hidden",

    heading: {
      container: "flex items-center justify-between mobile:justify-center mb-10 laptop:mb-8 mobile:mb-5",
      title: "heading-02 mobile:text-center",
      action: "mobile:hidden secondary-button pl-4 pr-2",
    },

    package:
      "min-w-0 [transform:translate3d(0,_0,_0)] flex-[0_0_33.333%] laptop:flex-[0_0_50%] mobile:flex-[0_0_100%] pl-5",

    action: "hidden mobile:block mobile:mt-5",
    actionButton: "w-full secondary-button pl-4 pr-2",
  };

  return (
    <section className={styles.container}>
      {/* heading */}
      <div className={styles.heading.container}>
        {/* title */}
        <h2 className={styles.heading.title}>Tour Packages</h2>
        {/* action for desktop */}
        <Link href="/packages">
          <Button variant="outlined" className={styles.heading.action}>
            Discover all packages <BiChevronRight />
          </Button>
        </Link>
      </div>

      {/* packages */}
      <CardSlider containerStyles="pt-5">
        {packages.map((pack) => (
          <PackageCard
            key={pack.slug}
            cover={pack.cover.secure_url}
            title={pack.title}
            slug={pack.slug}
            duration={pack.duration}
            description={pack.description.html}
            containerStyles={styles.package}
          />
        ))}
      </CardSlider>

      {/* action for mobile */}
      <Link href="/packages" className={styles.action}>
        <Button variant="outlined" className={styles.actionButton}>
          Discover all packages <BiChevronRight />
        </Button>
      </Link>
    </section>
  );
};

export default PackageSection;
