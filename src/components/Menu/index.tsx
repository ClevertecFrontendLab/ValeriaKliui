import { FC } from "react";
import { Menu as MenuA } from 'antd';
import { HeartFilled, TrophyFilled, IdcardOutlined, CalendarTwoTone } from '@ant-design/icons';
import ExitIcon from '/public/img/Exit.svg'
import styles from './index.module.less'

export const Menu: FC = () => {
    return <>
        <MenuA
            className={styles.Menu}
            items={[
                {
                    key: '1',
                    icon: <CalendarTwoTone className="icon_blue" />,
                    label: 'Календарь',
                },
                {
                    key: '2',
                    icon: <HeartFilled className="icon_blue" />,
                    label: 'Тренировки',
                },
                {
                    key: '3',
                    icon: <TrophyFilled className="icon_blue" />,
                    label: 'Достижения',
                },
                {
                    key: '4',
                    icon: <IdcardOutlined className="icon_blue" />,
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