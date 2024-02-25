import './index.css';

import { Menu } from '@components/Menu';
import { SidebarClose } from '@components/SidebarClose';
import { Layout } from 'antd';
import { Grid } from 'antd';
import { FC } from 'react';

import logo from '/img/logo.svg';
import logoCollapsed from '/img/logo_collapsed.svg';

import styles from './index.module.css';
import { SidebarProps } from './interfaces';

const { useBreakpoint } = Grid;

const { Sider } = Layout;

export const Sidebar: FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
    const { xs } = useBreakpoint();

    return (
        <>
            <Sider
                className={styles.Sider}
                collapsedWidth='0'
                width={xs ? '106px' : '208px'}
                trigger={null}
                collapsed={collapsed}
                collapsible
            >
                <div
                    className={[
                        styles.LogoContainer,
                        collapsed ? styles.LogoContainerCollapsed : '',
                    ].join(' ')}
                >
                    <img
                        src={collapsed ? logoCollapsed : logo}
                        alt='CleverFit'
                        className={styles.Logo}
                    />
                </div>
                <Menu />
                {!xs && <SidebarClose onClick={toggleSidebar} />}
            </Sider>
            {xs && <SidebarClose onClick={toggleSidebar} collapsed={collapsed} />}
        </>
    );
};
