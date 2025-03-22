import { Tooltip, List, ListItem } from "@/material";
import { ContactList } from "@/data/ContactList";

const MenuContact = ({ containerStyles }) => {
  // menu contact styles
  const styles = {
    container: containerStyles,
    label:
      "label text-neutral-600 border-b border-neutral-300 mobile:border-none pb-3 laptop:pb-1 mobile:pb-0 mb-6 laptop:mb-4 mobile:mb-2",

    list: "w-full min-w-0 flex flex-col gap-2 laptop:gap-1 p-0",
    tooltip: "bg-neutral-100 caption text-neutral-500",
    item: "group hover:bg-black/5 flex items-center gap-2 p-0 pr-4 laptop:pr-3 mobile:pr-0",
    icon: "bg-black/5 rounded-lg text-lg mobile:text-base text-neutral-600 group-hover:text-primary group-hover:bg-black/0 transition-colors duration-300 ease-out p-4 laptop:p-3",
    title: "caption text-neutral-600",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Contact</h4>

      {/* list */}
      <List className={styles.list}>
        {ContactList.map((link, index) => (
          <Tooltip key={index} placement="top" className={styles.tooltip} content={link.tooltip}>
            <a
              href={link.link}
              area-label={`Tracway's ${link.title}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.action}
            >
              <ListItem className={styles.item}>
                {/* icon */}
                <span className={styles.icon}>{link.icon}</span>
                {/* title */}
                <h5 className={styles.title}>{link.label}</h5>
              </ListItem>
            </a>
          </Tooltip>
        ))}
      </List>
    </div>
  );
};

export default MenuContact;
