import { Tooltip } from "@/material";
import Link from "next/link";

const FooterLinks = ({ variant = "navigation", label, links, containerStyles }) => {
  // footer link styles
  const styles = {
    container: containerStyles,
    label: "block label text-neutral-400 mobile:text-center mb-4 laptop:mb-2",

    navigation: {
      container: "flex flex-col",
      link: "inline-block caption text-neutral-600 hover:text-primary transition-colors duration-300 ease-out py-2 laptop:py-1",
    },

    external: {
      container: "flex flex-col gap-2 laptop:gap-1",
      tooltip: "bg-neutral-100 caption text-neutral-600",
      action:
        "group mobile:bg-neutral-100 rounded-lg flex items-center gap-2 mobile:gap-0 overflow-x-visible mobile:pr-1",
      actionIcon:
        "bg-neutral-100 rounded-lg text-base text-neutral-600 group-hover:text-primary transition-colors duration-300 ease-out p-4 laptop:p-3",
      actionLabel: "caption text-neutral-600 group-hover:text-primary transition-colors duration-300 ease-out",
    },
  };

  // footer link variants
  const variants = {
    navigation: (
      <ul className={styles.navigation.container}>
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.link} className={styles.navigation.link}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    ),

    external: (
      <ul className={styles.external.container}>
        {links.map((link, index) => (
          <li key={index}>
            <Tooltip className={styles.external.tooltip} content={link.tooltip}>
              <a
                href={link.link}
                area-label={`Tracway's ${link.title}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.external.action}
              >
                {/* icon */}
                <span className={styles.external.actionIcon}>{link.icon}</span>
                {/* label */}
                <span className={styles.external.actionLabel}>{link.label}</span>
              </a>
            </Tooltip>
          </li>
        ))}
      </ul>
    ),
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>{label}</h4>

      {/* list */}
      {variants[variant]}
    </div>
  );
};

export default FooterLinks;
