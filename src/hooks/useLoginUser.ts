import { useLoginUserMutation } from '@redux/services/login';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useLoginUser = () => {
    const [loginUser, { data, isError }] = useLoginUserMutation();
    const navigate = useNavigate();
    const { accessToken } = data ?? {};

    const { storagedValue, setStoragedValue, removeFromStorage } = useLocalStorage('accessToken');

    useEffect(() => {
        if (accessToken) {
            setStoragedValue(accessToken);
        }
        if (storagedValue) navigate(PATHS.MAIN);
        if (isError) navigate(PATHS.LOGIN_ERROR);
    }, [accessToken, storagedValue, navigate, setStoragedValue, isError]);

    const login = (userData) => {
        const { email, password } = userData;
        loginUser({
            email,
            password,
        });
    };

    const logOut = () => {
        removeFromStorage();
        navigate(PATHS.AUTH, { replace: true });
    };

    return { login, logOut };
};
