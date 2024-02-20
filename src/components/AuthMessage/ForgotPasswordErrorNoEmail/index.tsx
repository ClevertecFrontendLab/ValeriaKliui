import { AuthMessage } from '@components/AuthMessage';
import RegisterErrorIcon from '../../../../public/img/RegisterError.svg';
import { FC } from 'react';

export const ForgotPasswordErrorNoEmail: FC = () => <AuthMessage
    svg={RegisterErrorIcon}
    title='Данные не сохранились'
    text='Что-то пошло не так и ваша регистрация не завершилась. Попробуйте ещё раз.'
    buttonText='Повторить'
/>
