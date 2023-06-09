import React, { useRef, useEffect, useState } from 'react';
import '../Blogs/blogs.css';

const Courses = () => {
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
    const coursesItems = [
        {
            number: '01',
            image:
                '',
            title: 'Intro to HTML/CSS: Making Webpages - Khan Academy',
            text:
                'Interactive course teaching HTML and CSS through hands-on projects.',
        },
        {
            number: '02',
            image:
                '',
            title: 'Responsive Web Design Certification - freeCodeCamp.org',
            text:
                'Comprehensive web development curriculum with real-world projects.',
        },
        {
            number: '03',
            image:
                '',
            title: 'Web Development Bootcamp - Colt Steele',
            text:
                'Comprehensive course covering HTML, CSS, JavaScript, and popular frameworks.',
        },
        {
            number: '04',
            image:
                '',
            title: 'The Net Ninja Web Development Playlist - The Net Ninja',
            text:
                'Video series covering HTML, CSS, JavaScript, and popular frameworks.',
        },
        {
            number: '05',
            image:
                '',
            title: 'Web Development Fundamentals - Code.org',
            text:
                'Introduction to web development concepts and hands-on coding activities.',
        },
        {
            number: '06',
            image:
                '',
            title: '"Web Development" - Microsoft Learn',
            text:
                'Microsofts web development resources covering HTML, CSS, and JavaScript',
        },
        {
            number: '07',
            image:
                '',
            title: '"HTML, CSS, and JavaScript" - MDN Web Docs',
            text:
                'Extensive documentation and guides for web development technologies.',
        },

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Courses</h2>
                <p className="blogs__text"> 
                    Blogs with the most updated news about web development.
                </p>
                <ul className="blog__list">
                    <li className="blog__item">
                        <a href="/cheatsheets" className="blog__link">Cheatsheets</a>
                    </li>
                    <li>—</li>
                    <li className="blog__item">
                        <a href="/videos" className="blog__link">Videos</a>
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
                    {coursesItems.map((item, index) => (
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

export default Courses;



