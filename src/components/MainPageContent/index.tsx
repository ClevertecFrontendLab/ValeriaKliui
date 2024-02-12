import { FC } from 'react';
import { Card, Row, Col } from 'antd';
import styles from './index.module.css';
import { Typography, Space } from 'antd';
import { CARDS_INFO } from '@constants/cards/cards';

const { Title, Text } = Typography;

export const MainPageContent: FC = () =>
    <div className={styles.MainContent} >
        <Space direction={'vertical'} size='large' className={styles.MainSpace}>
            <Card className={styles.Cards}>
                <h6 className='color_blue10'>{`С CleverFit ты сможешь:
                        — планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;
                        — отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;
                        — создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;
                        — выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советами профессиональных тренеров.`}
                </h6>
            </Card>
            <Space direction={'vertical'} size='middle'>
                <Card >
                    <Title level={4}>
                        CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!                    </Title>
                </Card>

                <Row gutter={[16, 8]} className={styles.CardsGrid}>
                    {CARDS_INFO.map(({ title, text, icon, key }) =>
                        <Col key={key} sm={8} xs={24}>
                            <Card bordered={false} className={styles.Card} bodyStyle={{ padding: '11px 30px' }} key={key}
                                actions={
                                    [<div className={[styles.CardBottom, 'color_blue6'].join(' ')} >
                                        {icon}
                                        <Text className='color_blue6'>{text}</Text>
                                    </div>]
                                }>
                                <h6>{title}</h6>
                            </Card>
                        </Col>)}
                </Row>
            </Space>
        </Space>
    </div >

