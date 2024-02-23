import { AuthMessage } from '@components/AuthMessage';
import Success from '/img/Success.svg';
import { FC } from 'react';
import { PATHS } from '@constants/navigation/paths';

export const ChangePasswordSuccess: FC = () => (
    <AuthMessage
        svg={Success}
        title='Пароль успешно изменен'
        text='Теперь можно войти в аккаунт, используя свой логин и новый пароль'
        buttonText='Вход'
        messagePath={PATHS.AUTH}
        dataTestId='change-entry-button'
    />
);
