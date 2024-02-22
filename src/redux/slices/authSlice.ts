import { RootState } from '@redux/configure-store';
import { authorizeApi } from '@redux/services/authorize';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './interfaces';
import { UserData } from '@hooks/interfaces';

const initialState: AuthState = {
    user: null,
    token: null,
};
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        saveUser: (state, action: PayloadAction<UserData>) => {
            state.user = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addMatcher(
            authorizeApi.endpoints.loginUser.matchFulfilled,
            (state, { payload }) => {
                state.token = payload.accessToken;
            },
        );
    },
});

export default authSlice.reducer;
export const { saveUser } = authSlice.actions;

export const selectUser = (state: RootState) => state.auth.user;
export const selectEmail = (state: RootState) => state.auth.user?.email;
export const selectPassword = (state: RootState) => state.auth.user?.password;
export const selectConfirmedPassword = (state: RootState) => state.auth.user?.confirmPassword;
