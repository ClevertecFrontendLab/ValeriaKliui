import { Button, Modal, Result } from "antd"
import { FC } from "react"
import { FeedbackWritingModalErrorProps } from "../interfaces"

export const FeedbackWritingModalError: FC<FeedbackWritingModalErrorProps> = ({ open, onCancel, tryPostFeedbackAgain }) => {
    return <Modal
        open={open}
        onCancel={onCancel}
        centered
        footer={null}
        closable={false}
    >
        <Result
            status='error'
            title='Данные не сохранились'
            subTitle='Что-то пошло не так. Попробуйте ещё раз.'
        />
        <Button
            type='primary'
            data-test-id='write-review-not-saved-modal'
            onClick={tryPostFeedbackAgain}
        >
            Написать отзыв
        </Button>
        <Button onClick={onCancel}>Закрыть</Button>
    </Modal>
}
