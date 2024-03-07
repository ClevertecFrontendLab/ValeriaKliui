import { FeedbackList } from '@components/FeedbackList';
import { FEEDBACK_INIT_AMOUNT } from '@constants/feebacks';
import { useGetFeedbackQuery, usePostFeedbackMutation } from '@redux/services/feedbackApi';
import { Button, Modal, Result } from 'antd';
import { FC } from 'react';

import styles from './index.module.css';
import { FeedbackWritingModal } from '@components/Modals/FeedbackWritingModal';
import { useFeedbacks } from '@hooks/useFeedbacks';
import { usePostFeedback } from '@hooks/usePostFeedback';
import { FeedbacksErrorModal } from '@components/Modals/FeedbacksErrorModal';
import { FeedbackWritingModalError } from '@components/Modals/FeedbackWritingModalError';
import { FeedbackWritingModalSuccess } from '@components/Modals/FeedbackWritingModalSuccess';

export const FeedbackContent: FC = () => {
    const {
        feedbacks,
        openWritingModal,
        isFeedbackModalOpened,
        showAllFeedbacks,
        setIsFeedbackModalOpened,
        isAllFeedbacksShown,
        isFeedbackErrorModalOpened,
        closeFeedbackErrorModal,
    } = useFeedbacks();
    const {
        postFeedback,
        isErrorModalWritingOpened,
        closeErrorModalWriting,
        isSuccessModalOpened,
        closeSuccessModal,
    } = usePostFeedback();

    const tryPostFeedbackAgain = () => {
        closeErrorModalWriting();
        setIsFeedbackModalOpened(true);
    };

    return (
        <div className={styles.Container}>
            <FeedbackList feedbacks={feedbacks} />
            <div className={styles.Buttons}>
                <Button type='primary' onClick={openWritingModal} data-test-id='write-review'>
                    Написать отзыв
                </Button>
                {feedbacks && feedbacks.length > 0 && (
                    <Button
                        type='link'
                        onClick={showAllFeedbacks}
                        data-test-id='all-reviews-button'
                    >
                        {isAllFeedbacksShown ? 'Свернуть все отзывы' : 'Развернуть все отзывы'}
                    </Button>
                )}
            </div>
            <FeedbacksErrorModal
                open={isFeedbackErrorModalOpened}
                onCancel={closeFeedbackErrorModal}
            />
            <FeedbackWritingModal
                open={isFeedbackModalOpened}
                setIsOpened={setIsFeedbackModalOpened}
                postFeedback={postFeedback}
            />
            <FeedbackWritingModalError tryPostFeedbackAgain={tryPostFeedbackAgain} open={isErrorModalWritingOpened} onCancel={closeErrorModalWriting} />
            <FeedbackWritingModalSuccess open={isSuccessModalOpened} onCancel={closeSuccessModal} />
        </div>
    );
};
