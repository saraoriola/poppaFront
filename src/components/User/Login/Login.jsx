import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { Button, Card, Input, Text, VStack, useToast } from "@chakra-ui/react";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const { email, password } = formData;

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            await dispatch(login(formData));

            toast({
                title: "Inicio de sesión exitoso",
                description: "¡Bienvenido de nuevo!",
                status: "success",
                duration: 2000,
                isClosable: true,
            });
            navigate("/");
        } catch (error) {
            toast({
                title: "Error de inicio de sesión",
                description: "Verifica tus credenciales e intenta nuevamente.",
                status: "error",
                duration: 2000,
                isClosable: true,
            });
        }
    };

    return (
        <>
            <Card w="80%" p="4%" mt="20%" ml="10%" boxShadow="2xl" bg="" mb="16%">
                <form onSubmit={onSubmit}>
                    <VStack spacing="4" align="center">
                        <Text color="blue" as="b" fontSize="1.2em" mb="3%">
                            Bienvenid@
                        </Text>
                        <Input type="email" name="email" placeholder="email@edem.es" value={email} onChange={onChange} />
                        <Input type="password" name="password" placeholder="password" value={password} onChange={onChange} />
                        <Button mt="8%" colorScheme="blue" type="submit">
                            Iniciar sesión
                        </Button>
                    </VStack>
                </form>
            </Card>
        </>
    );
};

export default Login;
