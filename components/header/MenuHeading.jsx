import { VscChromeClose } from "react-icons/vsc";
import { Button } from "@/material";
import Image from "next/image";
import Link from "next/link";

const MenuHeading = ({ setMenuOpen }) => {
  // menu heading styles
  const styles = {
    container:
      "w-full h-fit flex items-center justify-between absolute top-0 px-6 py-8 laptop:px-4 laptop:py-6 mobile:p-2 pointer-events-none",

    link: "px-4 py-2 mobile:p-3",
    logo: "w-fit h-8 laptop:h-7 mobile:h-6 pointer-events-auto",

    close: {
      button:
        "h-12 laptop:h-11 mobile:h-12 mobile:w-12 flex items-center justify-center gap-2 px-4 mobile:p-0 pointer-events-auto",
      label: "label mobile:hidden",
      icon: "text-xl",
    },
  };

  return (
    <div className={styles.container}>
      {/* logo */}
      <Link href="/" className={styles.link}>
        {/* logo */}
        <Image src="/logo.svg" alt="Tracway Logo" height={32} width={160} className={styles.logo} />
      </Link>

      {/* close button */}
      <Button variant="text" color="black" className={styles.close.button} onClick={() => setMenuOpen(false)}>
        {/* label */}
        <span className={styles.close.label}>Close</span>
        {/* icon */}
        <VscChromeClose className={styles.close.icon} />
      </Button>
    </div>
  );
};

export default MenuHeading;
