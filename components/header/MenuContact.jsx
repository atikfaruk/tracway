import { contact } from "@/data/Contact";
import { Tooltip } from "@/material";

const MenuContact = ({ containerStyles }) => {
  // menu contact styles
  const styles = {
    container: containerStyles,
    label: "label text-neutral-500 pb-4 laptop:pb-2",
    list: "flex flex-col",
    tooltip: "bg-neutral-100 caption text-neutral-500",
    action: "group inline-flex items-center gap-4 laptop:gap-3 mobile:gap-2 py-1",
    actionIcon: "text-neutral-400 min-mobile:group-hover:text-primary transition-colors duration-300 ease-out label",
    actionLabel: "text-neutral-600 min-mobile:group-hover:text-primary transition-colors duration-300 ease-out caption",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Contact</h4>

      {/* list */}
      <ul className={styles.list}>
        {contact.map((link, index) => (
          <li key={index}>
            <Tooltip placement="right" className={styles.tooltip} content={link.tooltip}>
              <a
                href={link.link}
                area-label={`Tracway's ${link.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.action}
              >
                {/* icon */}
                <span className={styles.actionIcon}>{link.icon}</span>
                {/* label */}
                <span className={styles.actionLabel}>{link.label}</span>
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuContact;
