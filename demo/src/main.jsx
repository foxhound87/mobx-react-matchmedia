import React from 'react';
import { render } from 'react-dom';
import { observable } from 'mobx';
import DevTools from 'mobx-react-devtools';
// import { MatchMediaProvider } from 'mobx-react-matchmedia'; // eslint-disable-line
import { MatchMediaProvider } from '../../src';
import Breakpoints from './Breakpoints';

import './style.css';

const breakpoints = observable({
  xs: '(max-width: 767px)',
  su: '(min-width: 768px)',
  sm: '(min-width: 768px) and (max-width: 991px)',
  md: '(min-width: 992px) and (max-width: 1199px)',
  mu: '(min-width: 992px)',
  lg: '(min-width: 1200px)',
});

const App = () => (
  <MatchMediaProvider breakpoints={breakpoints}>
    <DevTools position={{ bottom: 0, right: '20px' }} />
    <Breakpoints bp={breakpoints} />
  </MatchMediaProvider>
);

render(
  <App />,
  document.querySelector('#app') // eslint-disable-line
);
