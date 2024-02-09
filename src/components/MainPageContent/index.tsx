import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.module.less';
import { Typography } from 'antd';
import { CARDS_INFO } from '@constants/cards/cards';

const { Title } = Typography;

export const MainPageContent: FC = () => {
    return (
        <div className={styles.MainContent} >
            <Card>
                <p >С CleverFit ты сможешь:</p>
                <p>— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</p>
                <p>— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;</p>
                <p>— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</p>
                <p>— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советами профессиональных тренеров.</p>
            </Card>
            <Card >
                <Title level={4}>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
                </Title>
            </Card>
            <Row gutter={40}>
                {CARDS_INFO.map(({ title, text, icon, key }) =>
                    <Col key={key}>
                        <Card title={title} className={styles.Card} bordered={false} bodyStyle={{ display: 'flex' }}>
                            {icon}
                            <p>{text}</p>
                        </Card>
                    </Col>)}
            </Row>
        </div >
    );
};
