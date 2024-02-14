import { FC } from 'react';
import styles from './index.module.css';
import { Auth } from '@components/Auth';

export const Layout: FC = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.Content}>
                    <Auth /></div>
            </div>
        </div>
    );
};
