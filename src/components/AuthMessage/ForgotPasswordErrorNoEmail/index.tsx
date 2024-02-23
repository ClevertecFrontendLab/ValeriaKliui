import { AuthMessage } from '@components/AuthMessage';
import RegisterErrorIcon from '/img/Error.svg';
import { FC } from 'react';
import { PATHS } from '@constants/navigation/paths';

export const ForgotPasswordErrorNoEmail: FC = () => (
    <AuthMessage
        svg={RegisterErrorIcon}
        title='Такой e-mail не зарегистрирован'
        text='Мы не нашли в базе вашего e-mail. Попробуйте войти с другим e-mail.'
        buttonText='Попробовать снова'
        messagePath={PATHS.AUTH}
        dataTestId='check-retry-button'
    />
);
