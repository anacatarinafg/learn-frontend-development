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
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '04',
            image:
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '05',
            image:
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '06',
            image:
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },
        {
            number: '07',
            image:
                'https://play-lh.googleusercontent.com/hB9t3Z-mi284_49HA3nAuhO-W5Cyhje7r2P9McdgORoVCd-0SV54c12NMQWLHnqALw',
            title: 'Medium',
            text:
                'The mystical force behind web interactivity. It empowers you to create dynamic, responsive websites.',
        },

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Tools</h2>
                <p className="blogs__text">
                    Create beautiful webpages with those generator tools.
                </p>
                <p className="blogs__warning">selected tools</p>
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
                        <div
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
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
};

export default Tools;



