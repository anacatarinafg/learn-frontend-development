import React from "react";
import Navbar from "./Navbar/Navbar";
import Hamburger from "./Hamburger/Hamburger";

const Layout = ({ children, showNavbar = true }) => {
  return (
    <div className="layout">
      <header>
        {showNavbar && <Navbar />}
        <Hamburger />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;