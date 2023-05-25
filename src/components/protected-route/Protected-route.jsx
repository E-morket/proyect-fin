import { Navigate, Outlet } from "react-router-dom";

const ProtectedRouteComponent = ({
    isAllowed,
    redirectTo = '/Portafolio',
    children
}) => {
    if (!isAllowed) {
        return <Navigate to={redirectTo} />;

    }

    return children ? children : <Outlet />;
};

export default ProtectedRouteComponent;