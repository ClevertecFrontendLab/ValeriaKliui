import { AuthMessage } from '@components/AuthMessage';
import RegisterErrorIcon from '/img/Error.svg';
import { FC } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectRegisteredUser } from '@redux/slices/authSlice';
import { useRegisterUser } from '@hooks/useRegisterUser';

export const RegisterError: FC = () => {
    const registeredUser = useAppSelector(selectRegisteredUser);

    const register = useRegisterUser();
    const repeatRegister = () => registeredUser && register(registeredUser);

    return < AuthMessage
        svg={RegisterErrorIcon}
        title='Данные не сохранились'
        text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
        buttonText='Повторить'
        onClick={repeatRegister}
        dataTestId='registration-retry-button'
    />
}
