import { FC, useEffect } from 'react';
import { Typography, Button } from 'antd';
import { AuthErrorProps } from './interfaces';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';
const { Title, Text } = Typography;

export const AuthError: FC<AuthErrorProps> = ({ svg, title, text, buttonText, errorPath }) => {
    const navigate = useNavigate();
    const onErrorClick = () => navigate(errorPath);
    const { key, pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes('result') && key === 'default') navigate(PATHS.AUTH);
    }, [key, navigate, pathname]);

    return (
        <div>
            <img src={svg} />
            <Title level={3}>{title}</Title>
            <Text>{text}</Text>
            <Button type='primary' block onClick={onErrorClick}>
                {buttonText}
            </Button>
        </div>
    );
};
