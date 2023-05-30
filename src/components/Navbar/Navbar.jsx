import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./navbar.css";

const Navbar = () => {
  let logo = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline();
    const animation = gsap.from(logo.current, {
      delay: 0.5,
      duration: 1,
      opacity: 0,
      y: 50,
      immediateRender: false,
    });

    timeline.add(animation);

    // Set the final state of the logo after the animation completes
    timeline.add(() => {
      gsap.set(logo.current, {
        opacity: 1,
        y: 0,
      });
    });
  }, []);

  return (
    <header>
      <nav className="navbar" ref={(el) => (logo.current = el)}>
        <span></span>
        <h2 className="navbar__headline">hands-on-learning</h2>
      </nav>
    </header>
  );
};

export default Navbar;
