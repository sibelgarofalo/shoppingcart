import { createSlice } from '@reduxjs/toolkit';
import data from '../data/tshirts.json';

const initialState = {
    tshirts: [],
    shoppingCart: {
        total: 0,
        items: []
    }
};

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        // load all the available tshirt
        loadTshirts: (state) => {
            state.tshirts = data.tshirts
        },
        // add an item to the shopping cart
        addItemToShoppingCart: (state, action) => {
            // it adds a new item into the shopping cart list
            // it recalculates the total
        },
        // add an item to the shopping cart
        removeItemFromShoppingCart: (state, action) => {
            // it removes an item from the shopping cart list
            // it recalculates the total
        },
        // change the amount of an item
        changeItemQuantityInShoppingCart: (state, action) => {
            // find the item in the shopping cart
            // change the quantity
            // update the total
        }
    },
});

// Action creators are generated for each case reducer function
export const { loadTshirts } = shoppingSlice.actions

export default shoppingSlice.reducer