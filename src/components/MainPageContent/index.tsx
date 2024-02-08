import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.module.css';
import { Typography } from 'antd';
import { HeartFilled, IdcardOutlined, CalendarOutlined } from '@ant-design/icons';
const { Title } = Typography;

export const MainPageContent: FC = () => {
    return (
        <div className={styles.mainContent} >
            <Card  >
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
                <Col >
                    <Card title='Расписать тренировки' className={styles.Card} bordered={false}>
                        <HeartFilled />
                        <p>Тренировки</p>
                    </Card>
                </Col>
                <Col>
                    <Card title='Назначить календарь' className={styles.Card} bordered={false}>
                        <CalendarOutlined />
                        <p>Календарь</p>
                    </Card>
                </Col>
                <Col>
                    <Card title='Заполнить профиль' className={styles.Card} bordered={false}>
                        <IdcardOutlined />
                        <p>Профиль</p>
                    </Card>
                </Col>
            </Row>
        </div >
    );
};
