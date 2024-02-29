import { baseApi } from './baseApi';
import { Feedback } from './interfaces';

export const feedbackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFeedback: builder.query<Feedback[], undefined>({
            query: () => ({
                url: 'feedback',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetFeedbackQuery } = feedbackApi;
