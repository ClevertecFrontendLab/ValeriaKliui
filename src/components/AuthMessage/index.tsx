import { FC, useEffect } from 'react';
import { Typography, Button } from 'antd';
import { AuthMessageProps } from './interfaces';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';
const { Title, Text } = Typography;

export const AuthMessage: FC<AuthMessageProps> = ({ svg, title, text, buttonText, messagePath, onClick, replacePath }) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        if (messagePath) navigate(messagePath, { replace: replacePath })
        else onClick && onClick()
    };
    const { key, pathname } = useLocation();

    useEffect(() => {
        if (pathname.includes('result') && key === 'default') navigate(PATHS.AUTH);
    }, [key, navigate, pathname]);

    return (
        <div>
            <img src={svg} />
            <Title level={3}>{title}</Title>
            <Text>{text}</Text>
            <Button type='primary' block onClick={onButtonClick}>
                {buttonText}
            </Button>
        </div>
    );
};
