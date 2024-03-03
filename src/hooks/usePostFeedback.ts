import { usePostFeedbackMutation } from '@redux/services/feedbackApi';
import { useEffect, useState } from 'react';

export const usePostFeedback = () => {
    const [postFeedback, { isError, isSuccess }] = usePostFeedbackMutation();
    const [isErrorModalWritingOpened, setIsErrorModalWritingOpened] = useState(false);
    const [isSuccessModalOpened, setIsSuccessModalOpened] = useState(false);

    useEffect(() => {
        if (isError) setIsErrorModalWritingOpened(true);
        if (isSuccess) setIsSuccessModalOpened(true);
    }, [isError, isSuccess]);

    const closeErrorModalWriting = () => setIsErrorModalWritingOpened(false);
    const closeSuccessModal = () => setIsSuccessModalOpened(false);

    return {
        postFeedback,
        isErrorModalWritingOpened,
        closeErrorModalWriting,
        isSuccessModalOpened,
        closeSuccessModal,
    };
};
