"use client";

import { cn } from "@/utils/cn";
import useCarousel from "@/hooks/useCarousel";
import useDimension from "@/hooks/useDimension";
import Dots from "./Dots";

const CardSlider = ({ children, drag = false, containerStyles, dotStyles }) => {
  const { windowWidth } = useDimension();
  const { emblaRef, scrollSnaps, selectedIndex, dotNavigation } = useCarousel({
    dragFree: drag,
    align: windowWidth < 768 ? "center" : "start",
  });

  // card slider styles
  const styles = {
    container: cn("overflow-hidden mobile:overflow-visible", containerStyles),
    content: "flex touch-pan-y touch-pinch-zoom backface-hidden -ml-5",
    dots: cn("mt-5", dotStyles),
  };

  return (
    <div ref={emblaRef} className={styles.container}>
      {/* content */}
      <div className={styles.content}>{children}</div>
      {/* dots */}
      <Dots snaps={scrollSnaps} selected={selectedIndex} dotNavigation={dotNavigation} containerStyles={styles.dots} />
    </div>
  );
};

export default CardSlider;
