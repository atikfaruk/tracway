"use client";

import { useState } from "react";
import Preloader from "./Preloader";
import NextTopLoader from "nextjs-toploader";
import Topbar from "./Topbar";
import Menu from "./Menu";

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
    </>
  );
};

export default Header;
