import React, { useEffect, useRef } from "react";
import "./navbar.css";

const Navbar = () => {
  let logo = useRef(null);


  return (
    <header>
      <nav className="navbar">
        <span></span>
        <h2 className="navbar__headline">hands-on-learning</h2>
      </nav>
    </header>
  );
};

export default Navbar;
