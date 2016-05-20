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
			added: true,
			picked: false
		}
  ]
};

export default function shoppingList(state = initialState, action) {
	switch (action.type) {

		case ADD:

			return  {
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
						added: true,
						picked: false
					},
					{
						index: 4,
						name: 'Bacon',
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
