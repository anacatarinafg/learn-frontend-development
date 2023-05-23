import React from 'react';
import { BsFillCircleFill } from "react-icons/bs";
import Navbar from "../../Navbar/Navbar";
import "./slideshowcss.css";
import "../slideshowALL.css";


const Slideshow = () => {
  return (
    <>
      <Navbar />
      <article className='slideshow'>
        <section className='slideshow__identificator'>
          <span className='slideshow__numeration'>02</span>
          <span className='slideshow__dot'><BsFillCircleFill /></span>
          <span className='slideshow__language'>/* css */</span>
        </section>
        <section className='slideshow__information'>
          <h3 className='slideshow__hello'>body &#123; background-color: #D366EE &#125;</h3>
          <p className='slideshow__paragraph'>CSS: The art of web enchantment. It weaves spells of style, color, and layout, transforming plain HTML into captivating visual experiences. With CSS, you become a design sorcerer, casting magic that captivates and delights users in the mesmerizing realm of the web.</p>
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