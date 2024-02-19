import { FC } from 'react';
import styles from './index.module.css';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Logo from '/img/logo.svg';
import { AUTH_TABS } from '@constants/menu/menu';
import { Tabs } from 'antd';

export const AuthLayout: FC = () => {
    const { pathname } = useLocation();
    const isError = pathname.includes('result')
    const navigate = useNavigate();
    const changePaths = (activeKey: string) => {
        navigate(AUTH_TABS[Number(activeKey) - 1].path)
    }
    return (
        <div className={styles.Layout}>
            <div className={styles.ContentContainer}>
                <div className={styles.AuthContent}>
                    {!isError && <>
                        <img src={Logo} />
                        <Tabs defaultActiveKey='1' items={AUTH_TABS} onChange={changePaths} />
                    </>}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
