import { HeartFilled, IdcardOutlined, CalendarOutlined, AndroidFilled, AppleFilled } from '@ant-design/icons';

export const CARDS_INFO = [
    { key: 1, title: 'Расписать тренировки', text: 'Тренировки', icon: <HeartFilled /> },
    { key: 2, title: 'Назначить календарь', text: 'Календарь', icon: <CalendarOutlined /> },
    { key: 3, title: 'Заполнить профиль', text: 'Профиль', icon: <IdcardOutlined /> }
]

export const APPS_AVAILABLE = [{ app: 'Android OS', icon: <AndroidFilled /> }, { app: 'Apple iOS', icon: <AppleFilled /> }]
