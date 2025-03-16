"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import useScrollPosition from "@/hooks/useScrollPosition";
import useFirefox from "@/hooks/useFirefox";
import MenuServices from "./MenuServices";
import MenuButton from "./MenuButton";
import MenuHeading from "./MenuHeading";
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
      w-full h-full bg-white flex flex-col items-center justify-center absolute inset-0 pointer-events-auto transition-all duration-1000 ease-in-out
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
      container: "content grid-12",
      wrapper: "col-span-8 col-start-3 laptop:col-span-full grid-12 laptop:!gap-4 px-2 mobile:px-0",
      services: "col-span-8 mobile:col-span-7",
      navigation: "col-span-3 col-start-10 mobile:col-span-4 mobile:col-start-9 mobile:mb-4",
      divider: "col-span-full w-full h-px bg-neutral-200 mobile:hidden",
      contact: "col-span-8 mobile:col-span-full mobile:p-4 mobile:rounded-xl mobile:bg-neutral-100 mobile:mb-4",
      socials: "col-span-3 col-start-10 mobile:col-span-full",
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
          {/* wrapper */}
          <div className={styles.menu.wrapper}>
            {/* services */}
            <MenuServices containerStyles={styles.menu.services} />
            {/* navigation */}
            <MenuNavigation containerStyles={styles.menu.navigation} />
            {/* divider */}
            <div className={styles.menu.divider} />
            {/* contact */}
            <MenuContact containerStyles={styles.menu.contact} />
            {/* socials */}
            <MenuSocials containerStyles={styles.menu.socials} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
