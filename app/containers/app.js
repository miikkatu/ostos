import React, { Component } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import shoppingListReducers from '../reducers/reducers';
import ShoppingListApp from './shoppingListApp';

import {add, pick} from '../actions/actions';

const initialState = {
	shoppingList: [
		{
			index: 2,
			name: 'Butter',
			added: true,
			picked: false
		},
		{
			index: 1,
			name: 'Eggs',
			added: true,
			picked: false
		},
		{
			index: 1,
			name: 'Milk',
			added: false,
			picked: false
		}
  ]
};

let store = createStore(shoppingListReducers, initialState);

export default class App extends Component {
  render() {

    console.log(store.getState());
    console.log(store.dispatch(add('Bacon')));
    console.log(store.getState());
    console.log(store.dispatch(pick('Bacon')));
    console.log(store.getState());

    return (
      <Provider store={store}>
        <ShoppingListApp />
      </Provider>
    );
  }
}
