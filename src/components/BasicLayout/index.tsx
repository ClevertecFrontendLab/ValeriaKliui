import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar/index';
import styles from './index.module.css';
import { Footer } from '@components/Footer';
import { MenuFoldOutlined } from '@ant-design/icons';

const { Content } = Layout;

export const BasicLayout: FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const toggleSidebar = () => { setCollapsed(!collapsed) }
    console.log(collapsed)
    return (
        <Layout className={styles.Layout} >
            <Sidebar collapsed={collapsed} toggleSidebar={toggleSidebar} />
            <MenuFoldOutlined onClick={toggleSidebar} style={{ position: 'fixed', top: '10%', left: collapsed ? 0 : '106px', zIndex: 2000 }} />
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
