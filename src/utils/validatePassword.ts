import { RuleObject } from 'antd/lib/form';

export const validatePassword = () => ({
    validator(_: RuleObject, value: string) {
        if (new RegExp(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9]{8,}$/).test(value))
            return Promise.resolve();
        return Promise.reject(new Error('Пароль не менее 8 символов, с заглавной буквой и цифрой'));
    },
});
