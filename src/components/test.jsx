import React, { useState, useEffect } from "react";
import "../components/Slideshow/slideshow.css";
import Navbar from "../components/Navbar/Navbar";
import { BsFillCircleFill } from "react-icons/bs";

const Test = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState("#7166EE");

  const handleSlideChange = (slideIndex) => {
    setCurrentSlide(slideIndex);
    setBackgroundColor(slides[slideIndex].backgroundColor);
  };

  const slides = [
    {
      id: 1,
      slideId: 1,
      number: "01",
      language: "<html/>",
      example: "<h1>Hello world</h1>",
      paragraph:
        "HTML: The wizardry of the web. It transforms code into captivating pages, where text, images, and links unite. With HTML as your guide, you possess the sorcery to conjure immersive digital realms that leave an indelible mark on those who wander through them.",
      backgroundColor: "#7166EE",
    },
    {
      id: 2,
      slideId: 2,
      number: "02",
      language: "/* css */",
      example: "body { background-color: #D366EE }",
      paragraph:
        "CSS: The art of web enchantment. It weaves spells of style, color, and layout, transforming plain HTML into captivating visual experiences. With CSS, you become a design sorcerer, casting magic that captivates and delights users in the mesmerizing realm of the web.",
      backgroundColor: "#DB66EE",
    },
    {
      id: 3,
      slideId: 3,
      number: "03",
      language: "<javascript/>",
      example: "CONSOLE.LOG(“HELLO, WORLD”)",
      paragraph:
        "JS: The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites. With its enchanting spells of logic and event handling, JS brings interactivity to life, captivating users and unlocking endless possibilities in the digital realm.",
      backgroundColor: "#EED066",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlideIndex = (currentSlide + 1) % slides.length;
      setCurrentSlide(nextSlideIndex);
      setBackgroundColor(slides[nextSlideIndex].backgroundColor);
    }, 3000);

    const handleClick = () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };

    document.addEventListener("click", handleClick);

    return () => {
      clearInterval(interval);
      document.removeEventListener("click", handleClick);
    };
  }, [currentSlide, slides]);

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor;
    return () => {
      // Clean up the background color when the component unmounts
      document.body.style.backgroundColor = "";
    };
  }, [backgroundColor]);

  return (
    <>
      <Navbar />
      <article
        className="slideshow"
        style={{ backgroundColor, height: "100vh" }}
      >
        <section className="slideshow__identificator">
          <span className="slideshow__numeration">
            {slides[currentSlide].number}
          </span>
          <span className="slideshow__dot">
            <BsFillCircleFill />
          </span>
          <span className="slideshow__language">
            {slides[currentSlide].language}
          </span>
        </section>
        <section className="slideshow__information">
          <h3 className="slideshow__hello">{slides[currentSlide].example}</h3>
          <p className="slideshow__paragraph">
            {slides[currentSlide].paragraph}
          </p>
          <button className="slideshow__button" type="button">
            docs
          </button>
        </section>
        <section className="slideshow__changeSlide">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slideshow__slide ${
                currentSlide === index ? "active" : ""
              }`}
              type="button"
              onClick={() => handleSlideChange(index)}
            ></button>
          ))}
        </section>
      </article>
    </>
  );
};

export default Test;
