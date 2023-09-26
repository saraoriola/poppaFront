import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import fotoevento from "../../../../assets/images/fotoevento.jpg";
import { getEventById } from '../../../../features/dashboards/dashboardsSlice';

const HeaderEvent = () => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dashboards.event);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);

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
        padding={5}
        justifyContent="space-between"
      >
        <Box>
          <Text fontSize="lg">{event.title}</Text>
          <Text fontSize="md">{event.description}</Text>
          <Text fontSize="md">{event.speacker}</Text>
        </Box>

        <Box
          textAlign="center"
        >
          <Text fontSize="lg">{event.day}</Text>
          <Text fontSize="md">{event.month}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderEvent;
