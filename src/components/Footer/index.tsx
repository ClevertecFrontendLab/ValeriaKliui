import { FC } from "react";
import { Layout } from 'antd';

const { Footer: FooterA } = Layout;

export const Footer: FC = () => {
    return <FooterA style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</FooterA>
}