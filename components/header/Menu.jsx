"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useScrollPosition from "@/hooks/useScrollPosition";
import useFirefox from "@/hooks/useFirefox";
import MenuButton from "./MenuButton";
import MenuHeading from "./MenuHeading";
import MenuServices from "./MenuServices";
import MenuNavigation from "./MenuNavigation";
import MenuContact from "./MenuContact";
import MenuSocials from "./MenuSocials";

const Menu = ({ menuOpen, setMenuOpen }) => {
  const scrollY = useScrollPosition();
  const isFirefox = useFirefox();
  const pathname = usePathname();

  // close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // menu styles
  const styles = {
    container: "w-full h-full fixed inset-0 z-10 pointer-events-none",

    overlay: `
      w-full h-full bg-white/90 backdrop-blur backdrop-saturate-200 pointer-events-auto
      flex flex-col items-center justify-center absolute inset-0 transition-all duration-1000 ease-in-out
      ${
        isFirefox
          ? menuOpen
            ? "[clip-path:_inset(0%)]"
            : "[clip-path:_inset(0_0_100%)]"
          : menuOpen
          ? "[clip-path:_circle(100%)]"
          : "[clip-path:_circle(0%_at_100%_0%)]"
      }
    `,

    menu: {
      container: "content grid grid-cols-12 gap-10 laptop:gap-x-8 laptop:gap-y-4 mobile:gap-x-1 mobile:gap-y-5",
      services: "col-span-8 mobile:col-span-7",
      navigation: "col-span-3 col-start-10 mobile:col-span-5 mobile:col-start-auto",
      contact: "col-span-8 mobile:col-span-full",
      socials: "col-span-3 col-start-10 mobile:col-span-full mobile:-mt-4",
    },
  };

  return (
    <div className={styles.container}>
      {/* floating menu button */}
      <MenuButton scrollY={scrollY} setMenuOpen={setMenuOpen} />

      {/* overlay */}
      <div className={styles.overlay}>
        {/* heading */}
        <MenuHeading setMenuOpen={setMenuOpen} />

        {/* menu */}
        <div className={styles.menu.container}>
          {/* services */}
          <MenuServices containerStyles={styles.menu.services} />
          {/* navigation */}
          <MenuNavigation containerStyles={styles.menu.navigation} />
          {/* contact */}
          <MenuContact containerStyles={styles.menu.contact} />
          {/* socials */}
          <MenuSocials containerStyles={styles.menu.socials} />
        </div>
      </div>
    </div>
  );
};

export default Menu;
