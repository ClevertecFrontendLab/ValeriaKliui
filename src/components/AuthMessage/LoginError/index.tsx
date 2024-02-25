import { PATHS } from '@constants/navigation/paths';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

export const LoginError = () => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(PATHS.AUTH);
    };

    return (
        <Result
            status='warning'
            title='Вход не выполнен.'
            subTitle='Что-то пошло не так. Попробуйте еще раз'
            extra={
                <Button
                    type='primary'
                    block
                    onClick={onButtonClick}
                    size='large'
                    data-test-id='login-retry-button'
                >
                    Повторить
                </Button>
            }
        />
    );
};
