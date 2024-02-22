import { AuthMessage } from '@components/AuthMessage';
import RegisterErrorIcon from '/img/Error.svg';
import { FC } from 'react';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectEmail } from '@redux/slices/authSlice';
import { useResetPassword } from '@hooks/useResetPassword';

export const ForgotPasswordError: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const { resetPassword } = useResetPassword();

    const onButtonClick = (): void => {
        resetPassword({ email: userEmail });
    }

    return <AuthMessage
        svg={RegisterErrorIcon}
        title='Что-то пошло не так'
        text='Произошла ошибка, попробуйте отправить форму ещё раз.'
        buttonText='Назад'
        dataTestId='check-back-button'
        onClick={onButtonClick}
    />
}
