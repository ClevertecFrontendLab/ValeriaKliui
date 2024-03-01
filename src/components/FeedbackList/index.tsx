import { Feedback } from '@components/Feedback';
import { List } from 'antd';
import { FC } from 'react';

import { FeedbackListProps } from './interfaces';

export const FeedbackList: FC<FeedbackListProps> = ({ feedbacks }) => (
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
);
