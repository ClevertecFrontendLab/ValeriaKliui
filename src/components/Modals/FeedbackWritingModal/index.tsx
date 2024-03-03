import { FeedbackForm } from '@components/FeedbackForm';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { selectFeedback } from '@redux/slices/feedbacksSlice';
import { Button, Modal } from 'antd';
import { FC } from 'react';
import { FeedbacksWritingModalProps } from '../interfaces';

export const FeedbackWritingModal: FC<FeedbacksWritingModalProps> = ({ open, setIsOpened = () => { }, postFeedback }) => {
    const feedback = useAppSelector(selectFeedback);
    const isButtonDisabled = feedback.rating === 0;

    const handleOk = () => {
        setIsOpened(false);
        postFeedback(feedback);
    };

    const handleCancel = () => {
        setIsOpened(false);
    };

    return (
        <Modal
            title='Ваш отзыв'
            open={open}
            onCancel={handleCancel}
            centered
            footer={[
                <Button
                    key='submit'
                    type='primary'
                    size='large'
                    disabled={isButtonDisabled}
                    onClick={handleOk}
                    data-test-id='new-review-submit-button'
                >
                    Опубликовать
                </Button>,
            ]}
        >
            <FeedbackForm />
        </Modal>
    );
};
