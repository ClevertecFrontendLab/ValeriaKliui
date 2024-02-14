import { FC, useState } from "react";
import Logo from '../../../public/img/logo.svg';
import { AuthForm } from "@components/AuthForm";
import { Tabs } from "antd";
import { AUTH_TABS } from "@constants/menu/menu";
import styles from './index.module.css';

export const Auth: FC = () => {
    return <div className={styles.Auth}>
        <img src={Logo} className={styles.Logo} />
        <Tabs defaultActiveKey='1' items={AUTH_TABS} />
        <AuthForm />
    </div>
}