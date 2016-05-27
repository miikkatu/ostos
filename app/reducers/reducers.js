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
			console.log('case ADD:');
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
			console.log('case PICK:');

			let homma = state.map((item, index) => {
        if (state[index].name === action.name) {
					return Object.assign({}, item, {
            picked: true
          });
        }
        return item;
      });
			console.log(homma);
			return homma;


		case UNPICK:
			console.log('case UNPICK:');
			return state.map((item, index) => {
				if (state[index].name === action.name) {
					return Object.assign({}, item, {
						picked: false
					});
				}
				return item;
			});

		default:
			console.log('DEFAULT:');
			return state;
	}
}

const shoppingListReducers = combineReducers({
  shoppingList
});

export default shoppingListReducers;
