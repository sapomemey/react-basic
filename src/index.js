import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import { SimpleCounter } from './use-state/simple-counter/simple-counter';
// import { MediumCounter } from './use-state/medium-counter/medium-counter';
// import { MediumForm } from './use-effect/medium-form/medium-form';
// import { TrafficLight } from './traffic-light/traffic-light';
import { SimpleFocus } from './use-ref/simple-focus/simple-focus';

ReactDOM.render(
  <Fragment>
    <SimpleFocus></SimpleFocus>
  </Fragment>,
  document.getElementById('root')
);
