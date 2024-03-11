import { UserData } from '@hooks/interfaces';
import { TRAINING_TYPE } from '@redux/slices/interfaces';

export type ConfirmEmailData = Pick<UserData, 'email'> & { code: string };

export type ChangePasswordData = Pick<UserData, 'password'> & { confirmPassword: string };

export interface FeedbackI {
    id: string;
    fullName: string | null;
    imageSrc: string | null;
    message: string;
    rating: number;
    createdAt: string;
}
export interface TrainingOption {
    name: string;
    key: string;
}

export interface Exercise {
    date: string;
    name: string;
    weight: number;
    replays: number;
    approaches: number;
}
export interface Training {
    date: string;
    name: typeof TRAINING_TYPE;
    exercises: Exercise[];
}
