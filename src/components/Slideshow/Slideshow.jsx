import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillCircleFill } from "react-icons/bs";
import Navbar from "../../Navbar/Navbar";
import "./slideshow.css";

const Slideshow = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <article className='slideshow'>
                <section className='slideshow__identificator'>
                    <span className='slideshow__numeration'>01</span>
                    <span className='slideshow__dot'><BsFillCircleFill /></span>
                    <span className='slideshow__language'>&lt;html/&gt;</span>
                </section>
                <section className='slideshow__information'>
                    <h3 className='slideshow__hello'>&lt;h1&gt;Hello world&lt;/h1&gt;</h3>
                    <p className='slideshow__paragraph'>HTML: The wizardry of the web. It transforms code into captivating pages, where text, images, and links unite. With HTML as your guide, you possess the sorcery to conjure immersive digital realms that leave an indelible mark on those who wander through them.</p>
                    <button className='slideshow__button' type='button'>docs</button>
                </section>
                <section className='slideshow__changeSlide'>
                    <button className='slideshow__slide' type='button'></button>
                    <button className='slideshow__slide' type='button'></button>
                    <button className='slideshow__slide' type='button'></button>
                </section>
            </article>
        </>

    )
}

export default Slideshow