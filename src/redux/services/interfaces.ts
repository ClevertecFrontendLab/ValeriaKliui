import { UserData } from '@hooks/interfaces';

export type ConfirmEmailData = Pick<UserData, 'email'> & { code: string };

export type ChangePasswordData = Pick<UserData, 'email'> & { confirmPassword: string };
