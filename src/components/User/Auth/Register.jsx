import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { register } from "../../../features/auth/authSlice";
import { Button, Card, Input, Text, VStack, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });
    const { name, email, password, password2 } = formData;
    const { message, isSuccess, isError } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSuccess) {
            toast({
                title: "Te has registrado con éxito",
                description: message,
                status: "success",
                duration: 3000,
                isClosable: true,
            });
        }
        if (isError) {
            toast({
                title: "Hubo un error al registrarte",
                description: message,
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    }, [message, isSuccess, isError, toast]);

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    const onSubmit = (e) => {
        e.preventDefault();

        if (password !== password2) {
            return notification.error({
                message: "Error",
                description: "Passwords do not match",
            });
        } else {
            dispatch(register(formData));
            setTimeout(() => {
                navigate("/register");
            }, 3000);
        }
    };
    return (
        <>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <Card w="80%" p="4%" mt="30%" ml="10%" mb="8%" boxShadow="2xl">
                    <form onSubmit={onSubmit}>
                        <VStack spacing="4" align="center">
                            <Text color="blue" as="b" fontSize="1.2em" mb="3%">
                                Bienvenid@
                            </Text>
                            <Input type="text" name="name" placeholder="name" value={name} onChange={onChange} />
                            <Input type="email" name="email" placeholder="email" value={email} onChange={onChange} />
                            <Input type="password" name="password" placeholder="password" value={password} onChange={onChange} />
                            <Input type="password" name="password2" placeholder="password" value={password2} onChange={onChange} />
                            <Button mt="8%" colorScheme="blue" type="submit">
                                Regístrate
                            </Button>
                        </VStack>
                    </form>
                </Card>
            </motion.div>
            <Link to="/">
                <Button mt="8%" ml="35%" colorScheme="blue" type="submit">
                    Ir a inicio
                </Button>
            </Link>
        </>
    );
};
export default Register;
