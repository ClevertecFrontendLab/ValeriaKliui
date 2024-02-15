import { useLocalStorage } from "@hooks/useLocalStorage";
import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ProtectedRouteProps } from "./interfaces";
import { PATHS } from "@constants/navigation/paths";

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const [storagedToken] = useLocalStorage('accessToken')
    if (!storagedToken) {
        return <Navigate to={PATHS.AUTH} replace />;
    }

    return children ? children : <Outlet />;
};