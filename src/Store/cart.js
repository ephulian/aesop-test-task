import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		items: [],
	},
	reducers: {
		addItems: (state, action) => {
			// If list empty - add
			if (state.items.length === 0) {
				state.items.push(action.payload);
			} else {
				// If list NOT empty, check id's to avoid duplication
				state.items.forEach((item, index) => {
					if (item.id !== action.payload.id) {
						state.items.push(action.payload);
					} else if (item.id === action.payload.id && item.size !== action.payload.size) {
						// Add another item if different size
						state.items.push(action.payload);
					} else if (item.id === action.payload.id) {
						// If same size - increment quantity
						state.items[index].quantity++;
					}
				});
			}
			localStorage.setItem('cart', JSON.stringify(state.items));
		},
		clearItems: (state, action) => {
			state.items = [];
			localStorage.setItem('cart', JSON.stringify(state.items));
		},
		removeItems: (state, action) => {
			state.items = state.items.filter((item) => item.id !== action.payload.id);
			localStorage.setItem('cart', JSON.stringify(state.items));
		},
	},
});

export const { addItems, clearItems, removeItems } = cartSlice.actions;
export default cartSlice.reducer;
