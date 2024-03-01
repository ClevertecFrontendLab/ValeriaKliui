import { GooglePlusOutlined } from '@ant-design/icons';
import { FormData } from '@hooks/interfaces';
import { useLoginUser } from '@hooks/useLoginUser';
import { useResetPassword } from '@hooks/useResetPassword';
import { saveUser } from '@redux/slices/appSlice';
import { validateEmail, validatePassword } from '@utils/validationRules';
import { Button, Checkbox, Form, Input } from 'antd';
import { Typography } from 'antd';
import Link from 'antd/lib/typography/Link';
import { FC, MouseEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './index.module.css';
import { useLazyGoogleAuthQuery } from '@redux/services/authorizeApi';
import { useLazyGetFeedbackQuery } from '@redux/services/feedbackApi';
const { Text } = Typography;

export const LoginForm: FC = () => {
    const [formData, setFormData] = useState<FormData | null>(null);
    const [isEmailValidated, setIsEmailValidated] = useState(false);
    const { login } = useLoginUser();
    const dispatch = useDispatch();
    const [loginGoogle] = useLazyGetFeedbackQuery()

    const { resetPassword } = useResetPassword();
    const reset = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        resetPassword(formData);
    };

    const onValuesChange = (fieldsData: FormData | null) => {
        setFormData(fieldsData);
        fieldsData != null && dispatch(saveUser(fieldsData));
    }

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
            onValuesChange={onValuesChange}
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
                rules={validateEmail()}
            >
                <Input addonBefore={emailPrefix} data-test-id='login-email' />
            </Form.Item>
            <Form.Item
                name='password'
                rules={validatePassword()}
            >
                <Input.Password
                    placeholder='Пароль'
                    autoComplete='on'
                    data-test-id='login-password'
                />
            </Form.Item>
            <Form.Item className={styles.LoginExtra}>
                <Form.Item name='remember' valuePropName='checked' noStyle>
                    <Checkbox data-test-id='login-remember'>
                        <Text>Запомнить меня</Text>
                    </Checkbox>
                </Form.Item>
                <Link
                    onClick={reset}
                    disabled={!isEmailValidated}
                    data-test-id='login-forgot-button'
                >
                    Забыли пароль?
                </Link>
            </Form.Item>

            <Form.Item className={styles.LoginButton}>
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    data-test-id='login-submit-button'
                    size='large'
                >
                    Войти
                </Button>
            </Form.Item>

            <Form.Item>
                <Button
                    icon={<GooglePlusOutlined />}
                    htmlType='submit'
                    block
                    size='large'
                    onClick={() => loginGoogle({})}
                    className={styles.ButtonNetwork}
                >
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
