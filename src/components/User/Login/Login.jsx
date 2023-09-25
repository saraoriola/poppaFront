import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  VStack,
  useToast,
} from "@chakra-ui/react";

import "./Login.scss"
import HeaderRender from "../../Header/HeaderRender/HeaderRender";
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
    <HeaderRender/>
    <Box ml={4} mr={4}>

        <form onSubmit={onSubmit}>
          <VStack spacing="4" align="center">
            <Text as="b" fontSize="1.2em" mb="3%" className="title" >
              Bienvenid@
            </Text>
            <FormControl id="email" isRequired >
              <FormLabel className="imput  input-placeholder" fontSize="xs" mb={1}>Email</FormLabel>
              <Input
                height="32px" 
                type="email"
                name="email"
                placeholder="email@edem.es"
                value={email}
                onChange={onChange}
                borderColor="#cb7862"
                backgroundColor="#f8f8f8"
                borderRadius={4}
                className="imput  input-placeholder"
                fontSize="xs"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel className="imput  input-placeholder" fontSize="xs" mb={1}>Contraseña</FormLabel>
              <Input

  height="32px" 
  type="password"
  name="password"
  placeholder="password"
  value={password}
  onChange={onChange}
  borderColor="#cb7862"
  backgroundColor="#f8f8f8"
  borderRadius={4}
  className="imput  input-placeholder"
  fontSize="xs"
/>

            </FormControl>
            <Button mt="8%" colorScheme="blue" type="submit" bg="#cb7862" borderRadius={8} width="148px">
              Iniciar sesión
            </Button>
          </VStack>
        </form>
    </Box>
    
    
    </>
  );
};

export default Login;
