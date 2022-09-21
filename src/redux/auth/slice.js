import { createSlice } from '@reduxjs/toolkit'
import { resetPassword, login } from './actions';

const initialState = {
    isUserLoggedIn: false,
    isLoading: false,
    isSuccess: false,
    error: '',
    user: {
        id: 0,
        email: '',
        first_name: '',
        last_name: '',
        username: '',
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        /** Reset password actions */
        builder.addCase(resetPassword.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = '';
        });
        builder.addCase(resetPassword.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
        });
        builder.addCase(resetPassword.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.payload;
        });
        /** Login actions */
        builder.addCase(login.pending, (state, action) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.isUserLoggedIn = false;
            state.error = '';
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isUserLoggedIn = true;
            state.error = '';
            state.user = action.payload;
        });
        builder.addCase(login.rejected, (state, action) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isUserLoggedIn = false;
            state.error = action.payload;
        });

    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer