import './index.css';

import { AUTH_TABS } from '@constants/menu/menu';
import { PATHS } from '@constants/navigation/paths';
import { useWrongRedirect } from '@hooks/useWrongRedirect';
import { Tabs } from 'antd';
import { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import Logo from '/img/logo.svg';

import styles from './index.module.css';

export const AuthLayout: FC = () => {
    const { pathname } = useLocation();
    const isAuthMessage = pathname.includes('result');
    const pathsToHideUpInfo = [PATHS.CHANGE_PASSWORD, PATHS.FORGOT_PASSWORD];
    const isHiddenIpInfo = pathsToHideUpInfo.some((path) => pathname.includes(path));

    const navigate = useNavigate();
    const changePaths = (activeKey: string) => {
        navigate(AUTH_TABS[Number(activeKey) - 1].path);
    };
    const activePath = pathname.slice(pathname.lastIndexOf('/') + 1);
    const activeKey = AUTH_TABS.find((tab) => tab.path.includes(activePath))?.key;
    useWrongRedirect();

    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.AuthContent}>
                    {!isAuthMessage && !isHiddenIpInfo && (
                        <>
                            <img src={Logo} className={styles.Logo} />
                            <Tabs
                                activeKey={activeKey}
                                items={AUTH_TABS}
                                onChange={changePaths}
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
