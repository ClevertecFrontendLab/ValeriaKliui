import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authorizeApi = createApi({
    reducerPath: 'authorizeApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/api/`,
    }),
    endpoints: (builder) => ({
        registerUser: builder.mutation({
            query(body) {
                return {
                    url: 'registration',
                    method: 'POST',
                    body,
                };
            },
        }),
        loginUser: builder.mutation({
            query(body) {
                return {
                    url: 'login',
                    method: 'POST',
                    body,
                    credentials: 'include',
                };
            },
            async onQueryStarted(args, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                    await dispatch(userApi.endpoints.getMe.initiate(null));
                } catch (error) {}
            },
        }),
        logoutUser: builder.mutation({
            query() {
                return {
                    url: 'logout',
                    credentials: 'include',
                };
            },
        }),
        // registerUser: builder.mutation({
        //     query: (body) => ({
        //         url: 'registration',
        //         method: 'POST',
        //         body,
        //     }),
        // }),
        // loginUser: builder.mutation({
        //     query: (body) => ({
        //         url: 'login',
        //         method: 'POST',
        //         body,
        //     }),
        // }),
    }),
});

export const { useLoginUserMutation, useRegisterUserMutation } = authorizeApi;
