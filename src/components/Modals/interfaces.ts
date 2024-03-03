import { FeedbacksState } from '@redux/slices/interfaces';
import { Modal } from 'antd';
import { ComponentProps } from 'react';

export interface FeedbacksModalProps extends ComponentProps<typeof Modal> {
    setIsOpened?: (isOpened: boolean) => void;
}
export interface FeedbacksWritingModalProps extends FeedbacksModalProps {
    postFeedback: (feedback: FeedbacksState) => void;
}
export interface FeedbackWritingModalErrorProps extends FeedbacksModalProps {
    tryPostFeedbackAgain: () => void;
}
