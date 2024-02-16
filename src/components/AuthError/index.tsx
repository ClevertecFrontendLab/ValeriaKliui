import { FC } from "react";
import { Typography, Button } from 'antd';
import { AuthErrorProps } from "./interfaces";
import { useNavigate } from "react-router-dom";
const { Title, Text } = Typography;

export const AuthError: FC<AuthErrorProps> = ({ svg, title, text, buttonText, errorPath }) => {
    const navigate = useNavigate();
    const onErrorClick = () => navigate(errorPath)

    return <div>
        <img src={svg} />
        <Title level={3}>{title}</Title>
        <Text>{text}</Text>
        <Button type="primary" block onClick={onErrorClick}>{buttonText}</Button>
    </div>
}
