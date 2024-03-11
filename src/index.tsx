import 'normalize.css';
import 'antd/dist/antd.css';
import './global.css';

import { Loader } from '@components/Loader';
import { NAVIGATION_ITEMS } from '@constants/navigation/routes';
import { store } from '@redux/configure-store';
import { history } from '@redux/configure-store';
import { ConfigProvider } from 'antd';
import ruRU from 'antd/es/locale/ru_RU';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';
const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

root.render(
    <React.StrictMode>
        <ConfigProvider locale={ruRU}>
            <Provider store={store}>
                <HistoryRouter history={history}>{NAVIGATION_ITEMS}</HistoryRouter>
                <Loader />
            </Provider>
        </ConfigProvider>
    </React.StrictMode>,
);
