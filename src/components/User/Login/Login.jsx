import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../features/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Box, FormControl, FormLabel, Input, Button, Text, VStack, useToast, Image, Checkbox } from "@chakra-ui/react";
import "./Login.scss";
import logo from "../../../assets/images/logomarinaazul.png"

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { email, password } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const onChange = (e) => setFormData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login(formData));
      toast({ title: "Inicio de sesión exitoso", description: "¡Bienvenido de nuevo!", status: "success", duration: 2000, isClosable: true });
      navigate("/");
    } catch (error) {
      toast({ title: "Error de inicio de sesión", description: "Verifica tus credenciales e intenta nuevamente.", status: "error", duration: 2000, isClosable: true });
    }
  };

  return (
    <Box backgroundColor="#f8f8f8" height="100vh" width="100%" display="flex" flexDirection="column" justifyContent="center">
      <form onSubmit={onSubmit}>
        <VStack align="center">
          <Text as="b" fontSize="xl" className="title" justifyContent="center">Te damos</Text>
          <Text as="b" fontSize="xl" className="title" justifyContent="center" mt={-4}>la bienvenida a</Text>
          <Text as="b" fontSize="4xl" className="title" mt={-2}>Eventum</Text>
          <Text as="b" fontSize="lg" className="title" justifyContent="center" mt={5}>la plataforma de eventos de</Text>
          <Image src={logo} mt={3}/>
          <Box m={10}>
            <FormControl id="email" isRequired className="form-container">
              <FormLabel fontSize="xs" mb={1}>Correo electrónico</FormLabel>
              <Input width="312px" height="32px" type="email" name="email" placeholder="email@edem.es" value={email} onChange={onChange} borderColor="#E6E5E5" backgroundColor="#f8f8f8" borderRadius={4} className="input-placeholder" fontSize="xs" />
            </FormControl>
            <FormControl id="password" isRequired mt={4}>
              <FormLabel className="input input-placeholder" fontSize="xs" mb={1}>Contraseña</FormLabel>
              <Input width="312px" height="32px" type="password" name="password" placeholder="password" value={password} onChange={onChange} borderColor="#E6E5E5" backgroundColor="#f8f8f8" borderRadius={4} className="input input-placeholder" fontSize="xs" />
            </FormControl>
          </Box>
          <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
            <Checkbox mr="60px" size="sm" colorScheme="teal">Recuérdame</Checkbox>
            <Text fontSize="xs" color="#cb7862" cursor="pointer">He olvidado mi contraseña</Text>
          </Box>
          <Button width="312px" height="32px" colorScheme="blue" type="submit" bg="#cb7862" borderRadius={8}>Acceder</Button>
        </VStack>
      </form>
      <Box mt={4} textAlign="center" display="flex" alignItems="center" justifyContent="center">
        <Text fontSize="sm">¿No tienes cuenta? <Link to="/register" style={{ color: "#cb7862" }}>Regístrate</Link></Text>
      </Box>
    </Box>
  );
};

export default Login;
