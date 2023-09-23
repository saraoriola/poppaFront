import React from 'react';
import { Box, Card, Text, VStack, Flex } from '@chakra-ui/react';
import data from "../../../../data/data.json"

const HeaderEvent = () => {
  const conferenceData = data;
  
  const cardStyle = {
    backgroundImage: 'url("../../../../../src/assets/images/fotoevento.jpg")',
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

  const day = conferenceData.date.day;
  const fullMonth = conferenceData.date.month;
  const abbreviatedMonth = fullMonth.substring(0, 3);

  return (
    <Box position="relative">
      <Card style={cardStyle}>
        <div style={overlayStyle}></div>
      </Card>

      <Box position="absolute" top="30%" right="5" transform="translateY(-50%)" color="white" flex="3">
      <VStack align="center" p="1rem" spacing={0}>
        <Text fontSize="xl" textAlign="center" className='p'>
          {day}
        </Text>
        <Text fontSize="md" textAlign="center" className='h1'>
          {abbreviatedMonth}
        </Text>
        </VStack>
      </Box>

      <Box style={descriptionBoxStyle}>
        <VStack align="start" p="1rem" spacing={0}>
          <Text fontSize="sm" fontWeight="bold" textAlign="left" className='h1'>
            {conferenceData.name}
          </Text>
          <Text fontSize="xs" textAlign="left" className='p'>
            {conferenceData.description}
          </Text>
          <Text fontSize="sm" textAlign="left" className='p'>
            {conferenceData.speaker}
          </Text>
        </VStack>
      </Box>

    </Box>
  );
}

export default HeaderEvent;
