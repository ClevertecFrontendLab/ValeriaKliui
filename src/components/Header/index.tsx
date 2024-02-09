import { FC } from 'react';
import { Layout, Typography } from 'antd';
import styles from './index.module.less';
import { MenuFoldOutlined, SettingOutlined } from '@ant-design/icons';
import { Collapsed } from '@components/Sidebar/interfaces';

const { Title } = Typography;

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
