import React, { useState, Fragment, useEffect, useCallback } from 'react';
import { BasicButton } from './basic-button';

export const BasicUseCallback = () => {
  const [ counter, setCounter ] = useState(0);

  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);

  useEffect(() => {
    // si una funcion es una dependencia, entonces debe usarse useCallback
  }, [increment]);

  return <Fragment>
    <h1>{ counter }</h1>
    <BasicButton increment={increment}></BasicButton>
  </Fragment>;
};
