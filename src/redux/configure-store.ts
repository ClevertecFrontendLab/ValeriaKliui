import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import { createReduxHistoryContext } from 'redux-first-history';

import { authorizeApi } from './services/authorize';
import authReducer from './slices/authSlice';
import { feedbackApi } from './services/feedback';

const { createReduxHistory, routerMiddleware, routerReducer } = createReduxHistoryContext({
    history: createBrowserHistory(),
    savePreviousLocations: 10,
});

export const store = configureStore({
    reducer: combineReducers({
        router: routerReducer,
        [authorizeApi.reducerPath]: authorizeApi.reducer,
        feedbackApi: feedbackApi.reducer,
        auth: authReducer,
    }),
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(routerMiddleware)
            .concat(authorizeApi.middleware)
            .concat(feedbackApi.middleware),
});

export const history = createReduxHistory(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
