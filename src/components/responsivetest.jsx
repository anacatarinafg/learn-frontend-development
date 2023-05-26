import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { CSSRulePlugin } from 'gsap/all';
import './responsivetest.css';

const Responsivetest = () => {
    const tl = useRef(gsap.timeline({ paused: true })).current;
    const spanBefore = useRef(null);
    const path = useRef(null);

    useEffect(() => {
        spanBefore.current = CSSRulePlugin.getRule('hamburger span:before');
        gsap.set(spanBefore.current, { background: '#000' });
        gsap.set('.navbar__menu', { visibility: 'hidden' });
    }, []);

    const revealMenu = () => {
        revealMenuItems();

        const hamburger = document.getElementById('hamburger');
        const toggleBtn = document.getElementById('toggle-btn');

        toggleBtn.onclick = function (e) {
            hamburger.classList.toggle('active');
            tl.reversed(!tl.reversed());
        };
    };

    const revealMenuItems = () => {
        const start = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const end = 'M0,1005S175,995,500,995s500, 5, 500, 5V0H0Z';

        const power2 = 'power2.inOut';
        const power4 = 'power4.inOut';

        tl.to('#hamburger', 1.25, {
            marginTop: '-5px',
            x: -40,
            y: 40,
            ease: power4,
        });
        tl.to('#hamburger span', 1, {
            background: '#e2e2dc',
            ease: power2,
        }, '<');
        tl.to(spanBefore.current, 1, {
            background: '#e2e2dc',
            ease: power2,
        }, '<');
        tl.to('.navbar__button .navbar__buttonOutline', 1.25, {
            x: -40,
            y: 40,
            width: '140px',
            height: '140px',
            border: '1px solid #e2e2dc',
            ease: power4,
        }, '<');
        tl.to(path.current, 0.8, {
            attr: {
                d: start,
            },
            ease: 'power2.inOut', // Updated from Power2.easeIn
        }, '<').to(path.current, 0.8, {
            attr: {
                d: end,
            },
            ease: 'power2.inOut', // Updated from Power2.easeIn
        }, '-0.5');

        tl.to('.navbar__menu', 1, {
            visibility: 'visible',
        }, '-=0.5');
        tl.to('.menu__item > a', 1, {
            top: 0,
            ease: 'power3.out',
            stagger: {
                amount: 0.5,
            },
        }, '-=1').reverse();
    };

    useEffect(() => {
        revealMenu();
    }, []);

    return (
        <>
            {/* Toggle button */}
            <div className="navbar__button" id="toggle-btn">
                <div className="navbar__buttonOutline navbar__buttonOutline--1"></div>
                <div className="navbar__buttonOutline navbar__buttonOutline--2"></div>
                <div id="hamburger">
                    <span></span>
                </div>
            </div>

            {/* Svg overlay */}
            <div>
                <svg className="navbar__overlay">
                    <path ref={path} d="M0 2S175 1 500 1s500 1 500 1V0H0Z"></path>
                </svg>
            </div>

            {/* Menu items */}
            <div className="navbar__menu">
                <div className="menu__primary">
                    <h1 className="menu__title">Purity of noise</h1>
                    <div className="menu__container">
                        <div className="menu__wrapper">
                            <div className="menu__item">
                                <a href="">
                                    <span>I</span>Index
                                </a>
                                <div className="menu__item--revealer"></div>
                            </div>
                            <div className="menu__item">
                                <a href="">
                                    <span>II</span>Work
                                </a>
                                <div className="menu__item--revealer"></div>
                            </div>
                            <div className="menu__item">
                                <a href="">
                                    <span>III</span>About
                                </a>
                                <div className="menu__item--revealer"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="menu__secondary">
                    <div className="menu__container">
                        <div className="menu__wrapper">
                            <div className="menu__item">
                                <a href="">Speaker</a>
                                <div className="menu__item--revealer"></div>
                            </div>
                            <div className="menu__item">
                                <a href="">Blog</a>
                                <div className="menu__item--revealer"></div>
                            </div>
                            <div className="menu__item">
                                <a href="">Contact</a>
                                <div className="menu__item--revealer"></div>
                            </div>
                        </div>
                        <div className="menu__wrapper">
                            <div className="menu__item">
                                <a href="">Credits</a>
                                <div className="menu__item--revealer"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Responsivetest;