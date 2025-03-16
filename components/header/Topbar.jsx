import Image from "next/image";
import Link from "next/link";
import { Button } from "@/material";
import { VscMenu } from "react-icons/vsc";
import { services } from "@/data/Services";
import { BiChevronDown } from "react-icons/bi";
import Dropdown from "./Dropdown";
import { navigation } from "@/data/Navigation";

const Topbar = ({ setMenuOpen }) => {
  // topbar styles
  const styles = {
    container: "w-full h-fit absolute top-0 z-10",
    content: "content flex items-center justify-between p-8 laptop:p-6 mobile:p-2",

    left: {
      container: "flex-1 tablet:flex-auto flex items-center justify-start",
      logo: "h-12 laptop:h-11 p-2",
    },

    center: {
      container: "flex items-center justify-center gap-4 laptop:gap-2 mobile:hidden",
      item: "flex items-center",
      link: "h-12 laptop:h-11 label !font-medium text-white min-mobile:hover:opacity-60 flex justify-center items-center transition-opacity duration-300 ease-out p-2",
    },

    right: {
      container: "flex-1 tablet:flex-auto flex items-center justify-end",
      button:
        "h-12 laptop:h-11 bg-transparent border-none rounded-lg shadow-none hover:shadow-none min-mobile:hover:opacity-60 flex items-center justify-center gap-2 p-2",
      label: "label !font-medium normal-case text-white mobile:hidden",
      icon: "text-xl text-white",
    },
  };

  return (
    <nav className={styles.container}>
      {/* content */}
      <div className={styles.content}>
        {/* left */}
        <div className={styles.left.container}>
          {/* logo */}
          <Link href="/" className={styles.left.logo}>
            <Image src="/logo-white.svg" alt="Tracway White Logo" height={32} width={160} />
          </Link>
        </div>

        {/* center */}
        <ul className={styles.center.container}>
          {/* services */}
          <li className={styles.center.item}>
            <Dropdown
              handler={
                <span className={styles.center.link}>
                  Services <BiChevronDown />
                </span>
              }
              list={services}
              placement="bottom-start"
            />
          </li>
          {/* navigation */}
          {navigation.slice(1).map((nav, index) => (
            <li key={index} className={styles.center.item}>
              <Link href={nav.link} className={styles.center.link}>
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* right */}
        <div className={styles.right.container}>
          {/* menu button */}
          <Button className={styles.right.button} onClick={() => setMenuOpen(true)}>
            {/* label */}
            <span className={styles.right.label}>Menu</span>
            {/* icon */}
            <VscMenu className={styles.right.icon} />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
