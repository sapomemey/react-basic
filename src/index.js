import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// import { SimpleCounter } from './use-state/simple-counter/simple-counter';
// import { MediumCounter } from './use-state/medium-counter/medium-counter';
// import { MediumForm } from './use-effect/medium-form/medium-form';
// import { TrafficLight } from './traffic-light/traffic-light';
// import { SimpleFocus } from './use-ref/simple-focus/simple-focus';
// import { FnMemo } from './use-memo/fn-memo/fn-memo';
// import { BasicMemo } from './use-memo/basic-memo/basic-memo';
import { BasicUseCallback } from './use-callback/basic/basic-use-callback';

ReactDOM.render(
  <Fragment>
    <BasicUseCallback></BasicUseCallback>
  </Fragment>,
  document.getElementById('root')
);
