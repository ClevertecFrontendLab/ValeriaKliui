import { useGetFeedbackQuery } from '@redux/services/feedbackApi';
import { Comment, List, Tooltip } from 'antd';
import { FC, useEffect } from 'react';

import noImg from '../../../public/img/no-user.jpg';

export const FeedbackList: FC = () => {
    const { data: feedbacks } = useGetFeedbackQuery({});

    const data =
        feedbacks &&
        feedbacks
            .map(({ imageSrc, message, createdAt, fullName }) => ({
                avatar: (
                    <>
                        <img src={imageSrc ?? noImg} />
                        <h6>{fullName}</h6>
                    </>
                ),

                content: <p>{message}</p>,
                datetime:
                    <Tooltip title={new Date(createdAt).toDateString()}>
                        <span>{new Date(createdAt).toDateString()}</span>
                    </Tooltip>,
            }))
            .slice(0, 4);

    return (
        <List
            itemLayout='horizontal'
            dataSource={data}
            renderItem={({ avatar, content, datetime }) => (
                <Comment avatar={avatar} content={content} datetime={datetime} />
            )}
        />
    );
};
