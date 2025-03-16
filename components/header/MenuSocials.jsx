import { socials } from "@/data/Socials";
import { IconButton, Tooltip } from "@/material";

const MenuSocials = ({ containerStyles }) => {
  // menu socials styles
  const styles = {
    container: containerStyles,
    label: "label text-neutral-500 pb-4 laptop:pb-2 mobile:hidden",
    socials: "flex gap-2 items-center mobile:justify-center",
    tooltip: "bg-neutral-100 caption text-neutral-500",
    social: "bg-neutral-100 shadow-none hover:shadow-none rounded-lg text-xl text-neutral-500 hover:text-primary",
  };

  return (
    <div className={styles.container}>
      {/* label */}
      <h4 className={styles.label}>Socials</h4>

      {/* list */}
      <ul className={styles.socials}>
        {socials.map((social, index) => (
          <li key={index}>
            <a href={social.link} area-label={`Tracway's ${social.title}`} target="_blank" rel="noopener noreferrer">
              <Tooltip placement="bottom" className={styles.tooltip} content={social.title}>
                <IconButton variant="filled" color="white" className={styles.social}>
                  {social.icon}
                </IconButton>
              </Tooltip>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSocials;
