import { ServiceList } from "@/data/ServiceList";
import { List, ListItem } from "@/material";
import Link from "next/link";

const HeroContent = () => {
  // hero content styles
  const styles = {
    container: "w-full aspect-[21/9] tablet:aspect-[16/9] mobile:aspect-[9/16] bg-black/60 relative z-[1]",
    content: "content w-full h-full flex flex-col pt-10 laptop:pt-8 mobile:pt-5",

    heading: {
      container: "flex-1 w-full flex flex-col justify-center gap-5 laptop:gap-4 mobile:gap-2",
      title:
        "text-[clamp(0px,_5vw,_96px)] tablet:text-[clamp(52px,_7vw,_68px)] mobile:text-[clamp(28px,_12vw,_92px)] font-semibold leading-tight text-white mobile:text-center",
      subtitle:
        "text-2xl laptop:text-xl mobile:text-base font-semibold tracking-wide leading-normal text-neutral-200 mobile:text-center ml-1 mobile:ml-0",
    },

    services: {
      container: "bg-white/80 backdrop-blur backdrop-saturate-200 rounded-xl grid grid-cols-10 p-1",
      link: "col-span-2 mobile:col-span-5 mobile:last:col-span-10",
      item: "group w-full rounded-lg shadow-none border-2 border-white hover:bg-white flex items-center justify-center transition-colors duration-300 ease-out gap-2 py-8 laptop:py-6 mobile:py-5",
      icon: "text-xl laptop:text-lg text-neutral-500 min-mobile:group-hover:text-primary transition-colors duration-300 ease-out",
      title: "label text-black min-mobile:group-hover:text-primary transition-colors duration-300 whitespace-nowrap",
    },

    bottom: "w-full h-10 laptop:h-8 mobile:h-5 rounded-t-[32px] bg-white mt-10 laptop:mt-8 mobile:mt-5",
  };

  return (
    <div className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* heading */}
        <div className={styles.heading.container}>
          {/* title */}
          <h1 className={styles.heading.title}>
            From Dream to <br /> Destination
          </h1>
          {/* subtitle */}
          <h2 className={styles.heading.subtitle}>Find Flights, hotels & more</h2>
        </div>

        {/* services */}
        <List className={styles.services.container}>
          {ServiceList.map((service, index) => (
            <Link key={index} href={service.link} className={styles.services.link}>
              {/* service */}
              <ListItem className={styles.services.item}>
                {/* icon */}
                <span className={styles.services.icon}>{service.icon}</span>
                {/* title */}
                <h4 className={styles.services.title}>{service.title}</h4>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>

      {/* bottom */}
      <div className={styles.bottom}></div>
    </div>
  );
};

export default HeroContent;
