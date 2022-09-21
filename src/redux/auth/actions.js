import { createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Reset the password
 */
const resetPassword = createAsyncThunk(
    'auth/resetPassword',
    async (email, thunkAPI) => {
        try {
            const httpResponse = await fetch(
                `https://motion.propulsion-home.ch/backend/api/auth/password-reset/`,
                {
                    method: 'POST',
                    body: JSON.stringify({ email: email }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if (httpResponse.ok) {
                return thunkAPI.fulfillWithValue();
            }
            return thunkAPI.rejectWithValue('The email provided is not available');
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const login = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            const httpResponse = await fetch(
                `https://motion.propulsion-home.ch/backend/api/auth/token/`,
                {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
            if (httpResponse.ok) {
                const data = await httpResponse.json();
                return thunkAPI.fulfillWithValue(data.user);
            }
            const err = await httpResponse.json();
            return thunkAPI.rejectWithValue(err.detail);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

// export
export {
    resetPassword,
    login
}