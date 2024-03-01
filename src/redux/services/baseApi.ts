import { BASE_URL } from '@constants/navigation/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        credentials: 'include',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('accessToken');
            const tokenParsed = token ? JSON.parse(token) : '';
            if (token) {
                headers.set('authorization', `Bearer ${tokenParsed}`);
            }
            return headers;
        },
    }),
    endpoints: () => ({}),
});
