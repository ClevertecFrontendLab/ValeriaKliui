import { RuleObject } from 'antd/lib/form';

import { RuleType } from './interfaces';

export const validatePassword = () => {
    return [
        { required: true, message: 'Пожалуйста, введите пароль.' },
        {
            validator(_: RuleObject, value: string) {
                if (new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/).test(value))
                    return Promise.resolve();
                return Promise.reject(
                    new Error('Пароль не менее 8 символов, с заглавной буквой и цифрой'),
                );
            },
        },
    ];
};

export const validateConfirmationPassword = () => {
    return [
        {
            required: true,
            message: 'Пожалуйста, подтвердите пароль',
        },
        ({ getFieldValue }: { getFieldValue: (_: string) => string }) => ({
            validator(_: RuleObject, value: string) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('Пароли не совпадают'));
            },
        }),
    ];
};
export const validateEmail = () => {
    const type: RuleType = 'email';
    return [
        {
            required: true,
            message: 'Пожалуйста, введите корректный email.',
            type,
        },
    ];
};
