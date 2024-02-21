import { AuthMessage } from '@components/AuthMessage';
import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useConfirmEmailMutation } from '@redux/services/authorize';
import { selectEmail } from '@redux/slices/authSlice';
import Title from 'antd/lib/typography/Title';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import ErrorIcon from '/img/Error.svg'

export const ForgotPasswordForm: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const [sendCode, { isSuccess }] = useConfirmEmailMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const [codeValue, setCodeValue] = useState<string | null>(null)
    const navigate = useNavigate();

    const onChange = (code: string) => {
        setCodeValue(code)
    }

    const onCodeComplete = async (code: string) => {
        try {
            await sendCode({ email: userEmail, code }).unwrap();
        } catch (error) {
            setError(error as ErrorType);
        }
        setCodeValue('')
    };

    useEffect(() => {
        if (isSuccess) navigate(`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD}`, { replace: true });

    }, [isSuccess, navigate]);


    return (
        <>
            {error && <><img src={ErrorIcon} />
                <Title level={3}>Неверный код</Title></>}
            <Title level={3}>Введите код для восстановления аккауанта</Title>
            <p>
                Мы отправили вам на e-mail {userEmail} шестизначный код. Введите его в поле
                ниже.
            </p>
            <VerificationInput value={codeValue} onComplete={onCodeComplete} onChange={onChange} inputProps={{ 'data-test-id': 'verification-input' }} />
            <p>Не пришло письмо? Проверьте папку Спам.</p>
        </>


    );
};
