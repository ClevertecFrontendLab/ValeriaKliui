import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useConfirmEmailMutation } from '@redux/services/authorize';
import { selectEmail } from '@redux/slices/authSlice';
import Title from 'antd/lib/typography/Title';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';

export const ForgotPasswordForm: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const [sendCode, { isSuccess }] = useConfirmEmailMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const navigate = useNavigate();

    const onCodeComplete = async (code: string) => {
        try {
            await sendCode({ email: userEmail, code }).unwrap();
        } catch (error) {
            setError(error as ErrorType);
        }
    };

    useEffect(() => {
        if (isSuccess) navigate(`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD}`);
    }, [isSuccess, navigate]);


    return (
        <>
            {error ? (
                'щшибка'
            ) : (
                <>
                    <Title level={3}>Введите код для восстановления аккауанта</Title>
                    <p>
                        Мы отправили вам на e-mail {userEmail} шестизначный код. Введите его в поле
                        ниже.
                    </p>
                    <VerificationInput onComplete={onCodeComplete} />
                    <p>Не пришло письмо? Проверьте папку Спам.</p>
                </>
            )}
        </>
    );
};
