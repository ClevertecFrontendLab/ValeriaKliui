import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar/index';
import styles from './index.module.css';

const { Footer, Content } = Layout;

export const BasicLayout: FC = () => {
    return (
        <Layout className={styles.Layout}>
            <Sidebar />
            <Layout className={styles.LayoutRight}>
                <Header />
                <Content> <Outlet /></Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
