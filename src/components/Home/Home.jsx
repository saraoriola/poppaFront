import { useSelector } from "react-redux";
import Logout from "../User/Auth/Logout";
import Login from "../User/Auth/Login";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";

const Home = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Box>
            {!user && (
                <Link to="register">
                    <Button ml="80%" mt="8%" colorScheme="blue">
                        Registrarse
                    </Button>
                </Link>
            )}
            {user && <Logout />}
            {!user && <Login />}
        </Box>
    );
};

export default Home;
