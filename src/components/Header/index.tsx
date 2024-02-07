import { FC } from 'react';
import { Layout } from 'antd';

const { Header: PageHeader } = Layout;

export const Header: FC = () => {
    return (
        <PageHeader>
            <h1>Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!</h1>
        </PageHeader>
    );
};
