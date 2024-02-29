import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useChangePasswordMutation } from '@redux/services/authorizeApi';
import { ChangePasswordData } from '@redux/services/interfaces';
import { validateConfirmationPassword, validatePassword } from '@utils/validationRules';
import { Button, Form, Input } from 'antd';
import Title from 'antd/lib/typography/Title';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './index.module.css';

export const ChangePasswordForm: FC = () => {
    const [changePassword, { isSuccess, isError }] = useChangePasswordMutation();
    const [error, setError] = useState<ErrorType | null>(null);
    const navigate = useNavigate();

    const onFinish = (data: ChangePasswordData) => {
        try {
            changePassword(data);
        } catch (error) {
            setError(error as ErrorType);
        }
    };

    useEffect(() => {
        if (isError) navigate(PATHS.CHANGE_PASSWORD_ERROR);
        if (isSuccess) navigate(PATHS.CHANGE_PASSWORD_SUCCESS);
    }, [navigate, isError, isSuccess]);

    return (
        <div>
            <Title level={3} className={styles.Title}>
                Восстановление аккауанта
            </Title>
            <Form name='change_password' onFinish={onFinish}>
                <Form.Item
                    name='password'
                    rules={validatePassword()}
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                    className={styles.Password}
                >
                    <Input.Password placeholder='Новый пароль' data-test-id='change-password' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
                    rules={validateConfirmationPassword()}
                    className={styles.ConfirmPassword}
                >
                    <Input.Password
                        placeholder='Повторите пароль'
                        data-test-id='change-confirm-password'
                    />
                </Form.Item>

                <Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        block
                        data-test-id='change-submit-button'
                        size='large'
                        className={styles.Button}
                    >
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};
