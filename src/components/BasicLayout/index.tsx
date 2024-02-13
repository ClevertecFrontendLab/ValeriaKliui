import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar/index';
import styles from './index.module.css';
import { Footer } from '@components/Footer';

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
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
