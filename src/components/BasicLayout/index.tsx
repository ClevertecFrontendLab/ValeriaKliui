import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar/index';
import { Layout } from 'antd';
import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './index.module.css';

const { Content } = Layout;

export const BasicLayout: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className={styles.Layout}>
            <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
            <Layout className={styles.LayoutRight}>
                <Header />
                <Content
                    className={[styles.Content, collapsed ? styles.ContentCollapsed : ''].join(' ')}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
