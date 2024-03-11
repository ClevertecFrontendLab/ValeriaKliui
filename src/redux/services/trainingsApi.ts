import { FeedbackFormData } from '@redux/slices/interfaces';
import { baseApi } from './baseApi';
import { FeedbackI, TrainingOption } from './interfaces';

export const trainingsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTrainings: builder.query({
            query: () => ({
                url: 'training',
                method: 'GET',
            }),
        }),
        getTrainingsList: builder.query<Array<TrainingOption>, undefined>
            ({
                query: () => ({
                    url: 'catalogs/training-list',
                    method: 'GET',
                }),
            }),
        postTraining: builder.mutation({
            query: (body) => ({
                url: 'training',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useGetTrainingsQuery, useLazyGetTrainingsListQuery, usePostTrainingMutation } =
    trainingsApi;
