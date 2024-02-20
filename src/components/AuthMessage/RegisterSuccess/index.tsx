import { AuthMessage } from '@components/AuthMessage';
import RegisterSuccessIcon from '/img/RegisterSuccess.svg';
import { PATHS } from '@constants/navigation/paths';
import { FC } from 'react';

export const RegisterSuccess: FC = () => <AuthMessage
    svg={RegisterSuccessIcon}
    title='Регистрация успешна'
    text='Регистрация прошла успешно. Зайдите в приложение, используя свои e-mail и пароль.'
    buttonText='Войти'
    messagePath={PATHS.AUTH}
/>
