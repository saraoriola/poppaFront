import React from 'react';
import HeaderRender from '../Header/HeaderRender/HeaderRender';
import { Box, Image, Text, Flex, Button, Center } from '@chakra-ui/react';
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md';
import banner from "../../assets/images/desafio.jpg";
import { Link } from 'react-router-dom';
import "./ApprovedAccepted.scss";

const ApprovedAccepted = () => {
  return (
    <>
      <HeaderRender />
      <Box padding={6} bgColor="#e6dfcf">
        <Image
          src={banner}
          alt="Bannertripulaciones"
          borderRadius={4}
          width="312px"
          height="140px"
          objectFit="cover"
        />
        <Text
          color="var(--blue-900, #004368)"
          fontFamily="Nocturne Serif"
          fontSize="16px"
          fontStyle="normal"
          fontWeight="900"
          lineHeight="120%"
          className="custom-font"
          marginTop={2}
        >
          Desafío de Tripulaciones
          <br />
          The Bridge septiembre 2023
        </Text>

        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <BsCalendar3 size={15} color="#cb7862" />
            <Text
              marginLeft="8px"
              color="rgba(132, 124, 123, 1)"
              fontSize="12px"
              className="custom-text"
            >
              29/09/2023
            </Text>
          </Flex>
          <Flex alignItems="center" marginTop="2px">
            <BiTimeFive size={20} color="#cb7862" />
            <Text
              marginLeft="8px"
              color="rgba(132, 124, 123, 1)"
              fontSize="12px"
              className="custom-text"
            >
              18:00 hr
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="space-between" alignItems="center">
          <Flex alignItems="center">
            <GoLocation size={15} color="#cb7862" />
            <Text
              marginLeft="8px"
              color="rgba(132, 124, 123, 1)"
              fontSize="12px"
              className="custom-text"
            >
              EDEM / Online
            </Text>
          </Flex>
          <Flex alignItems="center" marginTop="2px">
            <MdMapsHomeWork size={15} color="#cb7862" />
            <Text
              marginLeft="8px"
              color="rgba(132, 124, 123, 1)"
              fontSize="12px"
              className="custom-text"
            >
              Planta 2, sala reuniones 207
            </Text>
          </Flex>
        </Flex>

        <Flex justifyContent="space-between" mt={5}>
          <Button
            backgroundColor="white"
            color="#c11919"
            height="32px"
            width="148px"
            border="1px solid #c11919"
            className="button"
            fontSize="14px"
          >
            Cancelar evento
          </Button>
          <Button
            backgroundColor="#cb7862"
            color="white"
            height="32px"
            width="148px"
            border="1px solid #cb7862"
            fontSize="14px"
          >
            Modificar
          </Button>
        </Flex>

        <Flex justifyContent="space-between" mt={2}>
          <Button
            backgroundColor="rgba(248, 248, 248, 1)"
            color="#cb7862"
            height="32px"
            width="148px"
            border="1px solid #cb7862"
            className="button"
            fontSize="14px"
          >
            Inscribir asistente
          </Button>
          <Button
            backgroundColor="rgba(248, 248, 248, 1)"
            color="#cb7862"
            height="32px"
            width="148px"
            border="1px solid #cb7862"
            fontSize="14px"
          >
            <Link to="/dashboard/:id">Dashboard</Link>
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default ApprovedAccepted;
