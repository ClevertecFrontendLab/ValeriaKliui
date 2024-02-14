import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { store } from '@redux/configure-store';
import 'normalize.css';
import 'antd/dist/antd.css';
import './global.css';
import { HistoryRouter } from 'redux-first-history/rr6';
import { history } from '@redux/configure-store'
import { NAVIGATION_ITEMS } from '@constants/navigation/routes';
import PathConstants from '@constants/navigation/paths';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>{NAVIGATION_ITEMS}</HistoryRouter>
            {/* <Loader /> */}
        </Provider>
    </React.StrictMode>,
);
