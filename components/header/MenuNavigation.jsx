import { navigation } from "@/data/Navigation";
import { List, ListItem } from "@/material";
import Link from "next/link";

const MenuNavigation = ({ containerStyles }) => {
  // menu navigation styles
  const styles = {
    container: containerStyles,
    label:
      "label text-neutral-500 border-b border-neutral-200 mobile:border-none pb-4 laptop:pb-2 mobile:pb-0 mb-8 laptop:mb-4",

    list: "w-full flex flex-col gap-0 mobile:gap-2 p-0",
    item: "heading-04 text-black min-mobile:hover:text-primary rounded-lg min-mobile:hover:!bg-neutral-100 flex items-center transition-colors duration-300 ease-out p-4 laptop:p-2 -ml-4 laptop:-ml-2",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Navigation</h4>

      {/* content */}
      <List className={styles.list}>
        {navigation.map((link, index) => (
          <Link key={index} href={link.link}>
            <ListItem className={styles.item}>{link.title}</ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

export default MenuNavigation;
