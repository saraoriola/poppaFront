import React from 'react';
import { Box, Card, Flex, Text } from '@chakra-ui/react';
import data from '../../../../data/data.json';

const Attendees = () => {
  const attendeesData = data.attendees;
  const capacity = data.capacity;

  return (
    <Flex justify="center" align="center" marginTop={-14}>
      <Box display="flex" flexDirection="column" align="center">
        <Flex justifyContent="space-between" width="100%">
          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
            <Text fontSize="2xs" fontWeight="bold" mb={1} className="p">
              Ins / Aforo
            </Text>
            <Text fontSize="xl">
              {`${attendeesData.registered}`}
              <Text fontSize="2xs" className="p"> 
            / {capacity}
              </Text>
            </Text>
          </Card>

          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
            <Text fontSize="2xs" fontWeight="bold" mb={1} className="p">
              Confirmados
            </Text>
            <Text fontSize="xl" className="p">
              {`${attendeesData.confirmed}`}
            </Text>
          </Card>

          <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
            <Text fontSize="2xs" fontWeight="bold" mb={1} className="p">
              Asist / Aforo
            </Text>
            <Text fontSize="xl"> 
              {`${attendeesData.present}`}
              <Text fontSize="2xs" className="p"> 
              / {capacity}
              </Text>
            </Text>
          </Card>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Attendees;
