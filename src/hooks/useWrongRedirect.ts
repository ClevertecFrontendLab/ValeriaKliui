import { useEffect } from 'react';
import { useAppSelector } from './typed-react-redux-hooks';
import { useLocation, useNavigate } from 'react-router-dom';
import { PATHS } from '@constants/navigation/paths';

export const useWrongRedirect = () => {
    const previousLocations = useAppSelector((store) => store.router.previousLocations);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const protectedPaths = ['result', PATHS.FORGOT_PASSWORD, PATHS.CHANGE_PASSWORD];
    const isProtected = protectedPaths.some((path) => pathname.includes(path));

    useEffect(() => {
        if (previousLocations?.length === 1 && isProtected) navigate(PATHS.AUTH);
    }, [previousLocations?.length, navigate, isProtected]);
};
