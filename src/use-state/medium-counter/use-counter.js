import { useState } from 'react';

export const useCounter = (initValue) => {
  const [amount, setAmount] = useState(initValue);

  const addAmount = (factor) => {
    setAmount(amount + factor);
  };

  const subtractAmount = (factor) => {
    setAmount(amount - factor);
  };

  return {
    amount,
    addAmount,
    subtractAmount
  };
};
