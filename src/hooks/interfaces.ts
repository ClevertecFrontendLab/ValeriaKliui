export interface UseLocalStorageReturns {
    storagedValue: string;
    setStoragedValue: (key: string) => void;
    removeFromStorage: () => void
}

export interface UserData {
    email: string;
    password: string
}

export interface UseLoginUserReturns {
    logOut: () => void;
    login: (userData: UserData) => void
}

export interface ErrorType {
    status: number;
    data: {
        statusCode: number;
        error: string;
        message: string
    }
}

export type FormData = Record<string, string> & { email: string } 