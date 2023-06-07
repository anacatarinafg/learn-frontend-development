import React, { useRef, useEffect, useState } from 'react';
import './blogs.css';

const Blogs = () => {
    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Adjust the sliding speed 
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };
    const carouselItems = [
        {
            number: '01',
            image:
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '02',
            image:
                'https://d2fltix0v2e0sb.cloudfront.net/dev-rainbow.png',
            title: 'Dev',
            text:
                'A community-driven platform for developers to share articles, ask questions, and connect with fellow programmers.',
        },
        {
            number: '03',
            image:
                'https://cdn-icons-png.flaticon.com/512/23/23324.png',
            title: 'smashingmagazine',
            text:
                'A popular web development blog that covers coding techniques, design trends, and industry best practices.',
        },
        {
            number: '04',
            image:
                'https://i0.wp.com/css-tricks.com/wp-content/uploads/2013/06/CSS-Tricks-star.png',
            title: 'CSS Tricks',
            text:
                'A comprehensive resource for CSS tutorials, articles, and discussions.',
        },
        {
            number: '05',
            image:
                'https://cdn-icons-png.flaticon.com/512/23/23310.png',
            title: 'sitepoint',
            text:
                'Offers a wide range of web development tutorials, articles, and resources on various programming languages and frameworks.',
        },
        {
            number: '06',
            image:
                'https://avatars.githubusercontent.com/u/2035942?s=280&v=4',
            title: 'alistapart',
            text:
                'Focuses on web design and development, providing in-depth articles and insights from industry experts.',
        },
        {
            number: '07',
            image:
                'https://companieslogo.com/img/orig/DOCN-6eec72eb.png?t=1660638083',
            title: 'digitalocean',
            text:
                'Offers tutorials, articles, and courses on web development, covering topics like JavaScript, frameworks, and back-end technologies.',
        },

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Blog/news</h2>
                <p className="blogs__text">
                    Blogs with the most updated news about web development.
                </p>
                <ul className="blog__list">
                    <li className="blog__item">
                        <a href="" className="blog__link">Cheatsheets</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="" className="blog__link">Videos</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="" className="blog__link">Courses</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="/tools" className="blog__link">Tools</a>
                    </li>
                </ul>
            </section>
            <section
                className="blogs__carousel"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                ref={carouselRef}
            >
                <div className="carousel__wrapper">
                    {carouselItems.map((item, index) => (
                        <a
                            className={`carousel ${[1, 3, 5].includes(index) ? 'carousel__special' : ''}`}
                            key={index}
                        >
                            <span className="carousel__number">{item.number}</span>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="carousel__image"
                            />
                            <h3 className="carousel__title">{item.title}</h3>
                            <p className="carousel__text">{item.text}</p>
                        </a>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Blogs;



