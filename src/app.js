import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { hot } from 'react-hot-loader/root';

import './global.less';

import Landing from './pages/landing';
import Form from './pages/form';
import Confirmation from './pages/confirmation';

function App ({ page }) {
  return (
    <Fragment>
      {page === 'landing' &&  <Landing />}
      {page === 'form' &&  <Form />}
      {page === 'confirmation' &&  <Confirmation />}
    </Fragment>
  );
}

export default hot(connect(state => ({ page: state.page }))(App));
