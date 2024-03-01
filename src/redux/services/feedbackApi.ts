import { FeedbackFormData } from '@redux/slices/interfaces';
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
        postFeedback: builder.mutation({
            query: (body: FeedbackFormData) => ({
                url: 'feedback',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetFeedbackQuery, useLazyGetFeedbackQuery, usePostFeedbackMutation } = feedbackApi;
