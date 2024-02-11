import { FC } from "react";
import { Layout, Card } from 'antd';
import styles from './index.module.less'
import { APPS_AVAILABLE } from "@constants/cards/cards";
const { Footer: FooterA } = Layout;
import { Typography } from 'antd';
import Link from "antd/lib/typography/Link";

const { Text } = Typography;

export const Footer: FC = () => {
    return <FooterA className={styles.Footer}>
        <Link className={styles.FooterText}>Смотреть отзывы</Link>
        <Card className={styles.FooterCard} bodyStyle={{ padding: '12px 24px', }}
            actions={APPS_AVAILABLE.map(({ app, icon }) => <div className={styles.CardAction}>{icon}{app}</div>)} >
            <Link>Скачать на телефон </Link>
            <Text className="">Доступно в PRO-тарифе</Text>
        </Card>
    </FooterA>
}
