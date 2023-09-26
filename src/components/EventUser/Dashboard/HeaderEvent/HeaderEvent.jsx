import React from 'react';
import { Box, Image, Text, Flex } from '@chakra-ui/react';
import fotoevento from "../../../../assets/images/fotoevento.jpg";

const HeaderEvent = () => {
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
          <Text fontSize="lg">Aquí title</Text>
          <Text fontSize="md">Aquí description</Text>
          <Text fontSize="md">Aquí speaker</Text>
        </Box>

        <Box>
          <Text fontSize="lg">Aquí day</Text>
          <Text fontSize="md">Aquí month</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HeaderEvent;
