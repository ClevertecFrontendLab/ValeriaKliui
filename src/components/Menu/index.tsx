import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';
import { useLoginUser } from '@hooks/useLoginUser';
import { Menu as MenuA } from 'antd';
import { FC } from 'react';

import ExitIcon from '/img/Exit.svg';

import styles from './index.module.css';
import { PATHS } from '@constants/navigation/paths';

export const Menu: FC = () => {
    const { logOut } = useLoginUser();

    return (
        <MenuA
            className={styles.Menu}
            items={[
                {
                    key: '1',
                    label: (
                        <a href={PATHS.CALENDAR}>
                            <CalendarTwoTone twoToneColor={['#061178', '#061178']} />
                            Календарь
                        </a>
                    ),
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
                    onClick: logOut,
                    className: styles.ItemBottomed,
                },
            ]}
        />
    );
};
