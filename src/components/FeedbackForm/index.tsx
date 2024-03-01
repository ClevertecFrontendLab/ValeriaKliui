import { StarFilled, StarOutlined } from '@ant-design/icons';
import { Form, Input } from 'antd';
import { FC, useState } from 'react';

import styles from './index.module.css';
import { useAppDispatch, useAppSelector } from '@hooks/typed-react-redux-hooks';
import { saveFeedback, selectFeedback } from '@redux/slices/feedbacksSlice';

export const FeedbackForm: FC = () => {
    const dispatch = useAppDispatch();
    const [ratingSelected, setRatingSelected] = useState(0);
    const starsAmount = [...Array(5)].map((_, index) => index + 1);

    const [form] = Form.useForm();
    const message = Form.useWatch('message', form);

    const chooseRating = (rating: number) => () => {
        dispatch(saveFeedback({ message, rating }));
        setRatingSelected(rating);
    };

    return (
        <Form
            form={form}
            onValuesChange={({ message }) => dispatch(saveFeedback({ message, rating: ratingSelected }))}
        >
            <Form.Item>
                {starsAmount.map((star) => (
                    <span onClick={chooseRating(star)} key={star} className={styles.Star}>
                        {star > ratingSelected ? <StarOutlined /> : <StarFilled />}
                    </span>
                ))}
            </Form.Item>
            <Form.Item name='message'>
                <Input.TextArea autoSize />
            </Form.Item>
        </Form>
    );
};
