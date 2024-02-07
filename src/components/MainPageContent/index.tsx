import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.modules.css';

export const MainPageContent: FC = () => {
    console.log(styles);
    return (
        <div>
            <Card>
                <p>С CleverFit ты сможешь:</p>
                <p>— планировать свои тренировки в календаре, выбирая тип и уровень нагрузки;</p>
                <p>— создай свой профиль, куда ты можешь загружать свои фото, видео и отзывы о тренировках;</p>
            </Card>
            <Card>
                <h4>
                    CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не
                </h4>
            </Card>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title='Расписать тренировки' bordered={false}>Расписать тренировки</Card>
                </Col>
                <Col span={8}>
                    <Card title='Назначить календарь' bordered={false}>Назначить календарь</Card>
                </Col>
                <Col span={8}>
                    <Card title='Заполнить профиль' bordered={false}>Заполнить профиль</Card>
                </Col>
            </Row>
        </div>
    );
};
