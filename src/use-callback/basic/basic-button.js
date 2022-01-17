import React, { memo } from 'react';

export const BasicButton = memo(({ increment }) => {

  console.log('me genere');

  return <button onClick={() => increment(5)}>+5</button>
});
