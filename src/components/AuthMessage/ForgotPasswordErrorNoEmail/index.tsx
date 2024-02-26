import { PATHS } from '@constants/navigation/paths';
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ForgotPasswordErrorNoEmail: FC = () => {
    const navigate = useNavigate();
    const onButtonClick = () => navigate(PATHS.AUTH);
    return <Result
        status='error'
        title='Такой e-mail не зарегистрирован'
        subTitle='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
        extra={
            <Button
                type='primary'
                block
                size='large'
                onClick={onButtonClick}
                data-test-id='check-retry-button'
            >
                Попробовать снова
            </Button>
        }
    />
}
