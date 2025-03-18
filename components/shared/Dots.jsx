import { Radio } from "@/material";
import { cn } from "@/utils/cn";

const Dots = ({ snaps, selected, dotNavigation, containerStyles }) => {
  // dots styles
  const styles = {
    container: cn("flex justify-center", containerStyles),
    dot: "border-none before:hidden",
    dotContainer: "group p-1",
    dotIcon:
      "[&>svg]:w-3 [&>svg]:h-3 text-neutral-200 group-hover:text-neutral-300 peer-checked:text-black opacity-100 [&>svg]:transition-all [&>svg]:duration-300 [&>svg]:ease-out",
  };

  return (
    <div className={styles.container}>
      {snaps.map((_, index) => (
        <Radio
          key={index}
          checked={index === selected}
          onChange={() => dotNavigation(index)}
          className={styles.dot}
          containerProps={{ className: styles.dotContainer }}
          iconProps={{
            className: styles.dotIcon,
          }}
        />
      ))}
    </div>
  );
};

export default Dots;
