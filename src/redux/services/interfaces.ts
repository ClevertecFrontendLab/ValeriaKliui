import { UserData } from '@hooks/interfaces';

export type ConfirmEmailData = Pick<UserData, 'email'> & { code: string };

export type ChangePasswordData = Pick<UserData, 'password'> & { confirmPassword: string };

export interface Feedback {
    id: string,
    fullName: string | null,
    imageSrc: string | null,
    message: string,
    rating: number,
    createdAt: string
}