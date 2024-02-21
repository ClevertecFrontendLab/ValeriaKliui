import { FC, MouseEvent, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useLoginUser } from '@hooks/useLoginUser';
import Link from 'antd/lib/typography/Link';
import { useResetPassword } from '@hooks/useResetPassword';
import { saveLoginedUser } from '@redux/slices/authSlice';
import { useDispatch } from 'react-redux';
import { FormData } from '@hooks/interfaces';
import { validatePassword } from '@utils/validatePassword';
import styles from './index.module.css'
import { Typography } from 'antd';
const { Text } = Typography

export const LoginForm: FC = () => {
    const [formData, setFormData] = useState<FormData | null>(null);
    const [isEmailValidated, setIsEmailValidated] = useState(false);
    const { login } = useLoginUser();
    const dispatch = useDispatch();

    const { resetPassword } = useResetPassword();
    const reset = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        resetPassword(formData);
    };

    const emailPrefix = (
        <Form.Item name='prefix' noStyle>
            <Text>e-mail:</Text>
        </Form.Item>
    );
    return (
        <Form
            name='normal_login'
            initialValues={{ remember: true }}
            onFinish={login}
            onValuesChange={(fieldsData) => {
                setFormData(fieldsData);
                dispatch(saveLoginedUser(fieldsData));
            }}
            onFieldsChange={(fieldsData) => {
                fieldsData.some(({ name, errors }) => {
                    if (name[0] === 'email') {
                        if (errors && errors.length === 0) setIsEmailValidated(true);
                        else setIsEmailValidated(false);
                    } else setIsEmailValidated(true);
                });
            }}
        >
            <Form.Item
                name='email'
                rules={[
                    {
                        required: true,
                        message: 'Пожалуйста, введите корректный email.',
                        type: 'email',
                    },
                ]}
            >
                <Input addonBefore={emailPrefix} data-test-id='login-email' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={[{ required: true, message: 'Пожалуйста, введите пароль.' }, validatePassword]}
            >
                <Input.Password placeholder='Пароль' autoComplete='on' data-test-id='login-password' />
            </Form.Item>
            <Form.Item className={styles.LoginExtra}>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox data-test-id='login-remember'>
                        <Text>Запомнить меня</Text></Checkbox>
                </Form.Item>
                <Link onClick={reset} disabled={!isEmailValidated} data-test-id='login-forgot-button'>
                    <Text>   Забыли пароль?</Text>
                </Link>
            </Form.Item>

            <Form.Item className={styles.LoginButton}>
                <Button type='primary' htmlType='submit' block data-test-id='login-submit-button' size='large'>
                    Войти
                </Button>
            </Form.Item>

            <Form.Item>
                <Button icon={<GooglePlusOutlined />} htmlType='submit' block size='large'>
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
