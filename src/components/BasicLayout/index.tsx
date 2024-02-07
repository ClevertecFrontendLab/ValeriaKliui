import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Header } from '@components/Header';
import { Sidebar } from '@components/Sidebar/index';

const { Footer } = Layout;

export const BasicLayout: FC = () => {
    return (
        <Layout style={{ height: '100vh' }}>
            <Sidebar />
            <Layout>
                <Header />
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};
