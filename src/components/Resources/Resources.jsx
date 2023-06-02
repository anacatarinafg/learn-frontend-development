import React, { useEffect, useRef, useState } from 'react';
import './resources.css';

const Resources = () => {
  const wheelRef = useRef(null);
  const [selectedItem, setSelectedItem] = useState(0); // Initially no item selected

  const itemList = [
    {
      title: 'Documentation',
      number: '01',
    },
    {
      title: 'Videos',
      number: '02',
    },
    {
      title: 'Courses',
      number: '03',
    },
    {
      title: 'Blogs',
      number: '04',
    },
    {
      title: 'Motivation',
      number: '05',
    },
  ];

  useEffect(() => {
    const wheel = wheelRef.current;
    const items = Array.from(wheel.children);
    const itemCount = items.length;

    // Calculate the rotation angle for each item
    const rotationIncrement = 20 / itemCount;

    // Calculate the base rotation for the selected item
    const baseRotation = selectedItem * rotationIncrement;

    // Apply the rotation to each item
    items.forEach((item, index) => {
      const rotation = (rotationIncrement * index - baseRotation) % 60;
      item.style.transform = `rotate(${rotation}deg)`;
      item.classList.remove('selected');
    });

    // Apply special styles to the selected item
    items[selectedItem].classList.add('selected');
  }, [selectedItem]);

  const handleWheelEvent = (event) => {
    const delta = Math.sign(event.deltaY);

    if (delta === 1) {
      // Scroll down
      setSelectedItem((prevSelectedItem) => {
        const itemCount = itemList.length;
        if (prevSelectedItem === itemCount - 1) {
          return 0;
        } else {
          return prevSelectedItem + 1;
        }
      });
    } else if (delta === -1) {
      // Scroll up
      setSelectedItem((prevSelectedItem) => {
        const itemCount = itemList.length;
        if (prevSelectedItem === 0) {
          return itemCount - 1;
        } else {
          return prevSelectedItem - 1;
        }
      });
    }
  };

  return (
    <article className="wheel" onWheel={handleWheelEvent}>
      <div className="wheel__wrapper">
        <ul className="wheel__list" ref={wheelRef}>
          {itemList.map((item, index) => (
            <li key={index} className="wheel__item">
              <a href="" className="wheel__link">
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