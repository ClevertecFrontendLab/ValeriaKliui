import { useLoginUserMutation } from '@redux/services/login';
import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useLoginUser = () => {
    const [loginUser, { data, isError, isLoading }] = useLoginUserMutation();
    const navigate = useNavigate();

    const [storagedToken, addTokenToStorage] = useLocalStorage('accessToken');

    useEffect(() => {
        if (data != null) addTokenToStorage(data.accessToken);
        if (storagedToken) navigate(PATHS.HOME);
        if (isError) navigate(PATHS.LOGIN_ERROR);
    }, [data, addTokenToStorage, navigate, storagedToken, isError]);

    const login = () => {
        loginUser({
            email: 'valeria@example.com',
            password:
                '0fHJPhRWIbVWTP7EEdkrbu1vSdTDXtd70PR9wcu5mYoCHr77YI16Yir5HRfhZKEG55h6YAjrAwHfGVdsPKmGUvJG8',
        });
    };

    return login;
};
