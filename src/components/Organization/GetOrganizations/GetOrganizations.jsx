import React from 'react';
import { Box, Text, Image, Button } from '@chakra-ui/react';

const OrganizationCard = ({ organization }) => (
  <Box width="300px" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="md" m="16px">
    <Image src={organization.imageUrl} alt={organization.name} height="200px" />
    <Box p="4">
      <Text fontSize="2xl" fontWeight="bold" color="#004368">{organization.name}</Text>
      <Text mt="2" fontSize="md" color="#004368">{organization.description}</Text>
      <Button mt="4" colorScheme="teal" size="sm" onClick={() => {}}>Ver Detalles</Button>
    </Box>
  </Box>
);

export default OrganizationCard;
