import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { createHashRouter, RouterProvider } from 'react-router-dom';

import { store } from '@redux/configure-store';

import 'normalize.css';
import 'antd/dist/antd.css';
import './index.css';

import { NAVIGATION_ITEMS } from '@constants/navigation/navigation';
import { BasicLayout } from '@components/BasicLayout';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const router = createHashRouter([
    {
        element: <BasicLayout />,
        children: NAVIGATION_ITEMS,
    },
]);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);
