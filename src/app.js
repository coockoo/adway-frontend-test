import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import './global.less';

import Landing from './pages/landing';

function App ({ page }) {
  return (
    <Fragment>
      {page === 'landing' &&  <Landing />}
      {page === 'form' &&  <div>hoho haha</div>}
    </Fragment>
  );
}

export default hot(connect(state => state)(App));
