import { SocialList } from "@/data/SocialList";
import { List, ListItem } from "@/material";

const MenuSocials = ({ containerStyles }) => {
  // menu socials styles
  const styles = {
    container: containerStyles,
    label: "label text-neutral-500 border-b border-neutral-300 pb-3 laptop:pb-1 mb-6 laptop:mb-4 mobile:hidden",

    list: "w-full min-w-0 flex flex-col gap-2 laptop:gap-1 p-0",
    link: "inline-flex",
    item: "group hover:bg-neutral-100 flex items-center gap-2 p-0 pr-4 laptop:pr-3 mobile:pr-0",
    icon: "bg-neutral-100 rounded-lg text-lg mobile:text-base text-neutral-600 group-hover:text-primary transition-colors duration-300 ease-out p-4 laptop:p-3",
    title: "caption text-neutral-600 group-hover:text-primary transition-colors duration-300 ease-out",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Socials</h4>

      {/* list */}
      <List className={styles.list}>
        {SocialList.map((link, index) => (
          <a
            key={index}
            href={link.link}
            area-label={`Tracway's ${link.title}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            <ListItem className={styles.item}>
              {/* icon */}
              <span className={styles.icon}>{link.icon}</span>
              {/* title */}
              <h5 className={styles.title}>{link.title}</h5>
            </ListItem>
          </a>
        ))}
      </List>
    </div>
  );
};

export default MenuSocials;
