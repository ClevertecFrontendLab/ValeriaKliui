import { FC } from 'react';
import { Layout, Typography } from 'antd';
import styles from './index.module.css';
import { SettingOutlined } from '@ant-design/icons';

const { Title } = Typography;

const { Header: PageHeader } = Layout;

export const Header: FC = () => {
    return (
        <PageHeader className={styles.Header}>
            <div className={styles.HeaderText}>
                <p>Главная</p>
                <Title level={1}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</Title>
            </div>
            <div>
                <div className={styles.Settings}>
                    <SettingOutlined />
                    <p>Настройки</p>
                </div>
            </div>
        </PageHeader>
    );
};
