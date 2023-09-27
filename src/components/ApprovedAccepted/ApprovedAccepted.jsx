import React, { useState } from 'react';
import { useParams } from "react-router-dom"
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md'
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { phrases1, phrases2, phrases3, phrases4, phrases5 } from "../../Phrases/phrases";
import { Box, Button, Flex, Image, Tabs, TabList, Tab, TabPanel, TabPanels, Stack, Checkbox, Text } from "@chakra-ui/react";
import "./ApprovedAccepted.scss";
import HeaderRender from '../Header/HeaderRender/HeaderRender';
import banner from "../../assets/images/desafio.jpg"

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
        setCheckboxStatus1(prevStatus => [...prevStatus.map((status, i) => (i === index ? !status : status))]);
        break;
      case 2:
        setCheckboxStatus2(prevStatus => [...prevStatus.map((status, i) => (i === index ? !status : status))]);
        break;
      case 3:
        setCheckboxStatus3(prevStatus => [...prevStatus.map((status, i) => (i === index ? !status : status))]);
        break;
      case 4:
        setCheckboxStatus4(prevStatus => [...prevStatus.map((status, i) => (i === index ? !status : status))]);
        break;
      case 5:
        setCheckboxStatus5(prevStatus => [...prevStatus.map((status, i) => (i === index ? !status : status))]);
        break;
      default:
        break;
    }
  };
  const areAllCheckboxesChecked = (checkboxes) => {
    return checkboxes.every((isChecked) => isChecked);
  };
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
        <Flex justifyContent="space-between" mt={5}>
          <Button backgroundColor="white" color="#c11919" height="32px" width="148px" border="1px solid #c11919" fontSize="14px">
            Cancelar evento
          </Button>
          <Button backgroundColor="#cb7862" color="white" height="32px" width="148px" border="1px solid #cb7862" fontSize="14px">
            Modificar
          </Button>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="148px" border="1px solid #cb7862" fontSize="14px">
            Inscribir asistente
          </Button>
          <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="148px" border="1px solid #cb7862" fontSize="14px">
            <Link to={`/dashboard/${id}`}>Dashboard</Link>
          </Button>
        </Flex>
        <Flex justifyContent="space-between" mt={2}>
          <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="148px" border="1px solid #cb7862" fontSize="14px">
            Salidas
          </Button>
          <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="148px" border="1px solid #cb7862" fontSize="14px">
            Foro
          </Button>
        </Flex>
        <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="312px" border="1px solid #cb7862" fontSize="14px" mt={2}>
          Lector QR
        </Button>
        <Button backgroundColor="rgba(248, 248, 248, 1)" color="#cb7862" height="32px" width="312px" border="1px solid #cb7862" fontSize="14px" mt={2}>
          Editar enlace a la sesión
        </Button>
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
        Cuando en The Bridge hablamos de formación práctica e inmersiva en The Bridge, lo hacemos de verdad. Gracias al Reto de Tripulaciones, nuestros alumnos pueden experimentar la mejor forma de trabajo en equipo, aprender a resolver problemas complejos y, por supuesto, aumentar su conocimiento en otras disciplinas, haciendo uso de metodologías ágiles y de desarrollo de productos.        </Box>
      </Box>
    </>
  );
};

export default ApprovedAccepted;
