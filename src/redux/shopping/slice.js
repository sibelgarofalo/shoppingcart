import { createSlice } from '@reduxjs/toolkit';
import data from '../data/tshirts.json';

const initialState = {
    tshirts: [],
    shoppingCart: {

    }
};

export const shoppingSlice = createSlice({
    name: 'shopping',
    initialState,
    reducers: {
        loadTshirts: (state) => {
            state.tshirts = data.tshirts
        }
    },
});

// Action creators are generated for each case reducer function
export const { loadTshirts } = shoppingSlice.actions

export default shoppingSlice.reducer