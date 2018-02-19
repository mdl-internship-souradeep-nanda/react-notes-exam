
import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import './index.css';

import App from './Components/App/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  window.document.getElementById('root'),
);
