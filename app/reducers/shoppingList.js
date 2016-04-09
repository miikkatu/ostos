import * as types from '../actions/actionTypes';

const initialState = {
  shoppingList: [
    {name: 'Butter', added: true, picked: false},
    {name: 'Eggs', added: true, picked: false},
    {name: 'Milk', added: false, picked: false}
  ]};

export default function shoppingList(state = initialState, action = {}) {
  switch (action.type) {

    case types.ADD:
      return state;

    case types.REMOVE:
      return state;

    case types.PICK:
      return {
        // Mark the item as picked, if it's in the list.
        shoppingList: state.shoppingList.map((item, index) => {
          if (state.shoppingList[index].name === action.name) {
            return Object.assign({}, item, {
              picked: true
            });
          }
          return item;
        })
      };

    case types.UNPICK:
      return state;

    default:
      return state;
  }
}
