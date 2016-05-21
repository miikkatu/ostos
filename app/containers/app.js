import React, { Component } from 'react-native';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import * as reducers from '../reducers';
import ShoppingListApp from './shoppingListApp';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(combineReducers(reducers));

export default class App extends Component {
  render() {

    // Works
    store.dispatch({
      type: 'ADD',
      name: 'juttu'
    });

    return (
      <Provider store={store}>
        <ShoppingListApp />
      </Provider>
    );
  }
}
