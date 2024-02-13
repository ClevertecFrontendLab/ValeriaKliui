import { FC } from 'react';
import { Layout } from 'antd';
import styles from './index.module.css';
import { Menu } from '@components/Menu';
import logo from '/img/logo.svg';
import logoCollapsed from '/img/logo_collapsed.svg';
import { SidebarProps } from './interfaces';
import { Grid, } from 'antd';
import { SidebarClose } from '@components/SidebarClose';


const { useBreakpoint } = Grid;

const { Sider } = Layout;

export const Sidebar: FC<SidebarProps> = ({ collapsed, toggleSidebar }) => {
    const { xs } = useBreakpoint()

    return <>
        <Sider
            className={styles.Sider}
            collapsedWidth="0"
            width={xs ? '106px' : '208px'}
            trigger={null}
            collapsed={collapsed}
            collapsible
        >
            <img src={collapsed ? logoCollapsed : logo} className={styles.Logo} alt='CleverFit' />
            <Menu />
            {!xs && <SidebarClose onClick={toggleSidebar} />}
        </Sider>
        {xs && <SidebarClose onClick={toggleSidebar} collapsed={collapsed} />}
    </>
}
