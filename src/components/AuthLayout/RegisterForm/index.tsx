import { Button, Form, Input } from "antd";
import { FC } from "react";
import { RuleObject } from "antd/lib/form";
import { GooglePlusOutlined } from "@ant-design/icons";
import { useRegisterUserMutation } from "@redux/services/authorize";

export const RegisterForm: FC = () => {
    const validatePassword = () => ({
        validator(_: RuleObject, value: string) {
            if (new RegExp(/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/).test(value)) return Promise.resolve();
            return Promise.reject(new Error('Пароль не менее 8 символов, с заглавной буквой и цифрой'));
        }
    })

    const emailPrefix = (
        <Form.Item name="prefix" noStyle>
            <div>e-mail:</div>
        </Form.Item>
    );

    const [registerUser, { data, isError }] = useRegisterUserMutation();


    return <Form
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={(data) => registerUser({ email: data.email, password: data.password })}
    >
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Пожалуйста, введите корректный email.', type: 'email' }]}
        >
            <Input addonBefore={emailPrefix} style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
            name="password"
            rules={[validatePassword]}
            extra='Пароль не менее 8 символов, с заглавной буквой и цифрой'
        >
            <Input.Password placeholder="Пароль" />
        </Form.Item>

        <Form.Item
            name="confirm"
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
            <Input.Password placeholder="Повторите пароль" />

        </Form.Item>
        <Form.Item>
            <Button type="primary" htmlType="submit" block className="register-form-button"
            >
                Зарегистрироваться
            </Button>
        </Form.Item>

        <Form.Item>
            <Button icon={<GooglePlusOutlined />} htmlType="submit" block >
                Регистрация через Google
            </Button>
        </Form.Item>
    </Form>
}
