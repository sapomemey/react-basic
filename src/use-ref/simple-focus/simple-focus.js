import React, { Fragment, useRef } from 'react';

export const SimpleFocus = () => {
  const inputRef = useRef();

  const handleClick = () => {
    // inputRef.current.focus();
    inputRef.current.select();
  };

  return <Fragment>
    <input ref={inputRef}></input>

    <button onClick={handleClick}>focus</button>
  </Fragment>
};
