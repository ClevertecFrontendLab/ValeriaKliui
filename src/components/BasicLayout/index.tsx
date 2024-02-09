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
    return (
        <Layout className={styles.Layout} >
            <Sidebar collapsed={collapsed} />
            <Layout className={styles.LayoutRight}>
                <Header collapsed={collapsed} setCollapsed={setCollapsed} />
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </Layout>
        </Layout>
    );
};
