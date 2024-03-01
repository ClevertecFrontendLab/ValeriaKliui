import { UserData } from '@hooks/interfaces';
import { FeedbackI } from '@redux/services/interfaces';

export interface AuthState {
    user: UserData | null;
    token: string | null
}
export interface FeedbackFormData {
    message: string | null;
    rating: number;
}
export interface FeedbacksState extends FeedbackFormData {

}