import { FeedbackI } from '@redux/services/interfaces';

export interface UseLocalStorageReturns {
    storagedValue: string;
    setStoragedValue: (key: string) => void;
    removeFromStorage: () => void;
}
export interface UseSessionStorageReturns {
    storagedValue: string;
    setStoragedValue: (key: string) => void;
    removeFromStorage: () => void;
}

export interface UserData {
    email: string;
    password: string;
    remember?: boolean;
    confirmPassword?: string;
}

export interface UseLoginUserReturns {
    logOut: () => void;
    login: (userData: UserData) => void;
    loginGoogle: () => void;
}

export interface ErrorType {
    status: number;
    data: {
        statusCode: number;
        error: string;
        message: string;
    };
}

export type FormData = Record<string, string> & UserData;

export interface UseFeedbacksReturns {
    feedbacks?: FeedbackI[];
    openWritingModal: () => void;
    isFeedbackModalOpened: boolean;
    showAllFeedbacks: () => void;
    setIsFeedbackModalOpened: (isOpened: boolean) => void;
    isAllFeedbacksShown: boolean;
}
