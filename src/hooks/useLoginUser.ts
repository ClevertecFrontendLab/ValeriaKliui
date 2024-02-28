import { PATHS } from '@constants/navigation/paths';
import { useLoginUserMutation } from '@redux/services/authorize';
import { saveUser, selectUser } from '@redux/slices/authSlice';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ErrorType, UseLoginUserReturns, UserData } from './interfaces';
import { useAppDispatch, useAppSelector } from './typed-react-redux-hooks';
import { useLocalStorage } from './useLocalStorage';

export const useLoginUser = (): UseLoginUserReturns => {
    const [loginUser, { data, isError, isSuccess }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { accessToken } = data ?? {};
    const [error, setError] = useState<ErrorType | null>(null);
    const dispatch = useAppDispatch();

    const { storagedValue, setStoragedValue, removeFromStorage } = useLocalStorage('accessToken');

    const loginedUser = useAppSelector(selectUser);

    useEffect(() => {
        if (accessToken) {
            setStoragedValue(accessToken);
        }
        if (storagedValue && isSuccess) navigate(PATHS.MAIN);
        if (isError) navigate(PATHS.LOGIN_ERROR);
    }, [accessToken, navigate, setStoragedValue, storagedValue, isError]);

    useEffect(() => {
        window.addEventListener('beforeunload', () => {
            if (loginedUser && loginedUser.remember === false) {
                removeFromStorage();
            }
        });
    });

    const login = async (userData: UserData) => {
        try {
            const { email, password } = userData;
            dispatch(saveUser(userData));
            await loginUser({ email, password }).unwrap();
        } catch (error) {
            setError(error as ErrorType);
        }
    };

    const logOut = () => {
        removeFromStorage();
        navigate(PATHS.AUTH, { replace: true });
    };

    return { login, logOut };
};
