import { UserData } from '@hooks/interfaces';

export interface AuthState {
    user: UserData | null;
    token: string | null;
}
