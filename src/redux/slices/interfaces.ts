import { UserData } from '@hooks/interfaces';
import type { Moment } from 'moment';

export interface AuthState {
    user: UserData | null;
    token: string | null;
}
export interface FeedbackFormData {
    message: string | null;
    rating: number;
}
export interface FeedbacksState extends FeedbackFormData { }

export enum TRAINING_TYPE {
    LEGS = 'Ноги',
    HANDS = 'Руки',
    STRENGTH = 'Силовая',
    BACK = 'Спина',
    CHEST = 'Грудь',
}
export interface TrainingsState {
    trainingType: TRAINING_TYPE | null;
    trainingDate: string | null
}
