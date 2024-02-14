import { FC } from "react";
import { Button, Checkbox, Form, Input, Tabs } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { AUTH_TABS } from "@constants/menu/menu";
import { useLoginUserMutation } from "@redux/services/login";

export const LoginForm: FC = () => {
    const prefixSelector = (
        <Form.Item name="prefix" noStyle>
            <div>e-mail:</div>
        </Form.Item>
    );

    const [loginUser] = useLoginUserMutation()

    return <>
        <Tabs defaultActiveKey='1' items={AUTH_TABS} />
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
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
                <Button type="primary" htmlType="submit" block className="login-form-button" onClick={() => loginUser({ email: 'askjalsdjsal@LKDA.com', password: 'KLKjlasdas9' })}>
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
