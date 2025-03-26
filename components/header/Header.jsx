"use client";

import { Suspense, useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Preloader from "./Preloader";
import Topbar from "./Topbar";
import Menu from "./Menu";
import TravelBooking from "./TravelBooking";
import { Spinner } from "@material-tailwind/react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* preloader */}
      <Preloader />
      {/* loader */}
      <NextTopLoader color="#3b82f6" shadow="0" height={4} showSpinner={false} />
      {/* topbar */}
      <Topbar setMenuOpen={setMenuOpen} />
      {/* menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* travel booking  */}
      <Suspense
        fallback={
          <div className="w-full flex justify-center items-center">
            <Spinner color="blue" />
          </div>
        }
      >
        <TravelBooking />
      </Suspense>
    </>
  );
};

export default Header;
