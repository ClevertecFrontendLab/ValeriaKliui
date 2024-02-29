import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { useConfirmEmailMutation } from '@redux/services/authorizeApi';
import { selectEmail } from '@redux/slices/appSlice';
import { Result, Typography } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerificationInput from 'react-verification-input';

import styles from './index.module.css'
const { Text } = Typography;

export const ForgotPasswordForm: FC = () => {
    const userEmail = useAppSelector(selectEmail) ?? '';
    const [sendCode, { isSuccess }] = useConfirmEmailMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const [codeValue, setCodeValue] = useState<string>('');
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
        if (isSuccess) {
            navigate(PATHS.AUTH + '/' + PATHS.CHANGE_PASSWORD);
        }
    }, [isSuccess, navigate]);

    return (
        <Result
            status={error ? 'error' : 'info'}
            title={(error ? 'Неверный код. ' : '') + 'Введите код\n для восстановления аккауанта'}
            subTitle={
                <>
                    Мы отправили вам на e-mail <span className={styles.Email}>{userEmail}</span> шестизначный код. Введите его в
                    поле ниже.
                </>
            }
            extra={
                <div className={styles.Extra}>
                    <VerificationInput
                        value={codeValue}
                        onComplete={onCodeComplete}
                        onChange={onChange}
                        inputProps={{ 'data-test-id': 'verification-input' }}
                        classNames={{
                            container: 'container',
                            character: ['character', error ? 'character--error' : ''].join(' '),
                            characterInactive: 'character--inactive',
                            characterSelected: 'character--selected',
                            characterFilled: 'character--filled',
                        }}
                    />
                    <Text className={styles.Text}>Не пришло письмо? Проверьте папку Спам.</Text>
                </div>
            }
        />
    );
};
