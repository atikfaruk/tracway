"use client";

import useFirefox from "@/hooks/useFirefox";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import { VscChromeClose } from "react-icons/vsc";

const TravelBooking = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const isFirefox = useFirefox();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const service = searchParams.get("service");

  // toggle modal based on service
  useEffect(() => {
    setMenuOpen(service === "travel");
  }, [service]);

  // change route on menu close
  useEffect(() => {
    if (!menuOpen) {
      router.replace(pathname, { scroll: false });
    }
  }, [menuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const iframe = document.getElementById("tp-white-label");
    if (!iframe) return;

    iframe.onload = () => {
      iframe.contentWindow?.postMessage("updateLinks", "https://travel.tracway.com.bd");
    };
  }, []);

  // menu styles
  const styles = {
    container: "w-full h-full fixed inset-0 z-50 pointer-events-none",

    heading: {
      container:
        "w-full h-fit flex items-center justify-end absolute top-0 z-10 px-6 py-8 laptop:px-4 laptop:py-6 mobile:p-2 pointer-events-none",
      button:
        "h-12 laptop:h-11 mobile:h-12 mobile:w-12 flex items-center justify-center gap-2 px-4 mobile:p-0 pointer-events-auto",
      label: "label mobile:hidden",
      icon: "text-xl",
    },

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
      container: "w-full h-full",
    },
  };

  return (
    <div className={styles.container}>
      {/* overlay */}
      <div className={styles.overlay}>
        {/* heading */}
        <div className={styles.heading.container}>
          {/* close button */}
          <Button color="white" className={styles.heading.button} onClick={() => setMenuOpen(false)}>
            {/* label */}
            <span className={styles.heading.label}>Close</span>
            {/* icon */}
            <VscChromeClose className={styles.heading.icon} />
          </Button>
        </div>

        {/* menu */}
        <div className={styles.menu.container}>
          <iframe
            id="tp-white-label"
            src="https://travel.tracway.com.bd"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default TravelBooking;
