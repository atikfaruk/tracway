import { NavigationList } from "@/data/NavigationList";
import { ServiceList } from "@/data/ServiceList";
import { ContactList } from "@/data/ContactList";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterIntro from "./FooterIntro";

const Footer = () => {
  // footer styles
  const styles = {
    container: "content",

    content: "grid grid-cols-12 gap-10 laptop:gap-8 mobile:gap-5",
    intro: "col-span-5 tablet:col-span-4 mobile:col-span-full mobile:flex mobile:flex-col mobile:items-center",
    services: "col-span-2 mobile:hidden",
    navigation: "col-span-2 mobile:hidden",
    contact: "col-span-3 tablet:col-span-4 mobile:col-span-full",

    divider: "w-full h-px bg-neutral-300 mt-6 mb-4 laptop:mt-5 laptop:mb-3",

    legal: "mobile:flex mobile:flex-col-reverse flex justify-between items-center pb-4 laptop:pb-3 mobile:pb-5",
    copyright: "caption text-neutral-600",
    terms:
      "inline-block caption text-neutral-600 hover:text-primary transition-colors duration-300 ease-out py-2 laptop:py-1",
  };

  return (
    <footer className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* intro */}
        <FooterIntro containerStyles={styles.intro} />
        {/* services */}
        <FooterLinks variant="navigation" label="Services" links={ServiceList} containerStyles={styles.services} />
        {/* navigation */}
        <FooterLinks
          variant="navigation"
          label="Navigation"
          links={NavigationList}
          containerStyles={styles.navigation}
        />
        {/* contact */}
        <FooterLinks variant="external" label="Contact" links={ContactList} containerStyles={styles.contact} />
      </div>

      {/* divider */}
      <div className={styles.divider}></div>

      {/* legal */}
      <div className={styles.legal}>
        {/* copyright */}
        <span className={styles.copyright}>&copy; 2025 Tracway. All Rights Reserved</span>
        {/* terms */}
        <Link href="/terms" className={styles.terms}>
          Terms & Conditions
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
