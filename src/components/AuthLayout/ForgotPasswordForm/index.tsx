import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useConfirmEmailMutation } from '@redux/services/authorize';
import { selectEmail } from '@redux/slices/authSlice';
import Title from 'antd/lib/typography/Title';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';
import ErrorIcon from '/img/Error.svg';
import InfoIcon from '/img/Info.svg';
import styles from './index.module.css';

export const ForgotPasswordForm: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const [sendCode, { isSuccess }] = useConfirmEmailMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const [codeValue, setCodeValue] = useState<string | null>(null);
    const navigate = useNavigate();

    const onChange = (code: string) => {
        setCodeValue(code);
    };

    const onCodeComplete = async (code: string) => {
        try {
            await sendCode({ email: userEmail, code }).unwrap();
        } catch (error) {
            setError(error as ErrorType);
        }
        setCodeValue('');
    };

    useEffect(() => {
        if (isSuccess) navigate(`${PATHS.AUTH}/${PATHS.CHANGE_PASSWORD}`, { replace: true });
    }, [isSuccess, navigate]);

    return (
        <div className={styles.Container}>
            <img src={error ? ErrorIcon : InfoIcon} className={styles.Logo} />
            <Title level={3}>
                {error && 'Неверный код. '}
                Введите код для восстановления аккауанта</Title>
            <p>Мы отправили вам на e-mail <b>{userEmail}</b> шестизначный код. Введите его в поле ниже.</p>
            <VerificationInput
                value={codeValue}
                onComplete={onCodeComplete}
                onChange={onChange}
                inputProps={{ 'data-test-id': 'verification-input' }}
                classNames={{
                    character: ["character", error ? 'character--error' : ''].join(' '),
                    characterInactive: "character--inactive",
                    characterSelected: "character--selected",
                }}
            />
            <p>Не пришло письмо? Проверьте папку Спам.</p>
        </div>
    );
};
