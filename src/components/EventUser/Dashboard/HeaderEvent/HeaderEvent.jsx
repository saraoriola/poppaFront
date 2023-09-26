import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Image, Text, Flex, Card } from '@chakra-ui/react';
import fotoevento from "../../../../assets/images/fotoevento.jpg";
import { getEventById } from '../../../../features/dashboards/dashboardsSlice';


const HeaderEvent = () => {
  const dispatch = useDispatch();
  const event = useSelector((state) => state.dashboards.event);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getEventById(id));
  }, [dispatch, id]);
 console.log(event)
  return (
    <Box>
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
  <Text fontSize="md">{event.title}</Text>
  <Text fontSize="xs">{event.description}</Text>
  <Text fontSize="xs">{event.speacker}</Text>
</Box>

<Box
  textAlign="center"
>
  <Text  fontSize="md">{event.day}</Text>
  <Text  fontSize="xs">{event.month}</Text>
</Box>

      </Flex>
    </Box>

    <Flex justify="center" align="center" marginTop={-14} bgColor="#e6dfcf">
      <Box display="flex" flexDirection="column" align="center">
        <Flex justifyContent="space-between" width="100%">
          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
            <Text fontSize="2xs" fontWeight="bold" mb={1} >
              Ins / Aforo
            </Text>
            <Text fontSize="xl">
              {event.attendees?.registered} / {event.capacity}
            </Text>
          </Card>

          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8" borderColor="#cb7862">
            <Text fontSize="2xs" fontWeight="bold" mb={1} >
              Confirmados
            </Text>
            <Text fontSize="xl">
              {event.attendees?.confirmed}
            </Text>
          </Card>

          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
            <Text fontSize="2xs" fontWeight="bold" mb={1} >
              Asist / Aforo
            </Text>
            <Text fontSize="xl"> 
              {event.attendees?.present} / {event.capacity}
            </Text>
          </Card>
        </Flex>
      </Box>
    </Flex>
    </Box>
  );
};

export default HeaderEvent;
