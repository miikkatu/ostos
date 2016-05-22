import { combineReducers } from 'redux';
import {
	ADD,
	REMOVE,
	PICK,
	UNPICK
} from '../actions/actions';

function shoppingList(state = [], action) {

	switch (action.type) {

		case ADD:
			return [
				...state,
				{
					index: 0,
					name: action.name,
					added: true,
					picked: false
				}
			];

		case REMOVE:
			return state;

		case PICK:
			return state.map((item, index) => {
        if (state[index].name === action.name) {
          return Object.assign({}, item, {
            picked: true
          });
        }
        return item;
      });

		case UNPICK:
			return state.map((item, index) => {
				if (state[index].name === action.name) {
					return Object.assign({}, item, {
						picked: false
					});
				}
				return item;
			});

		default:
			return state;
	}
}

const shoppingListReducers = combineReducers({
  shoppingList
});

export default shoppingListReducers;
