import { configureStore } from '@reduxjs/toolkit';

import { authSlice, initialAuthState } from './auth/slice';
import { shoppingSlice, initialShoppingState } from './shopping/slice';

import authMiddleware, { customMiddleware } from './auth/middleware';

export const preloadAuthState = () => {

    let initialState = {
        auth: initialAuthState,
        shopping: initialShoppingState
    }

    // if we have a cookie, take it from there
    if (localStorage.key('user')) {
        const cookieState = { ...initialAuthState };
        cookieState.isUserLoggedIn = true;
        cookieState.user = JSON.parse(localStorage.getItem('user'));
        initialState.auth = cookieState;
    }

    return initialState
}

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        shopping: shoppingSlice.reducer
    },
    preloadedState: preloadAuthState(),
    middleware: (middlewares) => middlewares().concat(authMiddleware).concat(customMiddleware)
});