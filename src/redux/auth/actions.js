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
            const data = await httpResponse.json();
            if (httpResponse.status === 200) {
                return thunkAPI.fulfillWithValue(data);
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