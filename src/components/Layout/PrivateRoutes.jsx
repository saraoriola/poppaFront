import { Spinner } from "@chakra-ui/react";
import { useSelector } from "react-redux"; 
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

const PrivateRoutes = () => {
    const user = useSelector((state) => state.user); 
    const navigate = useNavigate(); 

    if (!user) {
        navigate("/login"); 
        return <Spinner/>; 
    }

    return <Layout />;
};

export default PrivateRoutes;
