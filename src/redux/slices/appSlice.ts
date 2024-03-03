import { UserData } from '@hooks/interfaces';
import { RootState } from '@redux/configure-store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthState } from './interfaces';

const initialState: AuthState = {
    user: null,
    token: null ?? localStorage.getItem('accessToken'),
};

const appSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
        },
    },
});

export default appSlice.reducer;
export const { saveUser } = appSlice.actions;

export const selectUser = (state: RootState) => state.app.user;
export const selectEmail = (state: RootState) => state.app.user?.email;
export const selectPassword = (state: RootState) => state.app.user?.password;
export const selectConfirmedPassword = (state: RootState) => state.app.user?.confirmPassword;
