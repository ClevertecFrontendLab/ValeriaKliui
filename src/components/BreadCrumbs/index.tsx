import { PATHS } from '@constants/navigation/paths';
import { Breadcrumb } from 'antd';
import { useLocation } from 'react-router-dom';

export const BreadCrumbs = () => {
    const { pathname } = useLocation()
    const breadcrumbsPaths = [{ label: 'Отзывы пользователей', path: PATHS.FEEDBACK }];

    return (
        <Breadcrumb>
            <Breadcrumb.Item href={PATHS.MAIN}>Главная</Breadcrumb.Item>
            {breadcrumbsPaths.map(({ label, path }) => pathname.includes(path) && <Breadcrumb.Item key={path}>{label}</Breadcrumb.Item>)}
        </Breadcrumb>)
};