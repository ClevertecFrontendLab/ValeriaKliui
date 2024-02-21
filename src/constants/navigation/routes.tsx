import { AuthLayout } from '@components/AuthLayout';
import { BasicLayout } from '@components/BasicLayout';
import { LoginError } from '@components/AuthMessage/LoginError';
import { LoginForm } from '@components/AuthLayout/LoginForm';
import { ProtectedRoute } from '@components/ProtectedRoute';
import { MainPage } from '@pages/main-page';
import { Navigate, Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import { RegisterForm } from '@components/AuthLayout/RegisterForm';
import { RegisterSuccess } from '@components/AuthMessage/RegisterSuccess';
import { RegisterErrorUserExist } from '@components/AuthMessage/RegisterErrorUserExist';
import { RegisterError } from '@components/AuthMessage/RegisterError';
import { ForgotPasswordForm } from '@components/AuthLayout/ForgotPasswordForm';
import { ChangePasswordForm } from '@components/AuthLayout/ChangePasswordForm';
import { ForgotPasswordErrorNoEmail } from '@components/AuthMessage/ForgotPasswordErrorNoEmail';
import { ForgotPasswordError } from '@components/AuthMessage/ForgotPasswordError';
import { ChangePasswordSuccess } from '@components/AuthMessage/ChangePasswordSuccess';
import { ChangePasswordError } from '@components/AuthMessage/ChangePasswordError';

export const NAVIGATION_ITEMS = (
    <Routes>
        <Route path={PATHS.DEFAULT} element={<Navigate to={PATHS.AUTH} />} />
        <Route element={<ProtectedRoute />}>
            <Route path={PATHS.MAIN} element={<BasicLayout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Route>

        <Route path={PATHS.AUTH} element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
            <Route path={PATHS.LOGIN_ERROR} element={<LoginError />} />
            <Route path={PATHS.REGISTER} element={<RegisterForm />} />
            <Route
                path={`${PATHS.REGISTER}/${PATHS.REGISTER_SUCCESS}`}
                element={<RegisterSuccess />}
            />
            <Route
                path={`${PATHS.REGISTER}/${PATHS.REGISTER_ERROR_USER_EXIST}`}
                element={<RegisterErrorUserExist />}
            />
            <Route path={`${PATHS.REGISTER}/${PATHS.REGISTER_ERROR}`} element={<RegisterError />} />
            <Route path={PATHS.FORGOT_PASSWORD} element={<ForgotPasswordForm />} />
            <Route path={PATHS.FORGOT_PASSWORD_ERROR} element={<ForgotPasswordError />} />
            <Route
                path={PATHS.FORGOT_PASSWORD_ERROR_NO_EMAIL}
                element={<ForgotPasswordErrorNoEmail />}
            />
            <Route path={PATHS.CHANGE_PASSWORD} element={<ChangePasswordForm />} />
            <Route path={`${PATHS.CHANGE_PASSWORD}/${PATHS.CHANGE_PASSWORD_ERROR}`} element={<ChangePasswordError />} />
            <Route
                path={`${PATHS.CHANGE_PASSWORD}/${PATHS.CHANGE_PASSWORD_SUCCESS}`}
                element={<ChangePasswordSuccess />}
            />
            <Route
                path={`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD_SUCCESS}`}
                element={<ChangePasswordSuccess />}
            />
        </Route>
    </Routes>
);
