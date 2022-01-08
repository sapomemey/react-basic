import React, { useEffect, useState } from 'react';

export const Message = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const { x, y } = position;

  useEffect(() => {
    const handleMouseover = ({ x, y }) => {
      setPosition({ x, y });
      console.log(x, y);
    };

    window.addEventListener('mouseover', handleMouseover);

    return () => {
      window.removeEventListener('mouseover', handleMouseover);
    };
  }, []);

  return <h1>mouse position x: {x} y: {y} </h1>
};
