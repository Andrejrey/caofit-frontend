import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <div>
      <DesktopNavbar className="hidden md:block" />{" "}
      <Navbar className="block md:hidden" />
    </div>
  );
}

export default Header;
