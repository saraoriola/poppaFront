import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getEventById } from "../../../../features/dashboards/dashboardsSlice";
import { Box, Card, Text, VStack, Flex } from '@chakra-ui/react';

const cardStyle = {
  backgroundImage: 'url("../../../../assets/images/fotoevento.jpg)',
  backgroundSize: 'cover',
  height: '150px',
  position: 'relative',
};

const overlayStyle = {
  content: '""',
  background: 'rgba(0, 67, 104, 0.8)',
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const descriptionBoxStyle = {
  position: 'absolute',
  top: '34%',
  left: '0',
  transform: 'translateY(-50%)',
  color: 'white',
  flex: '7',
  maxWidth: '70%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const HeaderEvent = () => {
  const { id } = useParams();
  const { event } = useSelector(state => state.dashboards);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEventById(id));
  }, [id, dispatch]);

  return (
    <>
      <Box position="relative">
        <Card style={cardStyle}>
          <div style={overlayStyle}></div>
        </Card>

        <Box position="absolute" top="30%" right="5" transform="translateY(-50%)" color="white" flex="3">
          <VStack align="center" p="1rem" spacing={0}>
            <Text fontSize="xl" textAlign="center" className='p'>
            {event.day}
            </Text>
            <Text fontSize="md" textAlign="center" className='h1'>
            {event.month}
            </Text>
          </VStack>
        </Box>

        <Box style={descriptionBoxStyle}>
          <VStack align="start" p="1rem" spacing={0}>
            <Text fontSize="sm" fontWeight="bold" textAlign="left" className='h1'>
              {event.title}
            </Text>
            <Text fontSize="xs" textAlign="left" className='p'>
              {event.description}
            </Text>
            <Text fontSize="sm" textAlign="left" className='p'>
              {event.speacker}
            </Text>
          </VStack>
        </Box>
      </Box>
    </>
  );
}

export default HeaderEvent;
