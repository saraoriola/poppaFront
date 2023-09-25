import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/auth/authSlice";
import logo from "../../../assets/images/logomarinaazul.png"

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  VStack,
  useToast,
  Image,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import HeaderRegister from "./HeaderRegister";
import HeaderBoxProfile from "./HeaderBoxProfile";

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
      return toast({
        title: "Error",
        description: "Las contraseñas no coinciden",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } else {
      dispatch(register(formData));
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    }
  };

  return (
    <>
      <HeaderRegister/>
      <HeaderBoxProfile/>
    <Box
      backgroundColor="#e6dfcf"
      height="100vh"
      width="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <form onSubmit={onSubmit}>
        <VStack align="center">
          <Box m={10}>
            <FormControl id="name" isRequired className="form-container">
              <FormLabel fontSize="xs" mb={1}>
                Nombre
              </FormLabel>
              <Input
                width="312px"
                height="32px"
                type="text"
                name="name"
                placeholder="Nombre"
                value={name}
                onChange={onChange}
                borderColor="#E6E5E5"
                backgroundColor="#f8f8f8"
                borderRadius={4}
                className="input input-placeholder"
                fontSize="xs"
              />
            </FormControl>

            <FormControl id="email" isRequired className="form-container" mt={4}>
              <FormLabel fontSize="xs" mb={1}>
                Correo electrónico
              </FormLabel>
              <Input
                width="312px"
                height="32px"
                type="email"
                name="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={onChange}
                borderColor="#E6E5E5"
                backgroundColor="#f8f8f8"
                borderRadius={4}
                className="input input-placeholder"
                fontSize="xs"
              />
            </FormControl>

            <FormControl id="password" isRequired className="form-container"  mt={4}>
              <FormLabel fontSize="xs" mb={1}>
                Contraseña
              </FormLabel>
              <Input
                width="312px"
                height="32px"
                type="password"
                name="password"
                placeholder="Contraseña"
                value={password}
                onChange={onChange}
                borderColor="#E6E5E5"
                backgroundColor="#f8f8f8"
                borderRadius={4}
                className="input input-placeholder"
                fontSize="xs"
              />
            </FormControl>

            <FormControl id="password2" isRequired className="form-container"  mt={4}> 
              <FormLabel fontSize="xs" mb={1}>
                Repite la contraseña
              </FormLabel>
              <Input
                width="312px"
                height="32px"
                type="password"
                name="password2"
                placeholder="Repite la contraseña"
                value={password2}
                onChange={onChange}
                borderColor="#E6E5E5"
                backgroundColor="#f8f8f8"
                borderRadius={4}
                className="input input-placeholder"
                fontSize="xs"
              />
            </FormControl>
          </Box>

          <Button width="312px" height="32px" colorScheme="blue" type="submit" bg="#cb7862" borderRadius={8}>
            Regístrate
          </Button>
        </VStack>
      </form>

      <Box mt={4} textAlign="center" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="sm">
          ¿Tienes cuenta? <Link to="/login" style={{ color: "#cb7862" }}>Inicia sesión</Link>
        </Text>
      </Box>
    </Box>
    
    
    
    
    
    </>
  );
};

export default Register;
