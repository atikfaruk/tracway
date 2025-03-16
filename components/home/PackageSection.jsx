import Link from "next/link";
import { Button } from "@/material";
import PackageCard from "../shared/PackageCard";

const packageList = [
  {
    title: "Travel to Paris",
    slug: "paris-france",
    cover:
      "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "7 Nights / 8 Days",
    description: {
      html: "lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  },
  {
    title: "Explore Rome of Italy",
    slug: "rome-italy",
    cover:
      "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "7 Nights / 8 Days",
    description: {
      html: "lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  },
  {
    title: "Discover Barcelona in a new way",
    slug: "barcelona-spain",
    cover:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "7 Nights / 8 Days",
    description: {
      html: "lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. lipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.",
    },
  },
];

const PackageSection = () => {
  // packages section styles
  const styles = {
    section: `
      content grid-12 px-5 mb-28 laptop:mb-24 mobile:mb-20
    `,
    wrapper: "col-span-8 col-start-3 tablet:col-span-full",

    heading: {
      container: `flex items-center justify-between mobile:justify-center mb-12 laptop:mb-10 mobile:mb-8`,
      title: `heading-02 mobile:text-center`,
      action: `mobile:hidden`,
    },

    packages: {
      container: `grid grid-cols-3 tablet:grid-cols-2 tablet:justify-center mobile:grid-cols-1 gap-x-5 gap-y-11 pt-6`,
      action: `hidden mobile:block w-full`,
    },
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* heading */}
        <div className={styles.heading.container}>
          {/* title */}
          <h2 className={styles.heading.title}>Our Packages</h2>
          {/* action for desktop */}
          <Link href="/packages">
            <Button variant="outlined" size="lg" className={styles.heading.action}>
              View all packages
            </Button>
          </Link>
        </div>

        {/* packages */}
        <div className={styles.packages.container}>
          {packageList.map((pack) => (
            <PackageCard
              key={pack.slug}
              cover={pack.cover}
              title={pack.title}
              slug={pack.slug}
              date={pack.date}
              description={pack.description.html}
            />
          ))}

          {/* action for mobile */}
          <Link href="/packages">
            <Button variant="outlined" size="lg" className={styles.packages.action}>
              View all packages
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PackageSection;
