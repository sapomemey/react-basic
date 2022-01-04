import React from 'react';
import { useCounter } from './use-counter';

export const MediumCounter = () => {
  const { amount, addAmount, subtractAmount } = useCounter(100);

  return <div>
    <div>{amount}</div>

    <button onClick={() => addAmount(3)}>+3</button>
    <button onClick={() => subtractAmount(5)}>-5</button>
  </div>;
};
