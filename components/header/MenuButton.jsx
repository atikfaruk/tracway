import { Button } from "@/material";
import { VscMenu } from "react-icons/vsc";

const MenuButton = ({ scrollY, setMenuOpen }) => {
  // menu button styles
  const styles = {
    container: "w-fit h-fit absolute top-0 right-0 p-6 laptop:p-4 mobile:p-2",
    button: `
      group w-fit h-fit bg-white/90 backdrop-blur backdrop-saturate-200 shadow-none hover:shadow-none pointer-events-auto p-4 mobile:p-3
      will-change-transform transition-transform duration-300 ease-out
      ${scrollY < 120 ? "scale-0" : "scale-100"}
    `,
    icon: "text-xl text-black min-mobile:group-hover:text-black/50 transition-colors duration-300 ease-out",
  };

  return (
    <div className={styles.container}>
      <Button color="white" onClick={() => setMenuOpen(true)} className={styles.button}>
        <VscMenu className={styles.icon} />
      </Button>
    </div>
  );
};

export default MenuButton;
