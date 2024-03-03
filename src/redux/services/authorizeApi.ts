import { UserData } from '@hooks/interfaces';

import { baseApi } from './baseApi';
import { ChangePasswordData, ConfirmEmailData } from './interfaces';

export const authorizeApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (credentials: UserData) => ({
                url: 'auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (body: UserData) => ({
                url: 'auth/registration',
                method: 'POST',
                body,
            }),
        }),
        checkEmail: builder.mutation({
            query: (body: Pick<UserData, 'email'>) => ({
                url: 'auth/check-email',
                method: 'POST',
                body,
            }),
        }),
        confirmEmail: builder.mutation({
            query: (body: ConfirmEmailData) => ({
                url: 'auth/confirm-email',
                method: 'POST',
                body,
                credentials: 'include',
            }),
        }),
        changePassword: builder.mutation({
            query: (body: ChangePasswordData) => ({
                url: 'auth/change-password',
                method: 'POST',
                body,
                credentials: 'include',
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
