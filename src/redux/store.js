import { configureStore } from '@reduxjs/toolkit';

import { authSlice } from './auth/slice';
import { shoppingSlice } from './shopping/slice';

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        shopping: shoppingSlice.reducer
    },
})