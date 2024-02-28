import { BASE_URL } from '@constants/index';
import { RootState } from '@redux/configure-store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

export const feedbackApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/feedback/`,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),

    endpoints: (builder) => ({
        getComments: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
    }),
});

export const {} = feedbackApi;
