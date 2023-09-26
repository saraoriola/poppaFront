import React, { useState } from 'react';
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md'
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logotipo.png"
import desafio from "../../assets/images/desafio.jpg"
import { phrases1, phrases2, phrases3, phrases4, phrases5 } from "../../Phrases/phrases";
import { Box, Button, Center, Heading, Image, Tabs, TabList, Tab, TabPanel, TabPanels, Stack, Checkbox, Text, } from "@chakra-ui/react";

const ApprovedAccepted = () => {
    const [checkboxStatus1, setCheckboxStatus1] = useState([false, false, false, false, false]);
    const [checkboxStatus2, setCheckboxStatus2] = useState([false, false, false, false, false]);
    const [checkboxStatus3, setCheckboxStatus3] = useState([false, false, false, false, false]);
    const [checkboxStatus4, setCheckboxStatus4] = useState([false, false, false, false, false]);
    const [checkboxStatus5, setCheckboxStatus5] = useState([false, false, false, false, false]);

    const userConnected = useSelector((state) => state.auth.userConnected);

    const handleCheckboxChange = (index, tab) => {
        switch (tab) {
            case 1:
                const newCheckboxStatus1 = [...checkboxStatus1];
                newCheckboxStatus1[index] = !newCheckboxStatus1[index];
                setCheckboxStatus1(newCheckboxStatus1);
                break;
            case 2:
                const newCheckboxStatus2 = [...checkboxStatus2];
                newCheckboxStatus2[index] = !newCheckboxStatus2[index];
                setCheckboxStatus2(newCheckboxStatus2);
                break;
            case 3:
                const newCheckboxStatus3 = [...checkboxStatus3];
                newCheckboxStatus3[index] = !newCheckboxStatus3[index];
                setCheckboxStatus3(newCheckboxStatus3);
                break;
            case 4:
                const newCheckboxStatus4 = [...checkboxStatus4];
                newCheckboxStatus4[index] = !newCheckboxStatus4[index];
                setCheckboxStatus4(newCheckboxStatus4);
                break;
            case 5:
                const newCheckboxStatus5 = [...checkboxStatus5];
                newCheckboxStatus5[index] = !newCheckboxStatus5[index];
                setCheckboxStatus5(newCheckboxStatus5);
                break;
            default:
                break;
        }
    };

    const areAllCheckboxesChecked = (checkboxes) => {
        return checkboxes.every((isChecked) => isChecked);
    };

    return (
        <Center as="section" bg="gray.100" h="100vh" p="5">
            <Box maxW="430px" bg="#e6dfcf" p="6">
                <Box paddingBottom="1rem">
                    <Box display="flex" alignItems="center" 
                    justifyContent="space-between" bg="#004368" p={1} borderRadius="xl">
                        <Image src={logo} />
                        <Avatar name={userConnected?.name} src={userConnected?.avatar} size="sm" />
                    </Box>
                </Box>
                <Image
                    src={desafio}
                    alt="openday"
                    borderRadius="xl"
                    objectFit="cover"
                    mx="auto"
                    mt={4}
                />
                <Heading my="4" size="lg" fontFamily="Nocturne-Black" color="#004368">
                    <p>Desafío de Tripulaciones</p>
                    The Bridge septiembre 2023
                </Heading>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px"}}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <BsCalendar3 size={25} color="#cb7862" />
                        <span style={{ marginLeft: "8px" , marginBottom: "2px" }}>29/09/2023</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", marginBottom: "4px" }}>
                        <BiTimeFive size={25} color="#cb7862" />
                        <span style={{ marginRight: "8px", marginBottom: "2px" }}>18:00 hrs</span>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <GoLocation size={25} color="#cb7862" />
                        <span style={{ marginLeft: "8px" }}>EDEM / Online </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <MdMapsHomeWork size={25} color="#cb7862" />
                        <span style={{ marginLeft: "8px" }}>Planta 2, sala reuniones 207 </span>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Center my="4">
                        <Button
                            backgroundColor="#white"
                            color="red"
                            _hover={{ backgroundColor: "red", color: 'white' }}
                            height="40px"
                            width="180px"
                            marginRight="20px"
                            border="3px solid #c11919" >
                            Cancelar evento
                        </Button>
                        <Button
                            backgroundColor="#cb7862"
                            color="white"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            height="40px"
                            width="180px" >
                            Modificar
                        </Button>
                    </Center>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Center my="0">
                        <Button
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            height="40px"
                            width="180px"
                            marginRight="20px"
                            border="2px solid #cb7862" >
                            Inscribir asistente
                        </Button>
                        <Button
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            height="40px"
                            width="180px"
                            border="2px solid #cb7862" >
                            <Link to="/dashboard/:id" >Dashbord </Link>
                        </Button>
                    </Center>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Center my="3">
                        <Button
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            height="40px"
                            width="180px"
                            marginRight="20px"
                            border="2px solid #cb7862" >
                            Salidas
                        </Button>
                        <Button
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            height="40px"
                            width="180px"
                            border="2px solid #cb7862" >
                            Foro
                        </Button>
                    </Center>
                </div>
                <div>
                    <Center my="0">
                        <Button
                            my="2"
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="1px"
                            w="380px"
                            border="2px solid #cb7862" >
                            Lector QR code
                        </Button>
                    </Center>
                </div>
                <div>
                    <Center my="0">
                        <Button
                            my="2"
                            backgroundColor="#white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="1px"
                            w="380px"
                            border="2px solid #cb7862" >
                            Editar enlace a la sesión
                        </Button>
                    </Center>
                </div>
                <Tabs variant='unstyled' my="4">
                    <TabList>
                        <div>
                            <Tab
                                _selected={{
                                    color: 'black',
                                    bg: areAllCheckboxesChecked(checkboxStatus1) 
                                    ? '#48BB78' : checkboxStatus1.some((isChecked) => isChecked) ? '#F6AD55' : 'white',
                                    borderRadius: "10px 10px 0 0"
                                }}
                                style={{ fontSize: '12px' }}>
                                Aprobación
                            </Tab>
                        </div>
                        <div>
                            <Tab
                                _selected={{
                                    color: 'black',
                                    bg: areAllCheckboxesChecked(checkboxStatus2) 
                                    ? '#48BB78' : checkboxStatus2.some((isChecked) => isChecked) ? '#F6AD55' : 'white',
                                    borderRadius: "10px 10px 0 0"
                                }}
                                style={{ fontSize: '12px' }}>
                                Recursos
                            </Tab>
                        </div>
                        <div>
                            <Tab
                                _selected={{
                                    color: 'black',
                                    bg: areAllCheckboxesChecked(checkboxStatus3) 
                                    ? '#48BB78' : checkboxStatus3.some((isChecked) => isChecked) ? '#F6AD55' : 'white',
                                    borderRadius: "10px 10px 0 0"
                                }}
                                style={{ fontSize: '12px' }}>
                                Difusión
                            </Tab>
                        </div>
                        <div>
                            <Tab
                                _selected={{
                                    color: 'black',
                                    bg: areAllCheckboxesChecked(checkboxStatus4) 
                                    ? '#48BB78' : checkboxStatus4.some((isChecked) => isChecked) ? '#F6AD55' : 'white',
                                    borderRadius: "10px 10px 0 0"
                                }}
                                style={{ fontSize: '12px' }}>
                                Inscritos
                            </Tab>
                        </div>
                        <div>
                            <Tab
                                _selected={{
                                    color: 'black',
                                    bg: areAllCheckboxesChecked(checkboxStatus5) 
                                    ? '#48BB78' : checkboxStatus5.some((isChecked) => isChecked) ? '#F6AD55' : 'white',
                                    borderRadius: "10px 10px 0 0"
                                }}
                                style={{ fontSize: '12px' }}>
                                After
                            </Tab>
                        </div>
                    </TabList>
                    <TabPanels>
                        <TabPanel backgroundColor="white">
                            {checkboxStatus1.map((isChecked, index) => (
                                <Stack spacing={5} direction='row' key={index}>
                                    <Checkbox
                                        colorScheme={isChecked ? 'green' : 'yellow'}
                                        defaultChecked={isChecked}
                                        onChange={() => handleCheckboxChange(index, 1)}
                                    >
                                        <Text color="black">{isChecked ? "" : ""} {phrases1[index]}</Text>
                                    </Checkbox>
                                </Stack>
                            ))}
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            {checkboxStatus2.map((isChecked, index) => (
                                <Stack spacing={5} direction='row' key={index}>
                                    <Checkbox
                                        colorScheme={isChecked ? 'green' : 'yellow'}
                                        defaultChecked={isChecked}
                                        onChange={() => handleCheckboxChange(index, 2)}
                                    >
                                        <Text color="black">{isChecked ? "" : ""} {phrases2[index]}</Text>
                                    </Checkbox>
                                </Stack>
                            ))}
                        </TabPanel>

                        <TabPanel backgroundColor="white">
                            {checkboxStatus3.map((isChecked, index) => (
                                <Stack spacing={5} direction='row' key={index}>
                                    <Checkbox
                                        colorScheme={isChecked ? 'green' : 'yellow'}
                                        defaultChecked={isChecked}
                                        onChange={() => handleCheckboxChange(index, 3)}
                                    >
                                        <Text color="black">{isChecked ? "" : ""} {phrases3[index]}</Text>
                                    </Checkbox>
                                </Stack>
                            ))}
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            {checkboxStatus4.map((isChecked, index) => (
                                <Stack spacing={5} direction='row' key={index}>
                                    <Checkbox
                                        colorScheme={isChecked ? 'green' : 'yellow'}
                                        defaultChecked={isChecked}
                                        onChange={() => handleCheckboxChange(index, 4)}
                                    >
                                        <Text color="black">{isChecked ? "" : ""} {phrases4[index]}</Text>
                                    </Checkbox>
                                </Stack>
                            ))}
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            {checkboxStatus5.map((isChecked, index) => (
                                <Stack spacing={5} direction='row' key={index}>
                                    <Checkbox
                                        colorScheme={isChecked ? 'green' : 'yellow'}
                                        defaultChecked={isChecked}
                                        onChange={() => handleCheckboxChange(index, 5)}
                                    >
                                        <Text color="black">{isChecked ? "" : ""} {phrases5[index]}</Text>
                                    </Checkbox>
                                </Stack>
                            ))}
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Center >
    )
}

export default ApprovedAccepted;
