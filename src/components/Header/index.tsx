import { FC } from 'react';
import { Layout, Typography } from 'antd';
import styles from './index.module.css';
import { MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';
import { Collapsed } from '@components/Sidebar/interfaces';

const { Title, Text } = Typography;

const { Header: PageHeader } = Layout;

export const Header: FC<Collapsed> = ({ collapsed, setCollapsed }) => {
    const toggleSidebar = () => { setCollapsed(!collapsed) }

    return (
        <PageHeader className={styles.Header}>
            <div onClick={toggleSidebar} className={styles.Trigger}>
                <div className={styles.Trapezia}>
                    <MenuFoldOutlined style={{ position: 'absolute' }} className={styles.TriggerIcon} />
                </div>
            </div>
            <div className={styles.HeaderText}>
                <Text>Главная</Text>
                <Title level={1}>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</Title>
            </div>
            <div>
                <div className={styles.Settings}>
                    <SettingOutlined className={styles.SettingsIcon} />
                    <Text className={styles.SettingsText} >Настройки</Text>
                </div>
            </div>
        </PageHeader>
    );
};
