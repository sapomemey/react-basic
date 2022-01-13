import React, { Fragment, useState, useMemo } from 'react';

export const BasicMemo = () => {
  const [counter, setCounter] = useState(0);
  const [num, setNum] = useState(100);

  const process = (num) => {
    console.log('dont execute');

    return Array
      .from(Array(num))
      .map((_value, index) => index)
      .reduce((previousValue, currentValue) => previousValue + currentValue);
  };

  const result = useMemo(() => { 
    return process(num);
  }, [num]);

  return <Fragment>
    <p>counter: {counter}</p>

    <button onClick={() => setNum(counter)}>change result</button>

    <div>{result}</div>

    <button onClick={() => setCounter(counter + 1)}>+1</button>
  </Fragment>
};
