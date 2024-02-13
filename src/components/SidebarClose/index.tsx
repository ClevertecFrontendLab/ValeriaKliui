import { Grid, } from 'antd';
import styles from './index.module.css';
import { MenuFoldOutlined } from '@ant-design/icons';
import { SidebarCloseProps } from './interfaces';
import { FC } from 'react';

const { useBreakpoint } = Grid;

export const SidebarClose: FC<SidebarCloseProps> = ({ onClick, collapsed }) => {
    const { xs } = useBreakpoint()
    const leftStyle = xs ? (collapsed ? 0 : '105px') : 'inherit'

    return (
        <div onClick={onClick} className={styles.Trigger} data-test-id={xs ? 'sider-switch-mobile' : 'sider-switch'} style={{ left: leftStyle }}>
            <div className={styles.Trapezia}>
                <MenuFoldOutlined className={styles.TriggerIcon} />
            </div>
        </div>
    )
}
