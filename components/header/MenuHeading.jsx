import { VscChromeClose } from "react-icons/vsc";
import { Button } from "@/material";
import Image from "next/image";
import Link from "next/link";

const MenuHeading = ({ setMenuOpen }) => {
  // menu heading styles
  const styles = {
    container: "content flex justify-between items-center absolute top-0 p-8 laptop:p-6 mobile:p-2 pointer-events-none",
    logo: "w-fit h-12 laptop:h-11 p-2 pointer-events-auto",
    close: {
      button:
        "h-12 laptop:h-11 bg-transparent border-none rounded-lg shadow-none hover:shadow-none min-mobile:hover:opacity-60 flex items-center justify-center gap-2 px-2 pointer-events-auto",
      label: "label normal-case text-black",
      icon: "text-xl text-black",
    },
  };

  return (
    <div className={styles.container}>
      {/* logo */}
      <Link href="/" className={styles.logo}>
        {/* logo */}
        <Image src="/logo.svg" alt="Tracway Logo" height={32} width={160} />
      </Link>

      {/* close button */}
      <Button color="white" className={styles.close.button} onClick={() => setMenuOpen(false)}>
        {/* label */}
        <span className={styles.close.label}>Close</span>
        {/* icon */}
        <VscChromeClose className={styles.close.icon} />
      </Button>
    </div>
  );
};

export default MenuHeading;
