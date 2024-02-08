import { FC } from 'react';
import { Layout } from 'antd';
import logo from '/img/logo.svg';
import styles from './index.module.css';
import { Menu } from '@components/Menu';

const { Sider } = Layout;

export const Sidebar: FC = () => {
    return (
        <Sider
            className={styles.Sider}
            breakpoint='xxl'
            collapsedWidth='0'
            width={'208px'}
        >
            <img src={logo} className={styles.Logo} alt='CleverFit' />
            <Menu />
        </Sider>
    );
};
