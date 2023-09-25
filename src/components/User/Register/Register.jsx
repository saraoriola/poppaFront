import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../features/auth/authSlice";

import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack,
  useToast,
  Image,
  Select,
  HStack,
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
    lastName: "",
    birthDate: "",
    gender: "",
    phone: "",
    country: "",
    position: "",
    responsibility: "",
    area: "",
    interests: "",
  });

  const { name, email, password, password2, lastName, birthDate, gender, phone, country, position, responsibility, area, interests } = formData;
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
            <Box>
              <FormControl id="name" isRequired>
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
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="lastName">
                <FormLabel fontSize="xs" mt={4}>
                  Apellidos
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="lastName"
                  placeholder="Apellidos"
                  value={lastName}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="birthDate" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Fecha de Nacimiento
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="birthDate"
                  placeholder="Fecha de Nacimiento"
                  value={birthDate}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="gender" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Género
                </FormLabel>
                <Select
                  width="312px"
                  height="32px"
                  name="gender"
                  value={gender}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                >
                  <option value="">Selecciona tu género</option>
                  <option value="masculino">Masculino</option>
                  <option value="femenino">Femenino</option>
                  <option value="otro">Otro</option>
                </Select>
              </FormControl>

              <FormControl id="phone" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Teléfono
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="phone"
                  placeholder="Teléfono"
                  value={phone}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="country" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  País
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="country"
                  placeholder="País"
                  value={country}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="position" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Cargo
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="position"
                  placeholder="Cargo"
                  value={position}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="responsibility" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Responsabilidad
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="responsibility"
                  placeholder="Responsabilidad"
                  value={responsibility}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              <FormControl id="area" isRequired>
                <FormLabel fontSize="xs"  mt={4}>
                  Área
                </FormLabel>
                <Input
                  width="312px"
                  height="32px"
                  type="text"
                  name="area"
                  placeholder="Área"
                  value={area}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>

              
              <FormControl id="interests" isRequired>
                <FormLabel fontSize="xs" mt={4}>
                  Intereses
                </FormLabel>
                <Textarea
                  width="312px"
                  height="80px"
                  name="interests"
                  placeholder="Intereses"
                  value={interests}
                  onChange={onChange}
                  backgroundColor="#f8f8f8"
                  borderRadius={4}
                  borderColor="#cb7862"
                  className="input input-placeholder"
                  fontSize="xs"
                />
              </FormControl>
            </Box>

            <HStack width="88%" justifyContent="space-between" > 
              <Button width="48%" height="32px" colorScheme="blue" type="submit" bg="#cb7862" borderRadius={6}>
              Cancelar
              </Button>
              <Button width="48%" height="32px" colorScheme="blue" bg="#cb7862" borderRadius={6}>
                Regístrate
              </Button>
            </HStack>
          </VStack>
        </form>

        <Box mt={4} textAlign="center" display="flex" alignItems="center" justifyContent="center" mb={10}>
          <Text fontSize="sm">
            ¿Tienes cuenta? <Link to="/login" style={{ color: "#cb7862" }}>Inicia sesión</Link>
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Register;
