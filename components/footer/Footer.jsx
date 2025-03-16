import { navigation } from "@/data/Navigation";
import { services } from "@/data/Services";
import { contact } from "@/data/Contact";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import FooterIntro from "./FooterIntro";

const Footer = () => {
  // footer styles
  const styles = {
    container: "w-full h-fit content grid-12",
    content: "col-span-8 col-start-3 tablet:col-span-full grid-12 mobile:gap-6 mb-2",

    intro: "col-span-5 mobile:col-span-full mobile:flex mobile:flex-col mobile:items-center",
    services: "col-span-2 mobile:hidden",
    navigation: "col-span-2 mobile:hidden",
    contact: "col-span-3 mobile:col-span-full mobile:p-4 mobile:rounded-xl mobile:bg-neutral-100",

    legal:
      "col-span-8 col-start-3 tablet:col-span-full tablet:col-start-1 mobile:flex mobile:flex-col-reverse border-t border-neutral-200 flex justify-between items-center py-6 laptop:py-4 mobile:pt-3 mobile:pb-4",
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
        <FooterLinks variant="navigation" label="Services" links={services} containerStyles={styles.services} />
        {/* navigation */}
        <FooterLinks variant="navigation" label="Navigation" links={navigation} containerStyles={styles.navigation} />
        {/* contact */}
        <FooterLinks variant="external" label="Contact" links={contact} containerStyles={styles.contact} />
      </div>

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
