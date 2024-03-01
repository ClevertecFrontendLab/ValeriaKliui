import { FeedbackForm } from '@components/FeedbackForm';
import { useAppSelector } from '@hooks/typed-react-redux-hooks';
import { usePostFeedbackMutation } from '@redux/services/feedbackApi';
import { selectFeedback } from '@redux/slices/feedbacksSlice';
import { Button, Modal } from 'antd';
import { FC } from 'react';

export const FeedbackModal: FC = ({ isOpened, setIsOpened, postFeedback }) => {
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
            open={isOpened}
            onCancel={handleCancel}
            footer={[
                <Button
                    key='submit'
                    type='primary'
                    size='large'
                    disabled={isButtonDisabled}
                    onClick={handleOk}
                >
                    Опубликовать
                </Button>,
            ]}
            centered={true}
        >
            <FeedbackForm />
        </Modal>
    );
};
