import 'regenerator-runtime/runtime';

import React from 'react';
import { Provider } from 'react-redux';

import { store } from '/store';

import RootRouter from './routes';

const App = () => (
  <Provider store={store}>
    <RootRouter />
  </Provider>
);

export default App;
