import { AuthError } from '@components/AuthError';
import LoginErrorIcon from '../../../../public/img/LoginError.svg';

export const LoginError = () => (
    <AuthError
        svg={LoginErrorIcon}
        title='Вход не выполнен'
        text='Что-то пошло не так. Попробуйте еще раз'
        buttonText='Повторить'
    />
);
