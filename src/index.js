import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import { SimpleCounter } from './use-state/simple-counter/simple-counter';
import { MediumCounter } from './use-state/medium-counter/medium-counter';

ReactDOM.render(
  <Fragment>
    <MediumCounter></MediumCounter>
  </Fragment>,
  document.getElementById('root')
);
