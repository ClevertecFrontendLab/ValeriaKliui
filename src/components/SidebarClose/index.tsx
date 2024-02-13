import { Grid } from 'antd';
import styles from './index.module.css';
import { MenuFoldOutlined } from '@ant-design/icons';
import { SidebarCloseProps } from './interfaces';
import { FC } from 'react';

const { useBreakpoint } = Grid;

export const SidebarClose: FC<SidebarCloseProps> = ({ onClick, collapsed }) => {
    const { xs } = useBreakpoint();

    return (
        <div
            onClick={onClick}
            className={[styles.Trigger, collapsed ? styles.TriggerCollapsed : ''].join(' ')}
            data-test-id={xs ? 'sider-switch-mobile' : 'sider-switch'}
        >
            <div className={styles.Trapezia}>
                <MenuFoldOutlined className={styles.TriggerIcon} />
            </div>
        </div>
    );
};
