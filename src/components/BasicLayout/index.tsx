import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { Header } from '@components/Header';

const { Footer, Sider } = Layout;

export const BasicLayout: FC = () => {
    return (
        <Layout>
            <Sider
                breakpoint='lg'
                collapsedWidth='0'
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className='logo' />
                <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']} />
            </Sider>
            <Layout>
                <Header />
                <Outlet />
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
        // <Footer />
    );
};
