import { FC, } from "react";
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { useLoginUser } from "@hooks/useLoginUser";

export const LoginForm: FC = () => {
    const emailPrefix = (
        <Form.Item name="prefix" noStyle>
            <div>e-mail:</div>
        </Form.Item>
    );


    const { login } = useLoginUser()

    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={login}
    >
        <Form.Item
            name="email"
            rules={[{ required: true, message: 'Пожалуйста, введите корректный email.', type: 'email' }]}
        >
            <Input addonBefore={emailPrefix} style={{ width: '100%' }} />
        </Form.Item>
        <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль.' }]}
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
}
