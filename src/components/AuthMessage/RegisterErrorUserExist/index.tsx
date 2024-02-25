import { PATHS } from '@constants/navigation/paths';
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterErrorUserExist: FC = () => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        navigate(PATHS.AUTH + '/' + PATHS.REGISTER);
    };

    return (
        <Result
            status='error'
            title='Данные не сохранились'
            subTitle='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
            extra={
                <Button
                    type='primary'
                    block
                    size='large'
                    onClick={onButtonClick}
                    data-test-id='registration-back-button'
                >
                    Назад к регистрации
                </Button>
            }
        />
    );
};
