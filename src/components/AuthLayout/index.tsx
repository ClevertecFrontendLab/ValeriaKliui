import './index.css';

import { AUTH_TABS } from '@constants/menu/menu';
import { PATHS_NO_DIRECT_ACCESS } from '@constants/navigation/paths';
import { useWrongRedirect } from '@hooks/useWrongRedirect';
import { Tabs } from 'antd';
import { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Logo from '/img/logo.svg';

import styles from './index.module.css';

export const AuthLayout: FC = () => {
    const { pathname } = useLocation();
    const isHiddenIpInfo = PATHS_NO_DIRECT_ACCESS.some((path) => pathname.includes(path));

    const navigate = useNavigate();

    useWrongRedirect();

    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.AuthContent}>
                    {!isHiddenIpInfo && (
                        <>
                            <img src={Logo} className={styles.Logo} />
                            <Tabs
                                defaultActiveKey={pathname}
                                items={AUTH_TABS}
                                onTabClick={(key) => navigate(key)}
                                size='large'
                                className={['text', styles.Tabs].join(' ')}
                            />
                        </>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
