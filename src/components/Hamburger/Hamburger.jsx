import React, { useEffect } from 'react';
import { gsap, Expo } from 'gsap';
import './hamburger.css';
import { GrFormClose } from 'react-icons/gr';
import { HiMenu } from 'react-icons/hi';

const Hamburger = () => {
  useEffect(() => {
    let closeMenu = document.querySelector('.menu-close');
    var t1 = gsap.timeline({ paused: true });

    t1.to('.navbar__hamburgerOpened', 1, {
      left: 0,
      ease: Expo.easeInOut,
    });

    t1.staggerFrom(
      '.menu > div',
      0.8,
      { y: 100, opacity: 1, ease: Expo.easeOut },
      '0.1',
      '-=0.4'
    );

    t1.staggerFrom(
      '.navbar__socials > a',
      0.8,
      { y: 100, opacity: 1, ease: Expo.easeOut },
      '0.4',
      '-=0.6'
    );

    t1.reverse();

    const handleMenuOpen = () => {
      t1.reversed(!t1.reversed());
      closeMenu.style.display = 'block';
    };

    const handleMenuClose = () => {
      t1.reversed(!t1.reversed());
      closeMenu.style.display = 'none';
    };

    document.querySelector('.menu-open').addEventListener('click', handleMenuOpen);
    document.querySelector('.menu-close').addEventListener('click', handleMenuClose);

    // Clean up event listeners
    return () => {
      document.querySelector('.menu-open').removeEventListener('click', handleMenuOpen);
      document.querySelector('.menu-close').removeEventListener('click', handleMenuClose);
    };
  }, []);

  return (
    <>

      <div className="navbar__button menu-open" id="toggle-btn">
        <div className="navbar__buttonOutline navbar__buttonOutline--1"></div>
        <div className="navbar__buttonOutline navbar__buttonOutline--2"></div>
          <span className='navbar__hamburgerIcon'><HiMenu /></span>
      </div>
      <div className="navbar__hamburgerOpened">
        <div className="navbar__button menu-close">
          <div className="navbar__buttonOutline navbar__buttonOutline--1"></div>
          <div className="navbar__buttonOutline navbar__buttonOutline--2"></div>
          <div className="hamburger">
          <span className='navbar__hamburgerIcon'><GrFormClose /></span>
          </div>
        </div>
        <div className="navbar__socials">
          <a href="https://github.com/anacatarinafg" target="_blank" className="navbar__link">
            github
          </a>
          <a href="https://twitter.com/anacatarinafg" target="_blank" className="navbar__link">
            twitter
          </a>
          <a href="https://www.linkedin.com/in/ana-catarina-b87b75236/" target="_blank" className="navbar__link">
            linkedin
          </a>
        </div>
        <nav className="menu">
          <div className="menu__item">
            <a href="/" className="menu__link">Index</a>
            <div className="marquee">
              <div className="marquee__inner">
                <span>Index — Index — Index — Index — Index — Index — Index</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="/" className="menu__link">Docs</a>
            <div className="marquee">
              <div className="marquee__inner">
                <span>Docs — Docs — Docs — Docs — Docs — Docs — Docs</span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="/resources" className="menu__link">Resources</a>
            <div className="marquee">
              <div className="marquee__inner">
                <span>
                  Resources — Resources — Resources — Resources — Resources — Resources — Resources
                </span>
              </div>
            </div>
          </div>
          <div className="menu__item">
            <a href="/contact" className="menu__link">Contact</a>
            <div className="marquee">
              <div className="marquee__inner">
                <span>Contact — Contact — Contact — Contact — Contact — Contact — Contact</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Hamburger;