import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./navbar.css";

const Navbar = ({ timeline }) => {
  let logo = useRef(null);

  useEffect(() => {
    const animation = gsap.from(logo, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 50,
      immediateRender: false, // Prevents the animation from reverting to initial state
    });

    timeline.add(animation);

    // Set the final state of the logo after the animation completes
    timeline.add(() => {
      gsap.set(logo, {
        opacity: 1,
        y: 0,
      });
    });
  }, []);

  return (
    <header>
      <nav className="navbar" ref={(el) => (logo = el)}>
        <span></span>
        <h2 className="navbar__headline">hands-on-learning</h2>
      </nav>
    </header>
  );
};

export default Navbar;
