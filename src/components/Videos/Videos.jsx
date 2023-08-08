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
                'https://images.squarespace-cdn.com/content/v1/5943b11db3db2be040e6fa54/1520249361434-NYJA17KB02FZVMOATWGJ/23054.jpg',
            title: 'freeCodeCamp',
            text:
                'A nonprofit organization providing comprehensive web development tutorials and coding challenges for all skill levels.',
        },
        {
            number: '02',
            image: 'https://cdnp1.stackassets.com/2357113def29cb36fa9e9c0cea5f691bfec36022/store/43b0818566cbed779a4732d6cf8ef35465091be7d5af055b2c03075191da/sale_25313_primary_image_wide.jpg',
            title: 'CSS-Tricks',
            text:
                'Valuable tutorials, tips, and tricks related to CSS, front-end development, and modern web design.',
        },
        {
            number: '03',
            image:
                'https://media.nature.com/lw767/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg',
            title: 'Codecourse',
            text:
                'Tutorials covering web development, frameworks, databases, and deployment, with a focus on PHP and Laravel.',
        },
        {
            number: '04',
            image:
                'https://www.multidots.com/wp-content/uploads/2020/01/code-quality-standard.png?quality=90',
            title: 'Codecademy',
            text:
                'Interactive coding tutorials for various programming languages and web development topics.',
        }

    ];

    return (
        <article className="blogs">
            <section className="blogs__information">
                <h2 className="blogs__headline">Videos</h2>
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



