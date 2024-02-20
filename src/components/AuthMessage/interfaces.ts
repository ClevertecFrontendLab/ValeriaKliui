import { PATHS } from "@constants/navigation/paths";

export interface AuthMessageProps {
    svg: string;
    title: string;
    text: string;
    buttonText: string;
    messagePath?: PATHS | string;
    onClick?: () => void;
    replacePath?: boolean
}
