import { FC, } from "react";
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { AUTH_TABS } from "@constants/menu/menu";
import { useLoginUser } from "@hooks/useLoginUser";
import { RuleObject } from "antd/lib/form";

export const LoginForm: FC = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <div>e-mail:</div>
        </Form.Item>
    );

    const validatePassword = () => ({
        validator(_: RuleObject, value: string) {
            if (new RegExp(/^(?=.*\d)(?=.*[A-Z])[a-zA-Z0-9]{8,}$/).test(value)) return Promise.resolve();
            return Promise.reject(new Error('Пароль не менее 8 символов, с заглавной буквой и цифрой'));
        }
    })

    const { login } = useLoginUser()

    return <>
        <Tabs defaultActiveKey='1' items={AUTH_TABS} />
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={login}
        >
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Пожалуйста, введите корректный email.', type: 'email' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[validatePassword]}
            >
                <Input.Password placeholder="Пароль" />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <a className="login-form-forgot" href="">
                    Забыли пароль?
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block className="login-form-button"
                >
                    Войти
                </Button>
            </Form.Item>

            <Form.Item>
                <Button icon={<GooglePlusOutlined />} htmlType="submit" block >
                    Войти через Google
                </Button>
            </Form.Item>
        </Form>
    </>


}
