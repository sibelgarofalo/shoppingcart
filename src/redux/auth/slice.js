import { createSlice } from '@reduxjs/toolkit'
import { resetPassword } from './actions';

const initialState = {
    isUserLoggedIn: false,
    isLoading: false,
    isSuccess: false,
    error: '',
    user: {
        firstName: '',
        lastName: '',
        email: ''
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
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
    }
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer