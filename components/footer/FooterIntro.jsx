import { IconButton, Tooltip } from "@/material";
import { SocialList } from "@/data/SocialList";
import Image from "next/image";
import Link from "next/link";

const FooterIntro = ({ containerStyles }) => {
  // footer intro styles
  const styles = {
    container: containerStyles,
    logo: "inline-block w-fit h-10 laptop:h-9 mobile:h-8 mb-4 laptop:mb-3",
    slogan: "caption text-neutral-600 mb-8 laptop:mb-6 mobile:hidden",
    socials: "flex gap-2 mobile:gap-1 items-center",
    tooltip: "bg-neutral-100 caption text-neutral-600",
    social: "bg-neutral-100 shadow-none hover:shadow-none rounded-lg text-xl text-neutral-600 hover:text-primary",
  };

  return (
    <div className={styles.container}>
      {/* logo */}
      <Link href="/">
        <Image src="/logo.svg" alt="Tracway Logo" height={40} width={200} className={styles.logo} />
      </Link>

      {/* slogan */}
      <h4 className={styles.slogan}>From Dream to Destination</h4>

      {/* socials */}
      <ul className={styles.socials}>
        {SocialList.map((social, index) => (
          <li key={index}>
            <a href={social.link} area-label={`Tracway's ${social.title}`} target="_blank" rel="noopener noreferrer">
              <Tooltip className={styles.tooltip} content={social.title}>
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

export default FooterIntro;
