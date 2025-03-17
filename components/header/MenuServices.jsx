import { services } from "@/data/Services";
import { List, ListItem } from "@/material";
import Link from "next/link";

const MenuServices = ({ containerStyles }) => {
  // menu services styles
  const styles = {
    container: containerStyles,
    label:
      "label text-neutral-600 border-b border-neutral-300 mobile:border-none pb-3 laptop:pb-1 mobile:pb-0 mb-6 laptop:mb-4 mobile:mb-2",

    list: "w-full min-w-0 grid grid-cols-2 mobile:grid-cols-1 gap-4 laptop:gap-2 mobile:gap-1 p-0",
    item: "group hover:bg-black/5 flex items-center gap-4 laptop:gap-2 p-0 pr-7 laptop:pr-6 mobile:pr-0",
    icon: "bg-black/5 rounded-lg text-2xl laptop:text-xl mobile:text-base text-neutral-600 group-hover:text-primary group-hover:bg-black/0 transition-colors duration-300 ease-out p-7 laptop:p-6 mobile:p-3",
    info: "flex flex-col gap-1 laptop:gap-0",
    title: "heading-04 mobile:!text-sm text-black",
    caption: "caption text-neutral-500 tablet:hidden",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Services</h4>

      {/* content */}
      <List className={styles.list}>
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <ListItem className={styles.item}>
              {/* icon */}
              <span className={styles.icon}>{service.icon}</span>
              {/* info */}
              <div className={styles.info}>
                {/* title */}
                <h5 className={styles.title}>{service.title}</h5>
                {/* caption */}
                <p className={styles.caption}>{service.caption}</p>
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MenuServices;
