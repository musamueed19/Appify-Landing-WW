'use client'

import { useState } from "react";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

export default function ResponsiveNav() {

  const [showNav, setShowNav] = useState(false);

  const handleShowNav = () => {
    setShowNav(true);
  }

  const handleCloseNav = () => {
    setShowNav(false);
  }

  return (
    <div className="">

      {/* Desktop Nav */}
      <Nav openNav = {handleShowNav} />

      {/* Mobile View - Nav */}
      <MobileNav showNav={showNav} closeNav={handleCloseNav} />

    </div>
  )
}
