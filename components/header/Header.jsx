"use client";

import { useState } from "react";
import NextTopLoader from "nextjs-toploader";
import Preloader from "./Preloader";
import Topbar from "./Topbar";
import Menu from "./Menu";
import TravelBooking from "./TravelBooking";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* preloader */}
      <Preloader />
      {/* loader */}
      <NextTopLoader color="#020617" shadow="0" height={4} showSpinner={false} />
      {/* topbar */}
      <Topbar setMenuOpen={setMenuOpen} />
      {/* menu */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      {/* travel booking  */}
      <TravelBooking />
    </>
  );
};

export default Header;
