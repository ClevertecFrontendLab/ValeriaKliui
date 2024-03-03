import { PATHS } from "@constants/navigation/paths";
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";

export const Redirect: FC = () => {
    const location = useLocation()

    return <Navigate to={PATHS.AUTH} state={{ from: location }} replace />
}
