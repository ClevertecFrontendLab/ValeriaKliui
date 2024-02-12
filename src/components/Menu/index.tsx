import { FC } from "react";
import { Menu as MenuA } from 'antd';
import { HeartFilled, TrophyFilled, IdcardOutlined, CalendarTwoTone } from '@ant-design/icons';
import ExitIcon from '/img/Exit.svg'
import styles from './index.module.css'

export const Menu: FC = () => {
    return <>
        <MenuA
            className={styles.Menu}
            items={[
                {
                    key: '1',
                    icon: <CalendarTwoTone twoToneColor={['#061178', '#061178']} />,
                    label: 'Календарь',
                },
                {
                    key: '2',
                    icon: <HeartFilled className="color_blue10" />,
                    label: 'Тренировки',
                },
                {
                    key: '3',
                    icon: <TrophyFilled className="color_blue10" />,
                    label: 'Достижения',
                },
                {
                    key: '4',
                    icon: <IdcardOutlined className="color_blue10" />,
                    label: 'Профиль',
                },
                {
                    key: '5',
                    className: styles.ItemBottomed,
                    icon: <img src={ExitIcon} width={16} />,
                    label: 'Выход',
                    style: { position: 'absolute', }
                },
            ]}
        />
    </>

}
