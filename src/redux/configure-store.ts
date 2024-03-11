import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';

import { baseApi } from './services/baseApi';
import appReducer from './slices/appSlice';
import feedbacksReducer from './slices/feedbacksSlice';
import trainingsReducer from './slices/trainingsSlice';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 10,
});

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        app: appReducer,
        feedbacks: feedbacksReducer,
        trainings: trainingsReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(routerMiddleware).concat(baseApi.middleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
