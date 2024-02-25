import { MenuFoldOutlined } from '@ant-design/icons';
import { Grid } from 'antd';
import { FC } from 'react';

import styles from './index.module.css';
import { SidebarCloseProps } from './interfaces';

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
