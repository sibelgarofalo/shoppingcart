import { createSlice } from '@reduxjs/toolkit';
import data from '../data/tshirts.json';

export const initialShoppingState = {
    tshirts: [],
    shoppingCart: {
        total: 0,
        items: []
    }
};

const calculateTotal = (items) => {
    return items
        .map(item => item.price)
        .reduce((prev, next) => prev + next, 0);
}

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState: initialShoppingState,
    reducers: {
        // load all the available tshirt
        loadTshirts: (state) => {
            state.tshirts = data.tshirts
        },
        // add an item to the shopping cart
        addItemToShoppingCart: (state, action) => {
            state.shoppingCart.items.push(action.payload);
            // calculate total
            state.shoppingCart.total = calculateTotal(state.shoppingCart.items);
        },
        // add an item to the shopping cart
        removeItemFromShoppingCart: (state, action) => {
            // it removes an item from the shopping cart list
            // it recalculates the total
        },
        // change the amount of an item
        addMoreItemQuantityInShoppingCart: (state, action) => {
            // find the item in the shopping cart
            // change the quantity
            // update the total
        }
    },
});

// Action creators are generated for each case reducer function
export const { loadTshirts, addItemToShoppingCart, removeItemFromShoppingCart, addMoreItemQuantityInShoppingCart } = shoppingSlice.actions

export default shoppingSlice.reducer