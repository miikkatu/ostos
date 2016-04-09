
import * as types from '../actions/actionTypes';

const initialState = [
  {name: 'Butter', added: false, picked: false},
  {name: 'Eggs', added: false, picked: false},
  {name: 'Milk', added: false, picked: false}
];

export default function shoppingList(state = initialState, action = {}, item) {
  switch (action.type) {

    case types.ADD:
      return {
        // ...state,
        // count: state.count + 1
      };

    case types.REMOVE:
      return {
        // ...state,
        // count: state.count - 1
      };

    case types.PICK:
      return {
        // ...state,
        // count: state.count - 1
      };

    case types.UNPICK:
      return {
        // ...state,
        // count: state.count - 1
      };

    default:
      return state;
  }
}
