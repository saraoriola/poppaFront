import { useSelector } from "react-redux";
import Logout from "../User/Auth/Logout";
import Login from "../User/Auth/Login";
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import EventCreate from "../Event/CreateEvent/EventCreate";

const Home = () => {
    const user = useSelector((state) => state.auth.user);
    return (
        <Box>
            {!user && (
                <Link to="register">
                    <Button ml="60%" mt="8%" colorScheme="blue">
                        Registrarse
                    </Button>
                </Link>
            )}
            {user && (
                <>
                    <Logout />
                    <EventCreate />
                </>
            )}
            {!user && <Login />}
        </Box>
    );
};

export default Home;
