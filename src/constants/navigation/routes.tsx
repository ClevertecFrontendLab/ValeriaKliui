import { AuthLayout } from '@components/AuthLayout';
import { BasicLayout } from '@components/BasicLayout';
import { LoginError } from '@components/AuthError/LoginError';
import { LoginForm } from '@components/AuthLayout/LoginForm';
import { ProtectedRoute } from '@components/ProtectedRoute';
import { MainPage } from '@pages/main-page';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import { RegisterForm } from '@components/AuthLayout/RegisterForm';

export const NAVIGATION_ITEMS = (
    <Routes >
        <Route element={<ProtectedRoute />} >
            <Route path={PATHS.MAIN} element={<BasicLayout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Route>

        <Route path={PATHS.AUTH} element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
            <Route path={PATHS.LOGIN_ERROR} element={<LoginError />} />
            <Route path={PATHS.REGISTER} element={<RegisterForm />} />
        </Route>

        <Route path="*" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
        </Route>
    </Routes>
);
