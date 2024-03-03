import { useGetFeedbackQuery, usePostFeedbackMutation } from '@redux/services/feedbackApi';
import { UseFeedbacksReturns } from './interfaces';
import { useEffect, useState } from 'react';
import { FEEDBACK_INIT_AMOUNT } from '@constants/feebacks';
import { FeedbackI } from '@redux/services/interfaces';
import { FEEDBACKS_ERROR } from '@constants/constants';
import { useLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useFeedbacks = (): UseFeedbacksReturns => {
    const navigate = useNavigate();
    const { data: feedbacks, isError, error } = useGetFeedbackQuery({});
    const [feedbackAmount, setFeedbackAmount] = useState(FEEDBACK_INIT_AMOUNT);
    const showAllFeedbacks = () => {
        feedbacks &&
            setFeedbackAmount((prevAmount) =>
                prevAmount === FEEDBACK_INIT_AMOUNT ? feedbacks.length : FEEDBACK_INIT_AMOUNT,
            );
    };
    const { removeFromStorage } = useLocalStorage('accessToken');
    const feedbacksShowed =
        feedbacks &&
        [...feedbacks]
            .sort((a: FeedbackI, b: FeedbackI) => new Date(b.createdAt) - new Date(a.createdAt))
            .slice(0, feedbackAmount);

    const isAllFeedbacksShown = feedbackAmount === feedbacks?.length;

    const [isFeedbackModalOpened, setIsFeedbackModalOpened] = useState(false);
    const [isFeedbackErrorModalOpened, setIsFeedbackErrorModalOpened] = useState(false);
    const openWritingModal = () => setIsFeedbackModalOpened(true);
    const closeFeedbackErrorModal = () => {
        setIsFeedbackErrorModalOpened(false);
        navigate(PATHS.MAIN);
    };

    useEffect(() => {
        if (error?.status === FEEDBACKS_ERROR) {
            removeFromStorage();
            navigate(PATHS.AUTH);
        }
    }, [error]);

    useEffect(() => {
        if (isError) setIsFeedbackErrorModalOpened(true);
    }, [isError]);

    return {
        feedbacks: feedbacksShowed,
        openWritingModal,
        isFeedbackModalOpened,
        showAllFeedbacks,
        setIsFeedbackModalOpened,
        isAllFeedbacksShown,
        isFeedbackErrorModalOpened,
        closeFeedbackErrorModal,
    };
};
