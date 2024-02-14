import { FC } from 'react';
import styles from './index.module.css';
import { Outlet } from 'react-router-dom';
import Logo from '../../../public/img/logo.svg';

export const AuthLayout: FC = () => {
    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.AuthContent}>
                    <img src={Logo} />
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
