import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useResetPassword } from '@hooks/useResetPassword';
import { selectEmail } from '@redux/slices/authSlice';
import { Button, Result } from 'antd';
import { FC } from 'react';

import styles from './index.module.css';

export const ForgotPasswordError: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const { resetPassword } = useResetPassword();

    const onButtonClick = (): void => {
        resetPassword({ email: userEmail });
    };

    return (
        <Result
            status='500'
            title='Что-то пошло не так'
            subTitle='Произошла ошибка, попробуйте отправить форму ещё раз.'
            className={styles.Result}
            extra={
                <Button
                    type='primary'
                    size='large'
                    onClick={onButtonClick}
                    data-test-id='check-back-button'
                >
                    Назад
                </Button>
            }
        />)
};
