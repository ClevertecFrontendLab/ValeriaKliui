import { FC, MouseEvent, useState, } from "react";
import { Button, Checkbox, Form, Input, } from 'antd';
import { GooglePlusOutlined } from "@ant-design/icons";
import { useLoginUser } from "@hooks/useLoginUser";
import Link from "antd/lib/typography/Link";
import { useResetPassword } from "@hooks/useResetPassword";
import { saveLoginedUser } from "@redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { FormData } from "@hooks/interfaces";

export const LoginForm: FC = () => {
    const [formData, setFormData] = useState<FormData | null>(null)
    const [isEmailValidated, setIsEmailValidated] = useState(false);
    const { login } = useLoginUser();
    const dispatch = useDispatch();

    const { resetPassword } = useResetPassword()
    const reset = (e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        resetPassword(formData)
    }

    const emailPrefix = (
        <Form.Item name="prefix" noStyle>
            <div>e-mail:</div>
        </Form.Item>
    );
    return <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={login}
        onValuesChange={(fieldsData) => {
            setFormData(fieldsData);
            dispatch(saveLoginedUser(fieldsData))
        }}
        onFieldsChange={(fieldsData) => {
            fieldsData.some(({ name, errors }) => {
                if (name[0] === 'email') {
                    if (errors && errors.length === 0) setIsEmailValidated(true);
                    else setIsEmailValidated(false);
                }
                else setIsEmailValidated(true)
            })
        }}
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
            <Input.Password placeholder="Пароль" autoComplete="on" />
        </Form.Item>
        <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Запомнить меня</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" onClick={reset} href="" disabled={!isEmailValidated}>
                Забыли пароль?
            </Link>
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
