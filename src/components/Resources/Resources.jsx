import React, { useEffect, useRef, useState } from 'react';
import './resources.css';

const Resources = () => {
  const wheelRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(2); // Initially no item selected

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
    const wheel = wheelRef.current;
    const delta = Math.sign(event.deltaY);
    const items = Array.from(wheel.children);
    const itemCount = items.length;

    if (delta === 1) {
      // Scroll down
      setSelectedItem((prevSelectedItem) => {
        const nextItem = prevSelectedItem + 1;
        return nextItem >= itemCount ? 0 : nextItem;
      });
    } else if (delta === -1) {
      // Scroll up
      setSelectedItem((prevSelectedItem) => {
        const nextItem = prevSelectedItem - 1;
        return nextItem < 0 ? itemCount - 1 : nextItem;
      });
    }

    event.preventDefault(); // Prevent default scroll behavior
  };

  return (
    <article className="wheel" onWheel={handleWheelEvent}>
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