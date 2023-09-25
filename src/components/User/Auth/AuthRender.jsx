import React from "react";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";
import { useSelector } from "react-redux";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import EventCreate from "../../Event/CreateEvent/EventCreate";

const AuthRender = () => {
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

export default AuthRender;
