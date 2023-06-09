import React, { useRef, useEffect, useState } from 'react';
import '../Blogs/blogs.css';

const Videos = () => {
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
    const videoItems = [
        {
            number: '01',
            image:
                '',
            title: '',
            text:
                '',
        },
        {
            number: '02',
            image:
                '',
            title: '',
            text:
                '',
        },
        {
            number: '03',
            image:
                '',
            title: '',
            text:
                '',
        },
        {
            number: '04',
            image:
                '',
            title: '',
            text:
                ' ',
        },
        {
            number: '05',
            image:
                '',
            title: '',
            text:
                '',
        },
        {
            number: '06',
            image:
                '',
            title: '',
            text:
                '',
        },
        {
            number: '07',
            image:
                '',
            title: '',
            text:
                '',
        },

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Videos to learn</h2>
                <p className="blogs__text">
                    These generators can save you time and effort by providing ready-made design assets.
                </p>
                <ul className="blog__list">
                    <li className="blog__item">
                        <a href="/cheatsheets" className="blog__link">Cheatsheets</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="/courses" className="blog__link">Courses</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="/tools" className="blog__link">Tools</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="/blogs" className="blog__link">Blogs</a>
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
                    {videoItems.map((item, index) => (
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

export default Videos;



