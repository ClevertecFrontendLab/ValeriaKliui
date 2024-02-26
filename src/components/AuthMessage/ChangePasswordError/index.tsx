import { PATHS } from '@constants/navigation/paths';
import { useAppSelector } from '@hooks/index';
import { ErrorType } from '@hooks/interfaces';
import { useChangePasswordMutation } from '@redux/services/authorize';
import { selectConfirmedPassword, selectPassword } from '@redux/slices/authSlice';
import { Button, Result } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        if (isSuccess) navigate(PATHS.CHANGE_PASSWORD_SUCCESS);
    }, [isSuccess, navigate]);

    return (
        <Result
            status='error'
            title='Данные не сохранились'
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            extra={
                <Button
                    type='primary'
                    block
                    onClick={onButtonClick}
                    data-test-id='change-retry-button'
                    size='large'
                >
                    Повторить
                </Button>
            }
        />)
};
