import React, { useEffect, useRef, useState } from 'react';
import './resources.css';

const Resources = () => {
  const wheelRef = useRef();
  const [selectedItem, setSelectedItem] = useState(2); // Initially no item selected
  const [isScrolling, setIsScrolling] = useState(false); // Track scrolling status
  const rotationInterval = 1500; // Rotation interval in milliseconds
  let timer = null; // Timer reference

  const itemList = [
    {
      title: 'Cheatsheets',
      number: '01',
      link: '/cheatsheets'
    },
    {
      title: 'Videos',
      number: '02',
      link: '/videos'
    },
    {
      title: 'Courses',
      number: '03',
      link: '/courses'
    },
    {
      title: 'Tools',
      number: '04',
      link: '/tools'
    },
    {
      title: 'Blogs',
      number: '05',
      link: '/blogs'
    },
  ];

  useEffect(() => {
    const wheel = wheelRef.current;
    if (!wheel) return;

    const items = Array.from(wheel.children);
    const itemCount = items.length;

    // Calculate the rotation angle for each item
    const rotationIncrement = -90 / itemCount;

    // Calculate the base rotation for the selected item
    const baseRotation = selectedItem * rotationIncrement;

    // Apply the rotation to each item
    items.forEach((item, index) => {
      const rotation = (rotationIncrement * index - baseRotation) % 360;
      item.style.transform = `rotate(${rotation}deg)`;
      item.style.transition = 'transform 0.5s ease';
      item.classList.remove('selected');
    });

    // Apply special styles to the selected item
    items[selectedItem].classList.add('selected');
  }, [selectedItem]);

  const handleWheelEvent = (event) => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    setIsScrolling(true);

    if (event.deltaY < 0) {
      setSelectedItem((prevSelectedItem) => {
        const nextItem = prevSelectedItem - 1;
        return nextItem < 0 ? itemList.length - 1 : nextItem;
      });
    } else if (event.deltaY > 0) {
      setSelectedItem((prevSelectedItem) => {
        const nextItem = prevSelectedItem + 1;
        return nextItem >= itemList.length ? 0 : nextItem;
      });
    }

    event.preventDefault();
  };

  const handleScrollEnd = () => {
    setIsScrolling(false);
  };

  useEffect(() => {
    const wheel = wheelRef.current;
    wheel.addEventListener('wheel', handleWheelEvent);

    return () => {
      wheel.removeEventListener('wheel', handleWheelEvent);
    };
  }, []);

  useEffect(() => {
    if (!isScrolling) {
      timer = setInterval(() => {
        setSelectedItem((prevSelectedItem) => {
          const nextItem = prevSelectedItem + 1;
          return nextItem >= itemList.length ? 0 : nextItem;
        });
      }, rotationInterval);
    } else {
      clearInterval(timer);
      timer = null;
    }

    return () => {
      clearInterval(timer);
    };
  }, [isScrolling]);

  return (
    <article className="wheel" onScroll={handleScrollEnd}>
      <div className="wheel__wrapper">
        <ul className="wheel__list" ref={wheelRef}>
          {itemList.map((item, index) => (
            <li key={index} className="wheel__item">
              <a href={item.link} className="wheel__link">
                {item.title}
              </a>
              <span className="wheel__number">{item.number}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Resources;
