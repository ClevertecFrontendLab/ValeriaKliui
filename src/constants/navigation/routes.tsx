import { AuthLayout } from '@components/AuthLayout';
import { BasicLayout } from '@components/BasicLayout';
import { LoginError } from '@components/AuthMessage/LoginError';
import { LoginForm } from '@components/AuthLayout/LoginForm';
import { ProtectedRoute } from '@components/ProtectedRoute';
import { MainPage } from '@pages/main-page';
import { Route, Routes } from 'react-router-dom';
import { PATHS } from './paths';
import { RegisterForm } from '@components/AuthLayout/RegisterForm';
import { RegisterSuccess } from '@components/AuthMessage/RegisterSuccess';
import { RegisterErrorUserExist } from '@components/AuthMessage/RegisterErrorUserExist';
import { RegisterError } from '@components/AuthMessage/RegisterError';

export const NAVIGATION_ITEMS = (
    <Routes >
        <Route element={<ProtectedRoute />} >
            <Route path={PATHS.MAIN} element={<BasicLayout />}>
                <Route index element={<MainPage />} />
            </Route>
        </Route>

        <Route path={PATHS.AUTH} element={<AuthLayout />} >
            <Route index element={<LoginForm />} />
            <Route path={PATHS.LOGIN_ERROR} element={<LoginError />} />
            <Route path={PATHS.REGISTER} element={<RegisterForm />} />
            <Route path={`${PATHS.REGISTER}/${PATHS.REGISTER_SUCCESS}`} element={<RegisterSuccess />} />
            <Route path={`${PATHS.REGISTER}/${PATHS.REGISTER_ERROR_USER_EXIST}`} element={<RegisterErrorUserExist />} />
            <Route path={`${PATHS.REGISTER}/${PATHS.REGISTER_ERROR}`} element={<RegisterError />} />
            <Route path={PATHS.FORGOT_PASSWORD} element={<>NOW TO RESTORE</>} />
            <Route path={PATHS.FORGOT_PASSWORD_ERROR} element={<>error</>} />
            <Route path={PATHS.FORGOT_PASSWORD_ERROR_NO_EMAIL} element={<>NO EMAIL</>} />
        </Route>

        <Route path="*" element={<AuthLayout />}>
            <Route index element={<LoginForm />} />
        </Route>
    </Routes>
);
