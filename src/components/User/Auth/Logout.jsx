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
        <Card w="30%" p="3%" mt="10%" ml="35%" mb="8%" boxShadow="2xl">
            <VStack spacing="4" align="center">
                <Text color="blue" as="b" fontSize="1.2em" mb="3%">
                    Cerrar Sesión
                </Text>
                <Button mt="8%" colorScheme="blue" onClick={handleLogout}>
                    Cerrar Sesión
                </Button>
            </VStack>
        </Card>
    );
};

export default Logout;
