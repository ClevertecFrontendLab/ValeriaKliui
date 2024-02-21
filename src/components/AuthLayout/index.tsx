import { FC } from 'react';
import styles from './index.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '/img/logo.svg';
import { AUTH_TABS } from '@constants/menu/menu';
import { Tabs } from 'antd';
import './index.css';

export const AuthLayout: FC = () => {
    const { pathname } = useLocation();
    const isAuthMessage = pathname.includes('result');
    const navigate = useNavigate();
    const changePaths = (activeKey: string) => {
        navigate(AUTH_TABS[Number(activeKey) - 1].path);
    };
    const activePath = pathname.slice(pathname.lastIndexOf('/') + 1);
    const activeKey = AUTH_TABS.find((tab) => tab.path.includes(activePath))?.key;

    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.AuthContent}>
                    {!isAuthMessage && (
                        <>
                            <img src={Logo} className={styles.Logo} />
                            <Tabs
                                activeKey={activeKey}
                                items={AUTH_TABS}
                                onChange={changePaths}
                                size='large'
                            />
                        </>
                    )}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
