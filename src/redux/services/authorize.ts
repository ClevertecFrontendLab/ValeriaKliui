import { BASE_URL } from '@constants/index';
import { UserData } from '@hooks/interfaces';
import { RootState } from '@redux/configure-store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ChangePasswordData, ConfirmEmailData } from './interfaces';

export const authorizeApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/auth/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials: UserData) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (body: UserData) => ({
                url: 'registration',
                method: 'POST',
                body,
            }),
        }),
        checkEmail: builder.mutation({
            query: (body: Pick<UserData, 'email'>) => ({
                url: 'check-email',
                method: 'POST',
                body,
            }),
        }),
        confirmEmail: builder.mutation({
            query: (body: ConfirmEmailData) => ({
                url: 'confirm-email',
                method: 'POST',
                body,
                credentials: 'include'
            }),
        }),
        changePassword: builder.mutation({
            query: (body: ChangePasswordData) => ({
                url: 'change-password',
                method: 'POST',
                body,
                credentials: 'include'
            }),
        }),
    }),
});

export const {
    useLoginUserMutation,
    useRegisterMutation,
    useCheckEmailMutation,
    useConfirmEmailMutation,
    useChangePasswordMutation,
} = authorizeApi;
