import React from 'react';
import { Box } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react'

const HeaderBoxProfile = () => {
  return (
    <>
    <Box
      width="360px"
      height="149px"
      backgroundColor="rgba(203, 120, 98, 0.5)" 
      display="flex"
      alignItems="center"
      paddingX="1rem"
    >
    </Box>
    <Box backgroundColor="#e6dfcf" display="flex" alignItems="center" justifyContent="center">
      <Avatar backgroundColor="#cb7862" size='2xl' mt={-20}/>
    </Box>
    
    </>
  );
}

export default HeaderBoxProfile;