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
        <Button w="140px" h="32px" fontSize="14px" ml="17px" color="#F8F8F8" bgColor="#cb7862" type="submit" onClick={handleLogout}>
            Cerrar Sesión
        </Button>
    );
};

export default Logout;
