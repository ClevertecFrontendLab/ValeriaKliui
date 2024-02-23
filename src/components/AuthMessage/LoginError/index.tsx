import { AuthMessage } from '@components/AuthMessage';
import LoginErrorIcon from '/img/LoginError.svg';
import { PATHS } from '@constants/navigation/paths';

export const LoginError = () => (
    <AuthMessage
        svg={LoginErrorIcon}
        title='Вход не выполнен'
        text='Что-то пошло не так. Попробуйте еще раз'
        buttonText='Повторить'
        messagePath={PATHS.AUTH}
        dataTestId='login-retry-button'
    />
);
