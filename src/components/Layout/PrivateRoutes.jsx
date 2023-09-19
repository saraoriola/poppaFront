import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const PrivateRoutes = () => {
    const user = useSelector((state) => state.user);

    if (!user) return <Navigate to="/login" />;

    return <Layout />;
};

export default PrivateRoutes;
