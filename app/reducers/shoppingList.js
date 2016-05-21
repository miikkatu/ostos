import {
	ADD,
	REMOVE,
	PICK,
	UNPICK,
	ITEMS_LOADED
} from '../actions/shoppingListActions';

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

export default function shoppingList(state = initialState, action) {

	switch (action.type) {

		case ADD:
			return {
				// Return a new object with the previous state with the added item.
				shoppingList: [
					...state.shoppingList,
					{
						index: 0,
						name: action.name,
						added: true,
						picked: false
					}
				]
			};

		case REMOVE:
			return state;

		case PICK:
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

		case UNPICK:
			return state;

		default:
			return state;
	}
}
