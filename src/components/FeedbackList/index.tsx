import { Feedback } from '@components/Feedback';
import { List, Typography } from 'antd';
import { FC } from 'react';

import { FeedbackListProps } from './interfaces';
const { Title, Text } = Typography;

export const FeedbackList: FC<FeedbackListProps> = ({ feedbacks }) => {
    const noFeedbacks = feedbacks?.length === 0 || !feedbacks;

    return (
        <>
            {noFeedbacks ? (
                <div>
                    <Title level={3}>Оставьте свой отзыв первым</Title>
                    <Text>
                        Вы можете быть первым, кто оставит отзыв об этом фитнесс приложении.
                        Поделитесь своим мнением и опытом с другими пользователями, и помогите им
                        сделать правильный выбор.
                    </Text>
                </div>
            ) : (
                <List
                    itemLayout='horizontal'
                    dataSource={feedbacks}
                    renderItem={({ imageSrc, fullName, message, createdAt, rating, id }) => (
                        <Feedback
                            imageSrc={imageSrc}
                            fullName={fullName}
                            message={message}
                            createdAt={createdAt}
                            rating={rating}
                            key={id}
                        />
                    )}
                />
            )}
        </>
    );
};
