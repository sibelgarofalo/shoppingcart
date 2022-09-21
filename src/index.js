import React from 'react';
import ReactDOM from 'react-dom/client';

import Routing from './components/routing/routing';
import { store } from './redux/store';
import { Provider } from 'react-redux'

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Routing />
  </Provider>
);