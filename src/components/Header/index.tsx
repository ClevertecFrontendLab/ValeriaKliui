import { SettingOutlined } from '@ant-design/icons';
import { BreadCrumbs } from '@components/BreadCrumbs';
import { PATHS } from '@constants/navigation/paths';
import { Layout, Typography } from 'antd';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';

import styles from './index.module.css';

const { Title, Text } = Typography;

const { Header: PageHeader } = Layout;

export const Header: FC = () => {
    const { pathname } = useLocation();
    const isMainPage = pathname === PATHS.MAIN;

    return (
        <PageHeader className={styles.Header}>
            <div className={styles.HeaderText}>
                <BreadCrumbs />
                {isMainPage ? (
                    <Title level={1}>{`Приветствуем тебя в CleverFit — приложении,
                которое поможет тебе добиться своей мечты!`}</Title>
                ) : ''}
            </div>
            <div className={styles.SettingsContainer}>
                <span className={styles.Settings}>
                    <SettingOutlined className={styles.SettingsIcon} />
                    <Text className={styles.SettingsText}>Настройки</Text>
                </span>
            </div>
        </PageHeader>
    );
};
