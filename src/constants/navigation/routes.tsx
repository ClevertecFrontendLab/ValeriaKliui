import { AuthLayout } from '@components/AuthLayout';
import { ChangePasswordForm } from '@components/AuthLayout/ChangePasswordForm';
import { ForgotPasswordForm } from '@components/AuthLayout/ForgotPasswordForm';
import { RegisterForm } from '@components/AuthLayout/RegisterForm';
import { ChangePasswordError } from '@components/AuthMessage/ChangePasswordError';
import { ChangePasswordSuccess } from '@components/AuthMessage/ChangePasswordSuccess';
import { ForgotPasswordError } from '@components/AuthMessage/ForgotPasswordError';
import { ForgotPasswordErrorNoEmail } from '@components/AuthMessage/ForgotPasswordErrorNoEmail';
import { LoginError } from '@components/AuthMessage/LoginError';
import { RegisterError } from '@components/AuthMessage/RegisterError';
import { RegisterErrorUserExist } from '@components/AuthMessage/RegisterErrorUserExist';
import { RegisterSuccess } from '@components/AuthMessage/RegisterSuccess';
import { BasicLayout } from '@components/BasicLayout';
import { ProtectedRoute } from '@components/ProtectedRoute';
import { AuthPage } from '@pages/AuthPage';
import { FeedbackPage } from '@pages/FeedbackPage';
import { MainPage } from '@pages/MainPage';
import { Navigate, Route, Routes } from 'react-router-dom';

import { PATHS } from './paths';

export const NAVIGATION_ITEMS = (
    <Routes>
        <Route path={PATHS.DEFAULT} element={<Navigate to={PATHS.AUTH} />} />

        <Route element={<ProtectedRoute />}>
            <Route element={<BasicLayout />}>
                <Route path={PATHS.MAIN} element={<MainPage />} />
                <Route path={PATHS.FEEDBACK} element={<FeedbackPage />} />
            </Route>
        </Route>

        <Route path={PATHS.AUTH} element={<AuthLayout />}>
            <Route index element={<AuthPage />} />
            <Route path={PATHS.REGISTER} element={<RegisterForm />} />
            <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPasswordForm />} />
            <Route path={PATHS.CHANGE_PASSWORD} element={<ChangePasswordForm />} />
        </Route>

        <Route path={PATHS.RESULT} element={<AuthLayout />}>
            <Route path={PATHS.LOGIN_ERROR} element={<LoginError />} />
            <Route path={PATHS.REGISTER_SUCCESS} element={<RegisterSuccess />} />
            <Route path={PATHS.REGISTER_ERROR_USER_EXIST} element={<RegisterErrorUserExist />} />
            <Route path={PATHS.REGISTER_ERROR} element={<RegisterError />} />
            <Route path={PATHS.FORGOT_PASSWORD_ERROR} element={<ForgotPasswordError />} />
            <Route path={PATHS.FORGOT_PASSWORD_ERROR_NO_EMAIL} element={<ForgotPasswordErrorNoEmail />} />
            <Route path={PATHS.CHANGE_PASSWORD_ERROR} element={<ChangePasswordError />} />
            <Route path={PATHS.CHANGE_PASSWORD_SUCCESS} element={<ChangePasswordSuccess />} />
        </Route>
    </Routes>
);
