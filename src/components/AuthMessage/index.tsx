import { FC } from 'react';
import { Typography, Button } from 'antd';
import { AuthMessageProps } from './interfaces';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
const { Title, Text } = Typography;

export const AuthMessage: FC<AuthMessageProps> = ({ svg, title, text, buttonText, messagePath, onClick, replacePath, dataTestId }) => {
    const navigate = useNavigate();
    const onButtonClick = () => {
        if (messagePath) navigate(messagePath, { replace: replacePath })
        else onClick && onClick()
    };

    return (
        <div className={styles.Container}>
            <img src={svg} className={styles.Icon} />
            <Title level={3}>{title}</Title>
            <Text className={styles.Text}>{text}</Text>
            <Button type='primary' block onClick={onButtonClick} data-test-id={dataTestId}>
                {buttonText}
            </Button>
        </div>
    );
};
