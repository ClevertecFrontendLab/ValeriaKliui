import { FC } from "react";
import { Typography, Button } from 'antd';
import { AuthErrorProps } from "./interfaces";
const { Title, Text } = Typography;

export const AuthError: FC<AuthErrorProps> = ({ svg, title, text, buttonText }) =>
    <div>
        <img src={svg} />
        <Title level={3}>{title}</Title>
        <Text>{text}</Text>
        <Button type="primary" block>{buttonText}</Button>
    </div>
