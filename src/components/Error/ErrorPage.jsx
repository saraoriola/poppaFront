import React from 'react';
import { Box, Image, Text, Center, Button, Flex } from '@chakra-ui/react';
import { Link, useRouteError } from 'react-router-dom';
import pageNotFoundImg from '../../assets/images/404.svg';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Flex pb="18%" justifyContent="center" alignItems="center">
      <Box>
        <Box>
          <Text ml="90px" mt="100px" fontFamily="Nocturne-Black" fontWeight="900" fontSize="36px" color="#004368">
            ¡Ooops!
          </Text>
          <Text mt="24px" mb="50px" fontFamily="Nocturne-Regular" fontWeight="400" fontSize="20px" color="#004368" textAlign="center">
            ¡Algo ha ocurrido! <br />
            No sabemos qué ha podido <br /> pasar pero lo arreglaremos...
          </Text>
        </Box>
        <Image w="312px" h="169px" ml="10px" src={pageNotFoundImg} alt="Imagen" />
        <Text mt="50px" mb="40px" fontFamily="Nocturne-Regular" fontWeight="400" fontSize="20px" color="#004368" textAlign="center">
          No pasa nada, te volvemos <br />a indicar el camino a casa...
        </Text>
        <Link to="/">
          <Button w="170px" h="48px" mt="50px" ml="80px" bg="#cb7862" color="white" fontSize="19px">
            Volver a inicio
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default ErrorPage;
