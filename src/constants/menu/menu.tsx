import { HeartFilled, TrophyFilled, IdcardOutlined, CalendarTwoTone } from '@ant-design/icons';
import ExitIcon from '/img/Exit.svg';
import { ItemType } from 'antd/lib/menu/hooks/useItems';


export const MENU_ITEMS: ItemType[] = [
    {
        key: '1',
        icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
        label: 'Календарь',
    },
    {
        key: '2',
        icon: <HeartFilled className='color_blue10' />,
        label: 'Тренировки',
    },
    {
        key: '3',
        icon: <TrophyFilled className='color_blue10' />,
        label: 'Достижения',
    },
    {
        key: '4',
        icon: <IdcardOutlined className='color_blue10' />,
        label: 'Профиль',
    },
    {
        key: '5',
        icon: <img src={ExitIcon} width={16} />,
        label: 'Выход',
        style: { position: 'absolute' },
    },
]

export const AUTH_TABS = [{
    key: '1',
    label: 'Вход'
}, {
    key: '2',
    label: 'Регистрация'
}]