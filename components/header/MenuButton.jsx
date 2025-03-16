import { Button } from "@/material";
import { VscMenu } from "react-icons/vsc";

const MenuButton = ({ scrollY, setMenuOpen }) => {
  // menu button styles
  const styles = {
    container: "w-fit h-fit absolute top-0 right-0 p-8 laptop:p-6 mobile:p-2",
    button: `
      group h-12 w-12 laptop:h-11 laptop:w-11 glass rounded-lg shadow-none hover:shadow-none pointer-events-auto p-0
      flex items-center justify-center will-change-transform transition-transform duration-300 ease-out
      ${scrollY < 200 ? "scale-0" : "scale-100"}
    `,
    icon: "text-xl text-black min-mobile:group-hover:opacity-60 transition-opacity duration-300 ease-out",
  };

  return (
    <div className={styles.container}>
      <Button className={styles.button} onClick={() => setMenuOpen(true)}>
        <VscMenu className={styles.icon} />
      </Button>
    </div>
  );
};

export default MenuButton;
