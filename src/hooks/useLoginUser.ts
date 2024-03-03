import { PATHS } from '@constants/navigation/paths';
import { useLoginUserMutation } from '@redux/services/authorizeApi';
import { saveUser, selectUser } from '@redux/slices/appSlice';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { ErrorType, UseLoginUserReturns, UserData } from './interfaces';
import { useAppDispatch, useAppSelector } from './typed-react-redux-hooks';
import { useLocalStorage } from './useLocalStorage';
import { history } from '@redux/configure-store';
import { BASE_URL } from '@constants/constants';

export const useLoginUser = (): UseLoginUserReturns => {
    const location = useLocation();
    const [loginUser, { isError, isSuccess }] = useLoginUserMutation();
    const navigate = useNavigate();
    const [error, setError] = useState<ErrorType | null>(null);
    const dispatch = useAppDispatch();

    const { storagedValue, setStoragedValue, removeFromStorage } = useLocalStorage('accessToken');

    const loginedUser = useAppSelector(selectUser);

    useEffect(() => {
        if (storagedValue && isSuccess) navigate(PATHS.MAIN);
        if (isError) navigate(PATHS.LOGIN_ERROR);
    }, [navigate, storagedValue, isError, isSuccess, setStoragedValue]);

    useEffect(() => {
        const accessTokenGoogle = new URLSearchParams(history.location.state?.from?.search).get(
            'accessToken',
        );
        if (accessTokenGoogle != null) {
            localStorage.setItem('accessToken', JSON.stringify(accessTokenGoogle));
            navigate(PATHS.MAIN);
        }
        window.addEventListener('beforeunload', () => {
            if (loginedUser && loginedUser.remember === false) {
                removeFromStorage();
            }
        });
    }, []);

    const login = async (userData: UserData) => {
        try {
            const { email, password } = userData;
            dispatch(saveUser(userData));
            await loginUser({ email, password })
                .unwrap()
                .then((data) => setStoragedValue(data.accessToken));
        } catch (error) {
            setError(error as ErrorType);
        }
    };

    const logOut = () => {
        removeFromStorage();
        navigate(PATHS.AUTH, { replace: true });
    };

    const loginGoogle = () => {
        window.location.href = BASE_URL + '/auth/google';
    };

    return { login, logOut, loginGoogle };
};
