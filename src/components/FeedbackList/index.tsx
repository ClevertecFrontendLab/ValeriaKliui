import './index.css';

import { Feedback } from '@components/Feedback';
import { Typography } from 'antd';
import { FC } from 'react';
import { FixedSizeList } from 'react-window';

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
                <FixedSizeList
                    height={630}
                    width={'100%'}
                    itemCount={feedbacks.length}
                    itemSize={100}
                    itemData={feedbacks}
                    className='no-scrollbars'
                >
                    {({ data, index, style }) => (
                        <div style={style}>
                            <Feedback
                                imageSrc={data[index].imageSrc}
                                fullName={data[index].fullName}
                                message={data[index].message}
                                createdAt={data[index].createdAt}
                                rating={data[index].rating}
                                key={index}
                            />
                        </div>
                    )}
                </FixedSizeList>
            )}
        </>
    );
};
