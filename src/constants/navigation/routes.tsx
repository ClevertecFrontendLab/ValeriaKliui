import { AuthLayout } from '@components/AuthLayout';
import { LoginForm } from '@components/LoginForm';
import { Route, Routes } from 'react-router-dom';

export const NAVIGATION_ITEMS = (
    <Routes>
        <Route path='/auth' element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
        </Route>
    </Routes>
);
