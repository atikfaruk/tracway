"use client";

import { ReactLenis } from "lenis/react";

const Providers = ({ children }) => {
  return (
    <ReactLenis root options={{ wheelMultiplier: 1.2 }}>
      {children}
    </ReactLenis>
  );
};

export default Providers;
