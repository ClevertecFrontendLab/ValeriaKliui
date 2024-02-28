import { PATHS, PATHS_NO_DIRECT_ACCESS } from '@constants/navigation/paths';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAppSelector } from './typed-react-redux-hooks';

export const useWrongRedirect = () => {
    const previousLocations = useAppSelector((store) => store.router.previousLocations);
    const navigate = useNavigate();
    const { pathname } = useLocation();

    const isProtected = PATHS_NO_DIRECT_ACCESS.some((path) => pathname.includes(path));

    useEffect(() => {
        if (previousLocations?.length === 1 && isProtected) navigate(PATHS.AUTH);
    }, [previousLocations?.length, navigate, isProtected]);
};
