import { FC } from 'react';
import { Layout } from 'antd';
import styles from './index.module.css';
import { Menu } from '@components/Menu';
import logo from '/img/logo.svg';
import logoCollapsed from '/img/logo_collapsed.svg';
import { SidebarProps } from './interfaces';

const { Sider } = Layout;

export const Sidebar: FC<SidebarProps> = ({ collapsed }) => {
    return (
        <Sider
            className={styles.Sider}
            width={'208px'}
            trigger={null}
            collapsible collapsed={collapsed}
        >
            <img src={collapsed ? logoCollapsed : logo} className={styles.Logo} alt='CleverFit' data-test-id='sider-switch' />
            <Menu />
        </Sider>
    );
};
