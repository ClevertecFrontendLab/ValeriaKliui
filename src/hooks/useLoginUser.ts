import { useLoginUserMutation } from '@redux/services/authorize';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';
import { UseLoginUserReturns, UserData } from './interfaces';

export const useLoginUser = (): UseLoginUserReturns => {
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
    }, [accessToken, storagedValue, navigate, setStoragedValue, isError, data]);


    const login = async (userData: UserData) => {
        const { email, password } = userData;
        await loginUser({
            email,
            password,
        }).unwrap();
    };

    const logOut = () => {
        removeFromStorage();
        navigate(PATHS.AUTH, { replace: true });
    };

    return { login, logOut };
};
