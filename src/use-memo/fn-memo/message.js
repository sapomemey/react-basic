import React, { Fragment, memo } from 'react';

export const Message = memo(({message}) => {

  console.log('init Message');

  return <Fragment>
    message: {message}
  </Fragment>;
});
