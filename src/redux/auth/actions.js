import { createAsyncThunk } from '@reduxjs/toolkit';

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

// export
export {
    resetPassword
}