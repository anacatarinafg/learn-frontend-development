import React, { useRef, useEffect, useState } from 'react';
import '../Blogs/blogs.css';

const Tools = () => {
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
    const toolItems = [
        {
            number: '01',
            image:
                'https://ph-files.imgix.net/5a9996e9-3602-4937-a7d2-dcbbf8e3c6d7.png?auto=format',
            title: 'UIVerse',
            text:
                'Open-Source UI elements for any project',
        },
        {
            number: '02',
            image:
                'https://uncut.wtf/assets/images/og_image.png',
            title: 'Uncut',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '03',
            image:
                'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20190820175612/Why-You-Should-Learn-To-Code.png',
            title: 'UI Gradients',
            text:
                'Generates beautiful CSS gradients with ready-to-use code snippets.',
        },
        {
            number: '04',
            image:
                'https://pitdesigns.com/wp-content/uploads/2020/05/Neumorphism.-Io.jpg',
            title: 'Neumorphism',
            text:
                ' Helps you create neumorphic design elements with customizable colors and styles.',
        },
        {
            number: '05',
            image:
                '',
            title: 'CSS Grid Generator',
            text:
                'Generates custom CSS grid layouts for responsive web designs.',
        },
        {
            number: '06',
            image:
                'https://logodownload.org/wp-content/uploads/2020/11/canva-logo-0.png',
            title: 'Canva',
            text:
                'A graphic design tool that provides templates, elements, and a drag-and-drop editor for creating various visuals.',
        },
        {
            number: '07',
            image:
                'https://res.cloudinary.com/practicaldev/image/fetch/s--8p7s7734--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_800/https://www.faviator.xyz/assets/logo.png',
            title: 'Favicon',
            text:
                ' Generates favicons in various sizes and formats from an uploaded image or an icon library.',
        },

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Tools / Generators</h2>
                <p className="blogs__text">
                    These generators can save you time and effort by providing ready-made design assets.
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
                        <a href="/courses" className="blog__link">Courses</a>
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
                    {toolItems.map((item, index) => (
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

export default Tools;



