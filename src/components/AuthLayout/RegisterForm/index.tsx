import { Button, Form, Input } from 'antd';
import { FC } from 'react';
import { GooglePlusOutlined } from '@ant-design/icons';
import { useRegisterUser } from '@hooks/useRegisterUser';
import { UserData } from '@hooks/interfaces';
import { validatePassword } from '@utils/validatePassword';
import { Typography } from 'antd';
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
        <Form name='normal_register' initialValues={{ remember: true }} onFinish={onRegisterFinish}>
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
                <Input
                    addonBefore={emailPrefix}
                    style={{ width: '100%' }}
                    data-test-id='registration-email'
                />
            </Form.Item>

            <Form.Item
                name='password'
                rules={[validatePassword]}
                help='Пароль не менее 8 символов, с заглавной буквой и цифрой'
                className='str'
            >
                <Input.Password placeholder='Пароль' data-test-id='registration-password' />
            </Form.Item>

            <Form.Item
                name='confirm'
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
                <Input.Password
                    placeholder='Повторите пароль'
                    className={styles.ConfirmPassword}
                    data-test-id='registration-confirm-password'
                />
            </Form.Item>
            <Form.Item>
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
