import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider, useSelector } from 'react-redux';
import { store } from '@redux/configure-store';
import 'normalize.css';
import 'antd/dist/antd.css';
import './global.css';
import { HistoryRouter } from 'redux-first-history/rr6';
import { history } from '@redux/configure-store'
import { NAVIGATION_ITEMS } from '@constants/navigation/routes';
import { LoginForm } from '@components/LoginForm';
import { Sidebar } from '@components/Sidebar';
import { Loader } from '@components/Loader';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <HistoryRouter history={history}>
                {NAVIGATION_ITEMS}
            </HistoryRouter>
            <Loader />
        </Provider>
    </React.StrictMode>,
);
