import {
    AndroidFilled,
    AppleFilled,
    CalendarOutlined,
    HeartFilled,
    IdcardOutlined,
} from '@ant-design/icons';
import { PATHS } from '@constants/navigation/paths';

export const CARDS_INFO = [
    { key: 1, title: 'Расписать тренировки', text: 'Тренировки', icon: <HeartFilled /> },
    { key: 2, title: 'Назначить календарь', text: 'Календарь', icon: <CalendarOutlined />, link: PATHS.CALENDAR },
    { key: 3, title: 'Заполнить профиль', text: 'Профиль', icon: <IdcardOutlined /> },
];

export const APPS_AVAILABLE = [
    { app: 'Android OS', icon: <AndroidFilled /> },
    { app: 'Apple iOS', icon: <AppleFilled /> },
];
