import { GooglePlusOutlined } from '@ant-design/icons';
import { UserData } from '@hooks/interfaces';
import { useRegisterUser } from '@hooks/useRegisterUser';
import { validateConfirmationPassword, validateEmail, validatePassword } from '@utils/validationRules';
import { Button, Form, Input } from 'antd';
import { Typography } from 'antd';
import { FC } from 'react';

import styles from './index.module.css';
const { Text } = Typography;

export const RegisterForm: FC = () => {
    const register = useRegisterUser();
    const onRegisterFinish = (data: UserData) => register(data);

    const emailPrefix = (
        <Form.Item name='prefix' noStyle>
            <Text>e-mail:</Text>
        </Form.Item>
    );

    return (
        <Form name='normal_register' className={styles.Container} initialValues={{ remember: true }} onFinish={onRegisterFinish}>
            <Form.Item
                name='email'
                rules={validateEmail()}
            >
                <Input
                    addonBefore={emailPrefix}
                    style={{ width: '100%' }}
                    data-test-id='registration-email'
                />
            </Form.Item>

            <Form.Item
                name='password'
                rules={validatePassword()}
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                className={['str', styles.Password].join(' ')}
            >
                <Input.Password placeholder='Пароль' data-test-id='registration-password' />
            </Form.Item>

            <Form.Item
                name='confirm'
                dependencies={['password']}
                rules={validateConfirmationPassword()}
                className={styles.ConfirmPassword}
            >
                <Input.Password
                    placeholder='Повторите пароль'
                    data-test-id='registration-confirm-password'
                />
            </Form.Item>
            <Form.Item className={styles.Button}>
                <Button
                    type='primary'
                    htmlType='submit'
                    block
                    data-test-id='registration-submit-button'
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
                    className={styles.ButtonNetwork}
                >
                    Регистрация через Google
                </Button>
            </Form.Item>
        </Form>
    );
};
