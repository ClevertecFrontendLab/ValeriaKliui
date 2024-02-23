import { useCheckEmailMutation } from '@redux/services/authorize';
import { useEffect, useState } from 'react';
import { ErrorType, FormData } from './interfaces';
import { RESET_PASSWORD_ERROR_NO_EMAIL } from '@constants/index';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useResetPassword = () => {
    const [reset, { data, isError, isSuccess }] = useCheckEmailMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const navigate = useNavigate();

    const resetPassword = async (formData: FormData | null) => {
        if (formData) {
            const { email } = formData;
            try {
                email && (await reset({ email }).unwrap());
            } catch (error) {
                setError(error as ErrorType);
            }
        }
    };
    useEffect(() => {
        if (isError && error) {
            if (
                error.status === RESET_PASSWORD_ERROR_NO_EMAIL &&
                error.data.message === 'Email не найден'
            )
                navigate(PATHS.FORGOT_PASSWORD_ERROR_NO_EMAIL);
            else navigate(PATHS.FORGOT_PASSWORD_ERROR);
        }
        if (isSuccess) navigate(`${PATHS.AUTH}/${PATHS.FORGOT_PASSWORD}`, { replace: true });
    }, [error, data, isError, navigate, isSuccess]);

    return { resetPassword };
};
