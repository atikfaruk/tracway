import { NavigationList } from "@/data/NavigationList";
import { List, ListItem } from "@/material";
import Link from "next/link";

const MenuNavigation = ({ containerStyles }) => {
  // menu navigation styles
  const styles = {
    container: containerStyles,
    label:
      "label text-neutral-500 border-b border-neutral-300 mobile:border-none pb-3 laptop:pb-1 mobile:pb-0 mb-6 laptop:mb-4 mobile:mb-2",

    list: "w-full min-w-0 flex flex-col gap-2 laptop:gap-1 p-0",
    link: "inline-flex",
    item: "group hover:bg-neutral-100 flex items-center gap-2 p-0 pr-4 laptop:pr-3 mobile:pr-0",
    icon: "bg-neutral-100 rounded-lg text-lg mobile:text-base text-neutral-600 group-hover:text-primary transition-colors duration-300 ease-out p-4 laptop:p-3",
    title: "heading-04 mobile:!text-sm text-black group-hover:text-primary transition-colors duration-300 ease-out",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Navigation</h4>

      {/* content */}
      <List className={styles.list}>
        {NavigationList.map((link, index) => (
          <Link key={index} href={link.link} className={styles.link}>
            <ListItem className={styles.item}>
              {/* icon */}
              <span className={styles.icon}>{link.icon}</span>
              {/* title */}
              <h5 className={styles.title}>{link.title}</h5>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MenuNavigation;
