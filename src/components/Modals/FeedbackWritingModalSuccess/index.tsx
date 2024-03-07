import { Button, Modal, Result } from 'antd';
import { FC } from 'react';
import { FeedbacksModalProps } from '../interfaces';

export const FeedbackWritingModalSuccess: FC<FeedbacksModalProps> = ({ open, onCancel }) => {
    return (
        <Modal open={open} onCancel={onCancel} centered footer={null} closable={false}>
            <Result
                status='success'
                title='Отзыв успешно опубликован'
                extra={
                    <Button type='primary' onClick={onCancel}>
                        Отлично
                    </Button>
                }
            />
        </Modal>
    );
};
