import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/auth/authSlice";
import { Button, Card, Text, VStack, useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        toast({
            title: "Logout",
            description: "Has cerrado sesión correctamente.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
        navigate("/");
    };

    return (
        <Button mt="6%" ml="60%" colorScheme="blue" onClick={handleLogout}>
            Cerrar Sesión
        </Button>
    );
};

export default Logout;
