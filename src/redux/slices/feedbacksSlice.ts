import { RootState } from '@redux/configure-store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { FeedbackFormData, FeedbacksState } from './interfaces';

const initialState: FeedbacksState = {
    message: null,
    rating: 0
};

const feedbacksSlice = createSlice({
    name: 'feedbacks',
    initialState,
    reducers: {
        saveFeedback: (state, action: PayloadAction<FeedbackFormData>) => {
            state.message = action.payload.message;
            state.rating = action.payload.rating;
        },
    },
});

export default feedbacksSlice.reducer;
export const { saveFeedback } = feedbacksSlice.actions;

export const selectFeedback = (state: RootState) => state.feedbacks;