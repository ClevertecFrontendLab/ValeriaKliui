import { AuthError } from '@components/AuthError';
import LoginErrorIcon from '/img/LoginError.svg';
import { PATHS } from '@constants/navigation/paths';

export const LoginError = () => <AuthError
    svg={LoginErrorIcon}
    title='Вход не выполнен'
    text='Что-то пошло не так. Попробуйте еще раз'
    buttonText='Повторить'
    errorPath={PATHS.AUTH}
/>
