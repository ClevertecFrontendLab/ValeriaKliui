import { REGISTER_ERROR_USER_EXIST } from '@constants/index';
import { PATHS } from '@constants/navigation/paths';
import { useRegisterMutation } from '@redux/services/authorize';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorType, UserData } from './interfaces';
import { saveRegisteredUser } from '@redux/slices/authSlice';
import { useDispatch } from 'react-redux';

export const useRegisterUser = () => {
    const [registerUser, { isError }] = useRegisterMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isError && error) {
            if (error.status === REGISTER_ERROR_USER_EXIST)
                navigate(PATHS.REGISTER_ERROR_USER_EXIST);
            else navigate(PATHS.REGISTER_ERROR);
        }
    }, [error, navigate, isError]);

    const register = async (data: UserData) => {
        try {
            const { email, password } = data ?? {};
            dispatch(saveRegisteredUser(data));
            await registerUser({ email, password }).unwrap();
            navigate(PATHS.REGISTER_SUCCESS);
        } catch (errorCatched: unknown) {
            setError(errorCatched as ErrorType);
        }
    };

    return register;
};
