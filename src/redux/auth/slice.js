import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isUserLoggedIn: false,
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
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default authSlice.reducer