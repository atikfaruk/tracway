"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => setLoading(false), []);

  // preloader variants
  const variants = {
    open: { opacity: 1 },
    closed: { opacity: 0 },
  };

  // preloader styles
  const styles = {
    container: "w-full h-full bg-primary fixed inset-0 z-[100] grid place-items-center pb-[2%]",
    intro: `h-20 laptop:h-16 mobile:h-14`,
  };

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial="open"
          animate="closed"
          exit="closed"
          transition={{ duration: 0.6, delay: 2.4, ease: "easeInOut" }}
          variants={variants}
          className={styles.container}
        >
          <object type="image/svg+xml" data="/intro.svg" className={styles.intro} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
