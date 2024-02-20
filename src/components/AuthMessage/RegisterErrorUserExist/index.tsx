import { AuthMessage } from '@components/AuthMessage';
import RegisterErrorIcon from '/img/RegisterError.svg';
import { PATHS } from '@constants/navigation/paths';
import { FC } from 'react';

export const RegisterErrorUserExist: FC = () => <AuthMessage
    svg={RegisterErrorIcon}
    title='Данные не сохранились'
    text='Такой e-mail уже записан в системе. Попробуйте зарегистрироваться по другому e-mail.'
    buttonText='Назад к регистрации'
    messagePath={`${PATHS.AUTH}/${PATHS.REGISTER}`}
    replacePath={true}
/>
