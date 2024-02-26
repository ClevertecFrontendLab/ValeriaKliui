import 'normalize.css';
import 'antd/dist/antd.css';
import './global.css';

import { Loader } from '@components/Loader';
import { NAVIGATION_ITEMS } from '@constants/navigation/routes';
import { store } from '@redux/configure-store';
import { history } from '@redux/configure-store'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { HistoryRouter } from 'redux-first-history/rr6';

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
