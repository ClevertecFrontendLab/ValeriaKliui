import { RootState } from '@redux/configure-store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Moment } from 'moment';

import { TRAINING_TYPE, TrainingsState } from './interfaces';

const initialState: TrainingsState = {
    trainingType: null,
    trainingDate: null
};

const trainingsSlice = createSlice({
    name: 'trainings',
    initialState,
    reducers: {
        chooseTrainingDay: (state, action: PayloadAction<string>) => {
            state.trainingDate = action.payload;
        },
        chooseTrainingType: (state, action: PayloadAction<TRAINING_TYPE>) => {
            state.trainingType = action.payload;
        },
    },
});

export default trainingsSlice.reducer;
export const { chooseTrainingType, chooseTrainingDay } = trainingsSlice.actions;

export const selectTrainingType = (state: RootState) => state.trainings.trainingType;
export const selectTrainingDay = (state: RootState) => state.trainings.trainingDate;