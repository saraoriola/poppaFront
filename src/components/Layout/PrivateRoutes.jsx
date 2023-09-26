import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./Layout";

const PrivateRoutes = () => {
    const { userConnected } = useSelector((state) => state.auth);

    if (!userConnected) return <Navigate to="/login" />;

    return <Layout />;
};

export default PrivateRoutes;
