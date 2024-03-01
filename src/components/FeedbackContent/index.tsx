import { FeedbackList } from '@components/FeedbackList';
import { FEEDBACK_INIT_AMOUNT } from '@constants/feebacks';
import { useGetFeedbackQuery, usePostFeedbackMutation } from '@redux/services/feedbackApi';
import { Button, Modal, Result } from 'antd';
import { FC, useState } from 'react';

import styles from './index.module.css';
import { FeedbackModal } from '@components/FeedbackModal';
import { FeedbackI } from '@redux/services/interfaces';

export const FeedbackContent: FC = () => {
    const [isModalOpened, setIsModalOpened] = useState(false);
    const { data: feedbacks } = useGetFeedbackQuery({});
    const [feedbackAmount, setFeedbackAmount] = useState(FEEDBACK_INIT_AMOUNT);
    const [postFeedback, { isError }] = usePostFeedbackMutation();
    const feebackShowed =
        feedbacks &&
        [...feedbacks]
            .sort((a: FeedbackI, b: FeedbackI) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, feedbackAmount);

    const increaseFeedbackAmount = () => {
        feedbacks &&
            setFeedbackAmount((prevAmount) =>
                prevAmount === FEEDBACK_INIT_AMOUNT ? feedbacks.length : FEEDBACK_INIT_AMOUNT,
            );
    };
    const openModal = () => setIsModalOpened(true);

    return (
        <>
            <FeedbackList feedbacks={feebackShowed} />
            <div className={styles.Button}>
                <Button type='primary' onClick={openModal}>
                    Написать отзыв
                </Button>
                <Button type='link' onClick={increaseFeedbackAmount}>
                    {feedbackAmount === feedbacks?.length
                        ? 'Свернуть все отзывы'
                        : 'Развернуть все отзывы'}
                </Button>
            </div>
            {isError && (
                <Modal open={true} centered footer={null} closable={false}>
                    <Result
                        status='error'
                        title='Данные не сохранились'
                        subTitle='Что-то пошло не так. Попробуйте ещё раз.'
                    />
                    <Button type='primary' onClick={openModal}>Написать отзыв</Button>
                    <Button>Закрыть</Button>
                </Modal>
            )}
            <FeedbackModal
                isOpened={isModalOpened}
                setIsOpened={setIsModalOpened}
                postFeedback={postFeedback}
            />
        </>
    );
};
