import React from 'react';
import { Box, Image, Link as RouterLink } from '@chakra-ui/react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import logo from "../../../assets/images/Logotipo.png";

const HeaderRegister = () => {
  return (
    <Box width="100%" height="44px" backgroundColor="#004368" position="sticky" top="0" display="flex" alignItems="center" paddingX="1rem">
      <RouterLink as={Link} to="/login" ><AiOutlineArrowLeft style={{ cursor: 'pointer' }} size={24} color="white" /></RouterLink>
      <Image src={logo} alt="Logo" style={{ margin: '0 auto' }} />
    </Box>
  );
};

export default HeaderRegister;
