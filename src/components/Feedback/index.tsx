import './index.css';

import { StarFilled, StarOutlined } from '@ant-design/icons';
import { FeedbackI } from '@redux/services/interfaces';
import { Comment, Rate } from 'antd';
import { Typography } from 'antd';
import { FC } from 'react';

import noImg from '/img/no-user.jpg';

import styles from './index.module.css';

const { Text } = Typography;

export const Feedback: FC<Partial<FeedbackI>> = ({
    imageSrc,
    fullName,
    message,
    rating,
    createdAt,
}) => {
    const feedbackDate = createdAt ? new Date(createdAt).toLocaleString('ru', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    }) : '';


    return (
        <Comment
            className={styles.Feedback}
            avatar={
                <>
                    <img src={imageSrc ?? noImg} />
                    <h6>{fullName ?? 'Пользователь'}</h6>
                </>
            }
            content={<Text>{message}</Text>}
            datetime={
                <span className={styles.Info}>
                    <span className={styles.Stars}>
                        <Rate value={rating} disabled />
                    </span>
                    <span>
                        {feedbackDate}
                    </span>
                </span>
            }
        />
    );
};
