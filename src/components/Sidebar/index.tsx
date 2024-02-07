import { FC } from 'react';
import { Layout, Menu } from 'antd';
import { CalendarOutlined, HeartFilled, TrophyFilled, IdcardOutlined } from '@ant-design/icons';
import logo from '/logo.svg';

const { Sider } = Layout;

export const Sidebar: FC = () => {
    return (
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
            <div className='demo-logo-vertical' />
            <img src={logo} className='logo react' alt='React logo' />
            <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <CalendarOutlined />,
                        label: 'Календарь',
                    },
                    {
                        key: '2',
                        icon: <HeartFilled />,
                        label: 'Тренировки',
                    },
                    {
                        key: '3',
                        icon: <TrophyFilled />,
                        label: 'Достижения',
                    },
                    {
                        key: '4',
                        icon: <IdcardOutlined />,
                        label: 'Профиль',
                    },
                ]}
            />
        </Sider>
    );
};
