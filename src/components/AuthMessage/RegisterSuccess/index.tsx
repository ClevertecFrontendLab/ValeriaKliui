import { PATHS } from '@constants/navigation/paths';
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterSuccess: FC = () => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(PATHS.AUTH);
    };

    return (
        <Result
            status='success'
            title='Регистрация успешна'
            subTitle='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
            extra={
                <Button
                    type='primary'
                    block
                    size='large'
                    onClick={onButtonClick}
                    data-test-id='registration-enter-button'
                >
                    Войти
                </Button>
            }
        />
    );
};
