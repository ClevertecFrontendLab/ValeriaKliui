import { APPS_AVAILABLE } from '@constants/cards/cards';
import { Card,Layout } from 'antd';
import { FC } from 'react';

import styles from './index.module.css';
const { Footer: FooterA } = Layout;
import './index.css';

import { Typography } from 'antd';
import Link from 'antd/lib/typography/Link';

const { Text } = Typography;

export const Footer: FC = () => (
    <FooterA className={styles.Footer}>
        <Link className={styles.FooterText}>Смотреть отзывы</Link>
        <Card
            className={styles.FooterCard}
            actions={APPS_AVAILABLE.map(({ app, icon }) => (
                <div className={styles.CardAction}>
                    {icon}
                    {app}
                </div>
            ))}
        >
            <Link>Скачать на телефон </Link>
            <Text>Доступно в PRO-тарифе</Text>
        </Card>
    </FooterA>
);
