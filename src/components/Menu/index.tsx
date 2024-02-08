import { FC } from "react";
import { Menu as MenuA } from 'antd';
import { HeartFilled, TrophyFilled, IdcardOutlined, CalendarTwoTone } from '@ant-design/icons';
import styles from './index.module.css'

export const Menu: FC = () => {
    return <MenuA
        className={styles.Menu}
        items={[
            {
                key: '1',
                icon: <CalendarTwoTone twoToneColor={'red'}
                />,
                label: 'Календарь',
            },
            {
                key: '2',
                icon: <HeartFilled />,
                label: 'Тренировки',
            },
            {
                key: '3',
                icon: <TrophyFilled />,
                label: 'Достижения',
            },
            {
                key: '4',
                icon: <IdcardOutlined />,
                label: 'Профиль',
            },
        ]}
    />
}