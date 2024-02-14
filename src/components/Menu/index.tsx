import { FC } from 'react';
import { Menu as MenuA } from 'antd';
import styles from './index.module.css';
import { MENU_ITEMS } from '@constants/menu/menu';

export const Menu: FC = () => (
    <MenuA
        className={styles.Menu}
        items={MENU_ITEMS}
    />
);
