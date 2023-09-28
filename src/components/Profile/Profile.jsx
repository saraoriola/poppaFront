import React, { useState } from "react";

import { Flex, VStack, FormControl, FormLabel, Input, Select, Button, Image, Box, Wrap, Text, HStack, Tag, TagLabel, TagCloseButton, WrapItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { MdModeEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import Logout from "../User/Logout/Logout";

const Profile = () => {
    const userConnected = useSelector((state) => state.auth.userConnected);
    const [interests, setInterests] = useState(["Masters", "Formación", "Futuro", "Finanzas e Inversión", "Gestión empresarial", "Habilidades directivas"]);

    const removeInterest = (index) => {
        const updatedInterests = [...interests];
        updatedInterests.splice(index, 1);
        setInterests(updatedInterests);
    };
    // console.log(userConnected);

    return (
        <>
            <Flex justifyContent="center" alignItems="center" flexDirection="column" bgColor="#e6dfcf">
                <Box h="105px" bgColor="rgba(203, 120, 98, 0.7)" w="360px" borderRadius="0" display="flex" alignItems="center">
                    <Box mt="108px" ml="116px">
                        <Box bgColor="gray" w="39px" h="39px" borderRadius="full" display="flex" justifyContent="center" alignItems="center" position="absolute" top="180px" left="160px">
                            <MdModeEdit size="18px" color="white" />
                        </Box>
                        <Image borderRadius="full" boxSize="128px" src="src/assets/images/user-icon.svg" alt="User" />
                    </Box>
                </Box>
                <HStack w="100%" mt="80px" ml="50px">
                    <Link to="/eventcard/5">
                        <Button w="140px" h="32px" fontSize="14px" bgColor="#F8F8F8" color="#cb7862" type="submit">
                            <Text>Mi código QR</Text>
                        </Button>
                    </Link>
                    <Logout />
                </HStack>
                <Box w="85%" mt="10%" variant="unstyled">
                    <VStack w="100%">
                        <FormControl id="nombre">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Nombre
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="apellidos">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Apellidos
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="email">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                E-mail
                            </FormLabel>
                            <Input type="email" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="contrasena">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Contraseña
                            </FormLabel>
                            <Input type="password" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <HStack w="100%">
                            <FormControl id="fechaNacimiento">
                                <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                    Fecha de Nacimiento
                                </FormLabel>
                                <Input type="date" bgColor="white" border="1px solid #cb7862" h="32px" fontSize="12px" fontFamily="PPTelegraf-Regular" />
                            </FormControl>

                            <FormControl id="genero">
                                <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                    Género
                                </FormLabel>
                                <Select bgColor="white" border="1px solid #cb7862" h="32px" fontSize="12px" fontFamily="PPTelegraf-Regular">
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otro">Otro</option>
                                </Select>
                            </FormControl>
                        </HStack>

                        <FormControl id="telefono">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Teléfono
                            </FormLabel>
                            <Input type="tel" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="pais">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                País
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="cargo">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Cargo
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="responsabilidad">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Responsabilidad
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>

                        <FormControl id="area">
                            <FormLabel fontSize="12px" fontFamily="PPTelegraf-Regular" color="#847c7b">
                                Área
                            </FormLabel>
                            <Input type="text" bgColor="white" border="1px solid #cb7862" h="32px" />
                        </FormControl>
                        <Text mr="80%" color="#847c7b" fontSize="12px" fontFamily="PPTelegraf-Regular">
                            Intereses:
                        </Text>

                        <Wrap spacing={2} alignItems="baseline">
                            {interests.map((interest, index) => (
                                <WrapItem key={index}>
                                    <Tag fontSize="10px" variant="subtle" bgColor="#004368" color="#F8F8F8">
                                        <TagLabel>{interest}</TagLabel>
                                        <TagCloseButton onClick={() => removeInterest(index)} />
                                    </Tag>
                                </WrapItem>
                            ))}
                        </Wrap>

                        <HStack w="100%" mb="16px" mt="16px">
                            <Button w="140px" h="32px" fontSize="14px" bgColor="#F8F8F8" color="#cb7862" type="submit">
                                <Text>Cancelar</Text>
                            </Button>

                            <Button w="140px" h="32px" fontSize="14px" ml="17px" color="#F8F8F8" bgColor="#cb7862" type="submit">
                                <Text>Guardar cambios</Text>
                            </Button>
                        </HStack>
                    </VStack>
                </Box>
            </Flex>
        </>
    );
};

export default Profile;
