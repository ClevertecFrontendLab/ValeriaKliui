import { useLoginUserMutation } from '@redux/services/login';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useLoginUser = () => {
    const [loginUser, { data, isError }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { accessToken } = data ?? {};

    const [storagedToken, addTokenToStorage] = useLocalStorage('accessToken');

    // useEffect(() => {
    //     if (data != null) {
    //         console.log('was called')
    //         addTokenToStorage(accessToken)
    //     }
    //     console.log('data', data)
    //     // console.log('accessToken', data && data.accessToken)
    //     if (data && data.accessToken) navigate(PATHS.MAIN);
    //     if (isError) navigate(PATHS.LOGIN_ERROR);
    // }, [data, accessToken, addTokenToStorage, isError, navigate]);

    useEffect(() => {
        if (accessToken) {
            console.log(accessToken)
            addTokenToStorage(accessToken);
        }
        if (storagedToken) navigate(PATHS.MAIN)
        if (isError) navigate(PATHS.LOGIN_ERROR);
    }, [accessToken, addTokenToStorage, navigate, storagedToken, isError])

    const login = (userData) => {
        const { email, password } = userData;
        loginUser({
            email,
            password
        });
    };

    const logOut = () => {
        // addTokenToStorage(null)
        // navigate(PATHS.AUTH)
    };

    return { login, logOut };
};