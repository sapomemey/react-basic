import React, { useState } from 'react';
import './simple-counter.css';

export const SimpleCounter = () => {
  const [ counter, setCounter ] = useState(0);

  return <div className="container">
      <div className="counter">{counter}</div>

      <button className="btn-plus" onClick={() => setCounter(counter + 1)}>+1</button>
      <button className="btn-less" onClick={() => setCounter(counter - 1)}>-1</button>
    </div>;
};
