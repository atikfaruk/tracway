import { Fragment } from "react";
import { services } from "@/data/Services";
import { List, ListItem } from "@/material";
import Link from "next/link";

const HeroContent = () => {
  const styles = {
    container: "w-full h-full bg-black/60 absolute inset-0 z-[1]",
    content: "content !h-full grid-12 pb-16 laptop:pb-12 mobile:pb-8 pt-8 laptop:pt-6 mobile:pt-4",
    wrapper: "col-span-8 col-start-3 tablet:col-span-full flex flex-col",
    heading: "flex-1 flex justify-center items-center heading-01 text-center text-white",

    list: "glass flex-row flex-wrap items-center p-1 rounded-xl",
    link: "flex-1",
    item: "group w-full rounded-lg shadow-none mobile:border mobile:border-neutral-100 flex items-center justify-center gap-4 laptop:gap-2 py-6 mobile:p-4",
    icon: "text-2xl laptop:text-xl text-neutral-500 min-mobile:group-hover:text-primary transition-colors duration-300 ease-out",
    title: "heading-04 text-black min-mobile:group-hover:text-primary transition-colors duration-300 whitespace-nowrap",

    bottom: "w-full h-8 laptop:h-6 mobile:h-4 absolute z-10 bg-white bottom-0 rounded-t-[32px]",
  };

  return (
    <div className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* wrapper */}
        <div className={styles.wrapper}>
          {/* heading */}
          <div className={styles.heading}>
            <h1>
              From Dream to <br /> Destination
            </h1>
          </div>

          {/* services */}
          <List className={styles.list}>
            {services.map((service, index) => (
              <Fragment key={index}>
                <Link key={index} href={service.link} className={styles.link}>
                  <ListItem className={styles.item}>
                    {/* icon */}
                    <span className={styles.icon}>{service.icon}</span>
                    {/* title */}
                    <h4 className={styles.title}>{service.title}</h4>
                  </ListItem>
                </Link>

                {/* divider */}
                <div className="w-px h-2/3 bg-neutral-100 last:hidden mobile:hidden" />
              </Fragment>
            ))}
          </List>
        </div>
      </div>

      {/* bottom */}
      <div className={styles.bottom} />
    </div>
  );
};

export default HeroContent;
