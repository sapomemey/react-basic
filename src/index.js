import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import { SimpleCounter } from './use-state/simple-counter/simple-counter';
// import { MediumCounter } from './use-state/medium-counter/medium-counter';
import { MediumForm } from './use-effect/medium-form/medium-form';

ReactDOM.render(
  <Fragment>
    <MediumForm></MediumForm>
  </Fragment>,
  document.getElementById('root')
);
