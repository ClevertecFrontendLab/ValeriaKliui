export enum PATHS {
    AUTH = '/auth',
    MAIN = '/main',
    REGISTER = 'register',
    REGISTER_SUCCESS = 'result/success',
    REGISTER_ERROR_USER_EXIST = 'result/error-user-exist',
    REGISTER_ERROR = 'result/error',
    LOGIN_ERROR = 'result/error-login',
    FORGOT_PASSWORD = 'confirm-email',
    FORGOT_PASSWORD_ERROR_NO_EMAIL = 'result/error-check-email-no-exist',
    FORGOT_PASSWORD_ERROR = 'result/error-check-email',
    CHANGE_PASSWORD = 'change-password',
    CHANGE_PASSWORD_ERROR = 'error-change-password',
    CHANGE_PASSWORD_SUCCESS = 'result/success-change-password'
}
