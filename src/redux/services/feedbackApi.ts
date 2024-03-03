import { FeedbackFormData } from '@redux/slices/interfaces';
import { baseApi } from './baseApi';
import { FeedbackI } from './interfaces';

export const feedbackApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getFeedback: builder.query<FeedbackI[], undefined>({
            query: () => ({
                url: 'feedbkack',
                method: 'GET',
            }),
            providesTags: ['Feedbacks'],
        }),
        postFeedback: builder.mutation({
            query: (body: FeedbackFormData) => ({
                url: 'feedback',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Feedbacks'],
        }),
    }),
});

export const { useGetFeedbackQuery, useLazyGetFeedbackQuery, usePostFeedbackMutation } =
    feedbackApi;
