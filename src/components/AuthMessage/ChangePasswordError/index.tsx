import { AuthMessage } from '@components/AuthMessage';
import ErrorIcon from '/img/Error.svg';
import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectConfirmedPassword, selectPassword } from '@redux/slices/authSlice';
import { useChangePasswordMutation } from '@redux/services/authorize';
import { ErrorType } from '@hooks/interfaces';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const ChangePasswordError: FC = () => {
    const password = useAppSelector(selectPassword) ?? '';
    const confirmPassword = useAppSelector(selectConfirmedPassword) ?? '';
    const [changePassword, { isSuccess }] = useChangePasswordMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const navigate = useNavigate();

    const onButtonClick = (): void => {
        try {
            changePassword({ confirmPassword, password });
        } catch (error) {
            setError(error as ErrorType);
        }
    };

    useEffect(() => {
        if (isSuccess) navigate(`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD_SUCCESS}`);
    }, [isSuccess, navigate]);

    return (
        <AuthMessage
            svg={ErrorIcon}
            title='Данные не сохранились'
            text='Произошла ошибка, попробуйте отправить форму ещё раз.'
            buttonText='Повторить'
            dataTestId='change-retry-button'
            onClick={onButtonClick}
        />
    );
};
