import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'; // Importa useParams para obtener el ID de la URL
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import fotoevento from "../../../../assets/images/fotoevento.jpg";
import { getEventById } from '../../../../features/dashboards/dashboardsSlice'; 

const HeaderEvent = () => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dashboards.event);
  const { id } = useParams(); // Obtiene el ID de los parámetros de la URL

  useEffect(() => {
    dispatch(getEventById(id)); 
  }, [dispatch, id]); // Asegúrate de incluir id en la lista de dependencias

  return (
    <Box
      height="150px"
      width="100%"
      position="relative"
    >
      <Image
        src={fotoevento}
        objectFit="cover"
        width="100%" 
        height="100%" 
        position="absolute"
        top="0"
        left="0"
      />
      <Flex
        position="absolute"
        width="100%"
        color="white"
        margin={5}
      >
        <Box>
          <Text fontSize="lg">{event.title}</Text>
          <Text fontSize="md">{event.description}</Text>
          <Text fontSize="md">{event.speacker}</Text>
        </Box>

        <Box>
          <Text fontSize="lg">{event.day}</Text>
          <Text fontSize="md">{event.month}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderEvent;
