import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const loginApi = createApi({
    reducerPath: 'loginApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://marathon-api.clevertec.ru/' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body) => ({
                url: 'auth/login',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = loginApi;
