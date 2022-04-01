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
			} else if (
				// If list is NOT empty
				state.items.length > 0 &&
				// AND cannot find the matching ID
				!state.items.find((item) => item.id === action.payload.id)
			) {
				// Add to list
				state.items.push(action.payload);
			} else {
				// If already existing in list, update qunatity
				const found = state.items.find((item) => item.id === action.payload.id);
				state.items[state.items.indexOf(found)].quantity++;
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
		changeQuantity: (state, action) => {
			const found = state.items.find((item) => item.id === action.payload.id);
			state.items[state.items.indexOf(found)].quantity = action.payload.quantity;
		},
	},
});

export const { addItems, clearItems, removeItems, changeQuantity } = cartSlice.actions;
export default cartSlice.reducer;
