import { PATHS } from '@constants/navigation/paths';
import { Button, Result } from 'antd';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

export const ChangePasswordSuccess: FC = () => {
    const navigate = useNavigate()
    const onButtonClick = () => navigate(PATHS.AUTH);

    return (
        <Result status='success'
            title='Пароль успешно изменен'
            subTitle='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
            extra={
                <Button
                    type='primary'
                    block
                    size='large'
                    onClick={onButtonClick}
                    data-test-id='change-entry-button'
                >
                    Вход
                </Button>
            } />
    )
};
