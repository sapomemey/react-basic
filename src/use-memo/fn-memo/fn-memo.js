import React, { useState, Fragment } from 'react';
import { Message } from './message';

export const FnMemo = () => {
  const [ counter, setCounter ] = useState(0);
  const [ message, setMessage ] = useState('');

  const handleChange = ({ target }) => {
    setMessage(target.value);
  };

  return <Fragment>
    <p>counter: {counter}</p>
    <br></br>
    <input
      value={message}
      autoComplete='off'
      onChange={handleChange}
    ></input>

    <br></br>
    <Message message={message}></Message>
    <br></br>
    <button onClick={() => setCounter(counter + 1)}>+1</button>
  </Fragment>;
};
