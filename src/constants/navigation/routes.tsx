import { BasicLayout } from '@components/BasicLayout';
import { Layout } from '@components/Layout';
import { MainPage } from '@pages/main-page';
import { Route, Routes } from 'react-router-dom';

export const NAVIGATION_ITEMS = <Routes>
    <Route path='auth' element={<Layout />}>
    </Route>
</Routes>