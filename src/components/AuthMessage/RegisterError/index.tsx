import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useRegisterUser } from '@hooks/useRegisterUser';
import { selectUser } from '@redux/slices/appSlice';
import { Button, Result } from 'antd';
import { FC } from 'react';


export const RegisterError: FC = () => {
    const registeredUser = useAppSelector(selectUser);

    const register = useRegisterUser();
    const onButtonClick = () => registeredUser && register(registeredUser);


    return (
        <Result
            status='error'
            title='Данные не сохранились'
            subTitle='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
            extra={
                <Button
                    type='primary'
                    block
                    size='large'
                    onClick={onButtonClick}
                    data-test-id='registration-retry-button'
                >
                    Повторить
                </Button>
            }
        />
    );
};
