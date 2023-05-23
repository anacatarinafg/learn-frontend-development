import React from 'react';
import { BsFillCircleFill } from "react-icons/bs";
import Navbar from "../../Navbar/Navbar";
import "./slideshowjs.css";
import "../slideshowALL.css";

const Slideshow = () => {
  return (
    <>
      <Navbar />
      <article className='slideshow'>
        <section className='slideshow__identificator'>
          <span className='slideshow__numeration'>03</span>
          <span className='slideshow__dot'><BsFillCircleFill /></span>
          <span className='slideshow__language'>&lt;javascript/&gt;</span>
        </section>
        <section className='slideshow__information'>
          <h3 className='slideshow__hello'>CONSOLE.LOG(“HELLO, WORLD”)</h3>
          <p className='slideshow__paragraph'>JS: The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites. With its enchanting spells of logic and event handling, JS brings interactivity to life, captivating users and unlocking endless possibilities in the digital realm.</p>
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