import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Tabs,
    TabList,
    Tab,
    TabPanel,
    TabPanels,
    Stack,
    Checkbox
} from "@chakra-ui/react";
import { BsCalendarDate } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md'
import { Avatar } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/Logotipo.png"
import approvado from "../../assets/images/approvado.png"

const ApprovedAccepted = () => {

    const userConnected = useSelector((state) => state.auth.userConnected);

    return (

        <Center as="section" bg="gray.100" h="100vh">
            <Box maxW="430px" bg="#e6dfcf" p="6">
                <Box display="flex" alignItems="center" justifyContent="space-between" bg="#004368" p={1} borderRadius="xl">
                    <Image src={logo} />
                    <div style={{ flex: 1 }}></div>
                    <Avatar name={userConnected?.name} src={userConnected?.avatar} size="sm" />
                </Box>
                <Image
                    src={approvado}
                    alt="openday"
                    borderRadius="xl"
                    objectFit="cover"
                    mx="auto"
                    mt={4}
                />
                <Heading my="4" size="lg" fontFamily="Nocturne-Black" color="#004368">
                    Open Day Masters
                </Heading>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <BsCalendarDate size={25} color="#cb7862" />
                        <span style={{ marginLeft: "8px" }}>19/10/2023</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <BiTimeFive size={25} color="#cb7862" />
                        <span style={{ marginRight: "8px" }}>18:00 hrs</span>
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
                    <Center my="8" height="20px">
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="20px"  >
                            Aprobar
                        </Button>
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}  >
                            Cancelar evento
                        </Button>
                    </Center>
                    <Center my="8" height="20px">
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}  >
                            Modificar
                        </Button>
                    </Center>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Center my="3" height="20px">
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="23px"  >
                            Salidas
                        </Button>
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}  >
                            Inscribir asistente
                        </Button>
                    </Center>
                    <Center my="3" height="20px">
                        <Button
                            backgroundColor="white"
                            color="#cb7862"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}  >
                            Inscritos
                        </Button>
                    </Center>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Center my="8" height="20px">
                        <Button
                            backgroundColor="#cb7862"
                            color="white"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="23px"  >
                            Evento
                        </Button>
                        <Button
                            backgroundColor="#cb7862"
                            color="white"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="23px"  >
                            Lector QR CODE
                        </Button>
                    </Center>
                    <Center my="8" height="20px">
                        <Button
                            backgroundColor="#cb7862"
                            color="white"
                            _hover={{ backgroundColor: "#004368", color: 'white' }}
                            marginRight="23px"  >
                            <Link to="/dashboard/:id" >Dashbord </Link>

                        </Button>
                    </Center>
                </div>
                <div>
                    <Button
                        backgroundColor="#white"
                        color="#cb7862"
                        _hover={{ backgroundColor: "#004368", color: 'white' }}
                        marginRight="23px"
                        w="385px"  >
                        Editar enlace a la sesión
                    </Button>
                </div>
                <Tabs variant='unstyled' my="4">
                    <TabList>
                        <Tab _selected={{ color: 'white', bg: 'red', borderRadius: "full" }} style={{ fontSize: '12px' }}>
                            Aprobación
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: '#004368', borderRadius: "full" }} style={{ fontSize: '12px' }}>
                            Recursos
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'green.400', borderRadius: "full" }} style={{ fontSize: '12px' }}>
                            Difusión
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'green.400', borderRadius: "full" }} style={{ fontSize: '12px' }}>
                            Inscritos
                        </Tab>
                        <Tab _selected={{ color: 'white', bg: 'gold', borderRadius: "full" }} style={{ fontSize: '12px' }}>
                            Post-Evento
                        </Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel backgroundColor="white">
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Confirmación servicio de catering
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Confirmación servicio limpieza
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Pendiente. Servicio Recepción y apoio IT
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Confirmación solicitud material UX/UI
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Confirmación servicio de mesas y camareros
                                </Checkbox>
                            </Stack>
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Pendiente aprob. Montaje y desmontaje
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='red' defaultChecked>
                                    Confirmación servicio limpieza
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Pendiente. Servicio Recepción y apoio IT
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Confirmación solicitud material UX/UI
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Programación retransmisión online
                                </Checkbox>
                            </Stack>
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Publicación evento en portal
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Envio correo electronico usuarios perfiles
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Publicación post web
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Publicación rede social
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Programación retransmisión online
                                </Checkbox>
                            </Stack>
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    12 inscritos hasta ahora
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Estimación: 85 personas
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Inscritos por rede social
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='red' defaultChecked>
                                    Interesados deben confirmar el correo
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Público: Joven
                                </Checkbox>
                            </Stack>
                        </TabPanel>
                        <TabPanel backgroundColor="white">
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Confirmar desmontaje
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='yellow' defaultChecked>
                                    Confirmar servicio de limpieza post-evento
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    FeedBack post-evento
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='red' defaultChecked>
                                    Enviar correo pra todas personas post-evento
                                </Checkbox>
                            </Stack>
                            <Stack spacing={5} direction='row'>
                                <Checkbox colorScheme='green' defaultChecked>
                                    Actualizar datos/presupuesto
                                </Checkbox>
                            </Stack>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Center>
    )
}

export default ApprovedAccepted


