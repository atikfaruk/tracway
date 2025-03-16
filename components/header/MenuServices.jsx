import { services } from "@/data/Services";
import { List, ListItem } from "@/material";
import Link from "next/link";

const MenuServices = ({ containerStyles }) => {
  // menu services styles
  const styles = {
    container: containerStyles,
    label:
      "label text-neutral-500 border-b border-neutral-200 mobile:border-none pb-4 laptop:pb-2 mobile:pb-0 mb-8 laptop:mb-4",

    list: "w-full grid grid-cols-2 mobile:grid-cols-1 gap-4 laptop:gap-2 p-0",
    item: "group rounded-xl min-mobile:hover:!bg-neutral-100 flex items-center gap-4 laptop:gap-2 p-0 pr-4 laptop:pr-2",
    icon: "bg-neutral-100 rounded-lg text-2xl laptop:text-xl mobile:text-base text-neutral-500 min-mobile:group-hover:text-primary transition-colors duration-300 ease-out p-8 laptop:p-5 mobile:p-3",
    info: "flex flex-col gap-1 laptop:gap-0",
    title: "heading-04 text-black min-mobile:group-hover:text-primary transition-colors duration-300",
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
                <h4 className={styles.title}>{service.title}</h4>
                {/* caption */}
                <h5 className={styles.caption}>{service.caption}</h5>
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MenuServices;
