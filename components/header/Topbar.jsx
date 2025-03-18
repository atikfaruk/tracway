import Image from "next/image";
import Link from "next/link";
import { Button } from "@/material";
import { services } from "@/data/ServicesList";
import { navigation } from "@/data/Navigation";
import { BiChevronDown } from "react-icons/bi";
import { VscMenu } from "react-icons/vsc";
import NestedNav from "./NestedNav";

const Topbar = ({ setMenuOpen }) => {
  // topbar styles
  const styles = {
    container:
      "w-full h-fit flex items-center justify-between relative z-10 px-6 py-8 laptop:px-4 laptop:py-6 mobile:p-2",

    left: {
      container: "flex-1 tablet:flex-auto flex items-center justify-start",
      link: "px-4 py-2 mobile:p-3",
      logo: "w-fit h-8 laptop:h-7",
    },

    center: {
      container: "flex items-center justify-center mobile:hidden",
      item: "flex items-center",
      link: "h-12 laptop:h-11 label flex items-center justify-center gap-0 px-4",
    },

    right: {
      container: "flex-1 tablet:flex-auto flex items-center justify-end",
      button: "h-12 laptop:h-11 mobile:h-12 mobile:w-12 flex items-center justify-center gap-2 px-4 mobile:p-0",
      label: "label mobile:hidden",
      icon: "text-xl",
    },
  };

  return (
    <header className={styles.container}>
      {/* left */}
      <div className={styles.left.container}>
        {/* logo */}
        <Link href="/" className={styles.left.link}>
          <Image src="/logo-white.svg" alt="Tracway White Logo" height={32} width={160} className={styles.left.logo} />
        </Link>
      </div>

      {/* center */}
      <ul className={styles.center.container}>
        {/* services */}
        <li className={styles.center.item}>
          <NestedNav
            handler={
              <Button size="lg" variant="text" color="white" className={styles.center.link}>
                Services <BiChevronDown />
              </Button>
            }
            list={services}
            placement="bottom-start"
          />
        </li>
        {/* navigation */}
        {navigation.slice(1).map((nav, index) => (
          <li key={index} className={styles.center.item}>
            <Link href={nav.link}>
              <Button variant="text" color="white" className={styles.center.link}>
                {nav.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>

      {/* right */}
      <div className={styles.right.container}>
        {/* menu button */}
        <Button variant="text" color="white" onClick={() => setMenuOpen(true)} className={styles.right.button}>
          {/* label */}
          <span className={styles.right.label}>Menu</span>
          {/* icon */}
          <VscMenu className={styles.right.icon} />
        </Button>
      </div>
    </header>
  );
};

export default Topbar;
