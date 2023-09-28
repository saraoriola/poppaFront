import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { phrases1, phrases2, phrases3, phrases4, phrases5 } from '../../Phrases/phrases';
import { FaUser, FaChartBar, FaQrcode, FaEdit, FaShare, FaCalendarPlus, FaTimesCircle, FaDoorOpen, FaCommentDots } from 'react-icons/fa';
import { Box, Button, Flex, Image, Tabs, TabList, Tab, TabPanel, TabPanels, Stack, Checkbox, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react';
import './ApprovedAccepted.scss';
import HeaderRender from '../Header/HeaderRender/HeaderRender';
import banner from '../../assets/images/desafio.jpg';

const ApprovedAccepted = () => {
  const linkStyle = { display: "flex", alignItems: "center", margin: "8px 0", fontFamily: "PPTelegraf-Ultralight", fontSize: "15px" };
  const iconStyle = { marginRight: "10px", color: "#cb7862", marginLeft: "10px", height: "20px", width: "20px" };
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);
  const [checkboxStatus1, setCheckboxStatus1] = useState([false, false, false, false, false]);
  const [checkboxStatus2, setCheckboxStatus2] = useState([false, false, false, false, false]);
  const [checkboxStatus3, setCheckboxStatus3] = useState([false, false, false, false, false]);
  const [checkboxStatus4, setCheckboxStatus4] = useState([false, false, false, false, false]);
  const [checkboxStatus5, setCheckboxStatus5] = useState([false, false, false, false, false]);
  const userConnected = useSelector((state) => state.auth.userConnected);

  const handleCheckboxChange = (index, tab) => {
    const setCheckboxStatus = (state, t) => state.map((status, i) => (i === index ? !status : status));
    switch (tab) {
      case 1: setCheckboxStatus1((prevStatus) => [...setCheckboxStatus(prevStatus, 1)]); break;
      case 2: setCheckboxStatus2((prevStatus) => [...setCheckboxStatus(prevStatus, 2)]); break;
      case 3: setCheckboxStatus3((prevStatus) => [...setCheckboxStatus(prevStatus, 3)]); break;
      case 4: setCheckboxStatus4((prevStatus) => [...setCheckboxStatus(prevStatus, 4)]); break;
      case 5: setCheckboxStatus5((prevStatus) => [...setCheckboxStatus(prevStatus, 5)]); break;
      default: break;
    }
  };

  const areAllCheckboxesChecked = (checkboxes) => checkboxes.every((isChecked) => isChecked);
  const { id } = useParams();

  return (
    <>
      <HeaderRender />
      <Box padding={6} bgColor="#e6dfcf">
        <Image src={banner} alt="Bannertripulaciones" borderRadius={4} width="312px" height="140px" objectFit="cover" />
        <Text color="var(--blue-900, #004368)" fontFamily="Nocturne Serif" fontSize="16px" fontStyle="normal" fontWeight="900" lineHeight="120%" className="custom-font" marginTop={2}>
          Desafío de Tripulaciones <br /> The Bridge septiembre 2023
        </Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <BsCalendar3 size={15} color="#cb7862" />
            <Text marginLeft="8px" color="rgba(132, 124, 123, 1)" fontSize="12px" className="custom-text">
              29/09/2023
            </Text>
          </Flex>
          <Flex alignItems="center" marginTop="2px">
            <BiTimeFive size={20} color="#cb7862" />
            <Text marginLeft="8px" color="rgba(132, 124, 123, 1)" fontSize="12px" className="custom-text">
              18:00 hr
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <GoLocation size={15} color="#cb7862" />
            <Text marginLeft="8px" color="rgba(132, 124, 123, 1)" fontSize="12px" className="custom-text">
              EDEM / Online
            </Text>
          </Flex>
          <Flex alignItems="center" marginTop="2px">
            <MdMapsHomeWork size={15} color="#cb7862" />
            <Text marginLeft="8px" color="rgba(132, 124, 123, 1)" fontSize="12px" className="custom-text">
              Planta 2, sala reuniones 207
            </Text>
          </Flex>
        </Flex>
        <Flex justifyContent="space-between" mt={5} >
          <Box>
          <Button
  backgroundColor="#cb7862"
  color="white"
  height="32px"
  width="148px"
  border="1px solid #cb7862"
  fontSize="14px"
  onClick={onOpen}
  ml="165px"
>
  Modificar
</Button>


      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        size="md" 
      >
        <DrawerOverlay />
        <DrawerContent
        borderRadius="0 10px 10px 0"
        mt={318}
          style={{
            width: "250px", 
            height: "450px", 
          }}
        >
          <DrawerCloseButton />
          <DrawerBody>
          <Flex direction="column" alignItems="flex-start" mt={2}>
        <Link to="/your-path-here" style={linkStyle}>
          <FaQrcode style={{ ...iconStyle, color: '#cb7862' }} /> Lector QR
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaUser style={{ ...iconStyle, color: '#cb7862' }} /> Inscribir asistente
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaDoorOpen style={{ ...iconStyle, color: '#cb7862' }} /> Salidas
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaCommentDots style={{ ...iconStyle, color: '#cb7862' }} /> Foro
        </Link>
        <Link to="/dashboard/5" style={linkStyle}>
          <FaChartBar style={{ ...iconStyle, color: '#cb7862' }} /> Dashboard
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaEdit style={{ ...iconStyle, color: '#cb7862' }} /> Editar enlace a la sesión
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaShare style={{ ...iconStyle, color: '#cb7862' }} /> Compartir
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaCalendarPlus style={{ ...iconStyle, color: '#cb7862' }} /> Añadir al calendario
        </Link>
        <Link to="/your-path-here" style={linkStyle}>
          <FaTimesCircle style={{ ...iconStyle, color: '#cb7862' }} /> Cancelar evento
        </Link>
      </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
        </Flex>

        <Box display="flex" width="312px" height="184px" flexDirection="column" justifyContent="center" alignItems="flex-start">
          <Tabs mt={7} className='button' variant='enclosed'>
            <TabList>
              <Tab
                _selected={{
                  color: 'black',
                  bg: areAllCheckboxesChecked(checkboxStatus1) ? '#48BB78' : checkboxStatus1.some((isChecked) => isChecked) ? '#F6AD55' : '#f2f2f2',
                  border: "1px solid #847c7b"
                }}
                fontSize="9px" height="24px" width="70px">
                Aprobación
              </Tab>
              <Tab
                _selected={{
                  color: 'black',
                  bg: areAllCheckboxesChecked(checkboxStatus2) ? '#48BB78' : checkboxStatus2.some((isChecked) => isChecked) ? '#F6AD55' : '#f2f2f2',
                  border: "1px solid #847c7b"
                }}
                fontSize="9px" height="24px" width="60px">
                Recursos
              </Tab>
              <Tab
                _selected={{
                  color: 'black',
                  bg: areAllCheckboxesChecked(checkboxStatus3) ? '#48BB78' : checkboxStatus3.some((isChecked) => isChecked) ? '#F6AD55' : '#f2f2f2',
                  border: "1px solid #847c7b"
                }}
                fontSize="9px" height="24px" width="52px">
                Difusión
              </Tab>
              <Tab
                _selected={{
                  color: 'black',
                  bg: areAllCheckboxesChecked(checkboxStatus4) ? '#48BB78' : checkboxStatus4.some((isChecked) => isChecked) ? '#F6AD55' : '#f2f2f2',
                  border: "1px solid #847c7b"
                }}
                fontSize="9px" height="24px" width="60px">
                Inscritos
              </Tab>
              <Tab
                _selected={{
                  color: 'black',
                  bg: areAllCheckboxesChecked(checkboxStatus5) ? '#48BB78' : checkboxStatus5.some((isChecked) => isChecked) ? '#F6AD55' : '#f2f2f2',
                  border: "1px solid #847c7b"
                }}
                fontSize="9px" height="24px" width="70px">
                Post-ev
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel backgroundColor='#f2f2f2' border="1px solid #847c7b" borderRadius="0px 0px 8px 8px" width="312px">
                {checkboxStatus1.map((isChecked, index) => (
                  <Stack spacing={5} direction='row' key={index}>
                    <Checkbox mt={1} colorScheme={isChecked ? 'green' : 'yellow'} defaultChecked={isChecked} onChange={() => handleCheckboxChange(index, 1)}>
                      <Text fontSize="12px" color="#847c7b">{isChecked ? "" : ""} {phrases1[index]}</Text>
                    </Checkbox>
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel backgroundColor='#f2f2f2' border="1px solid #847c7b" borderRadius="0px 0px 8px 8px" width="312px">
                {checkboxStatus2.map((isChecked, index) => (
                  <Stack spacing={5} direction='row' key={index}>
                    <Checkbox mt={1} colorScheme={isChecked ? 'green' : 'yellow'} defaultChecked={isChecked} onChange={() => handleCheckboxChange(index, 2)}>
                      <Text fontSize="12px" color="#847c7b">{isChecked ? "" : ""} {phrases2[index]}</Text>
                    </Checkbox>
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel backgroundColor='#f2f2f2' border="1px solid #847c7b" borderRadius="0px 0px 8px 8px" width="312px">
                {checkboxStatus3.map((isChecked, index) => (
                  <Stack spacing={5} direction='row' key={index}>
                    <Checkbox mt={1} colorScheme={isChecked ? 'green' : 'yellow'} defaultChecked={isChecked} onChange={() => handleCheckboxChange(index, 3)}>
                      <Text fontSize="12px" color="#847c7b">{isChecked ? "" : ""} {phrases3[index]}</Text>
                    </Checkbox>
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel backgroundColor='#f2f2f2' border="1px solid #847c7b" borderRadius="0px 0px 8px 8px" width="312px">
                {checkboxStatus4.map((isChecked, index) => (
                  <Stack spacing={5} direction='row' key={index}>
                    <Checkbox mt={1} colorScheme={isChecked ? 'green' : 'yellow'} defaultChecked={isChecked} onChange={() => handleCheckboxChange(index, 4)}>
                      <Text fontSize="12px" color="#847c7b">{isChecked ? "" : ""} {phrases4[index]}</Text>
                    </Checkbox>
                  </Stack>
                ))}
              </TabPanel>
              <TabPanel backgroundColor='#f2f2f2' border="1px solid #847c7b" borderRadius="0px 0px 8px 8px" width="312px">
                {checkboxStatus5.map((isChecked, index) => (
                  <Stack spacing={5} direction='row' key={index}>
                    <Checkbox mt={1} colorScheme={isChecked ? 'green' : 'yellow'} defaultChecked={isChecked} onChange={() => handleCheckboxChange(index, 5)}>
                      <Text fontSize="12px" color="#847c7b">{isChecked ? "" : ""} {phrases5[index]}</Text>
                    </Checkbox>
                  </Stack>
                ))}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
        <Box mt={8} p={2} backgroundColor='#f2f2f2' className='button' fontSize="13px" color="#847c7b" borderRadius={8} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>
        Cuando hablamos de formación práctica e inmersiva en The Bridge, lo hacemos de verdad. Gracias al Reto de Tripulaciones, nuestros alumnos pueden experimentar la mejor forma de trabajo en equipo, aprender a resolver problemas complejos y, por supuesto, aumentar su conocimiento en otras disciplinas, haciendo uso de metodologías ágiles y de desarrollo de productos.        </Box>
      </Box>
    </>
  );
};

export default ApprovedAccepted;
