import { Button, Modal, Result } from "antd";
import { FC } from "react";
import { FeedbacksModalProps } from "../interfaces";

export const FeedbacksErrorModal: FC<FeedbacksModalProps> = ({ open, onCancel }) => {
    return <Modal
        open={open}
        onCancel={onCancel}
        centered
        footer={null}
        closable={false}
    >
        <Result
            status='500'
            title='Что-то пошло не так'
            subTitle='Произошла ошибка, попробуйте ещё раз.'
        />
        <Button
            type='primary'
            data-test-id='write-review-not-saved-modal'
            onClick={onCancel}
        >
            Назад
        </Button>
    </Modal>
}
