import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { ConnectedLifeCounterDisplay } from './containers/connected_display';
import { lifeCounterApp } from './reducers'

const store = createStore(lifeCounterApp)

export const LifeCounterApp = () => (
  <Provider store={store}>
    <ConnectedLifeCounterDisplay />
  </Provider>
);
