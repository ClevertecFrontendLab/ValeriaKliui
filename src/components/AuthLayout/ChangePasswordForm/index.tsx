import { PATHS } from '@constants/navigation/paths';
import { ErrorType } from '@hooks/interfaces';
import { useChangePasswordMutation } from '@redux/services/authorize';
import { ChangePasswordData } from '@redux/services/interfaces';
import { validatePassword } from '@utils/validatePassword';
import { Button, Form, Input } from 'antd';
import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
        <>
            Восстановление аккауанта
            <Form name='change_password' onFinish={onFinish}>
                <Form.Item
                    name='password'
                    rules={[validatePassword]}
                    help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                >
                    <Input.Password placeholder='Пароль' data-test-id='change-password' />
                </Form.Item>

                <Form.Item
                    name='confirmPassword'
                    dependencies={['password']}
                    rules={[
                        {
                            required: true,
                            message: 'Пожалуйста, подтвердите пароль',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Пароли не совпадают'));
                            },
                        }),
                    ]}
                >
                    <Input.Password placeholder='Повторите пароль' data-test-id='change-confirm-password'
                    />
                </Form.Item>

                <Form.Item>
                    <Button type='primary' htmlType='submit' block data-test-id='change-submit-button'>
                        Сохранить
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};
