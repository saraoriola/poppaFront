import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import logo from "../../../assets/images/Logotipo.png";

const HeaderRenderSearch = ({ onSearch }) => {
  return (
    <Box display="flex" justifyContent="space-around" alignItems="center" height="2.75rem" bg="#004368">
      <Box w="100px" bg="white"><Search onSearch={onSearch} /></Box>
      <Box><Image src={logo} /></Box>
      <Box><Profile /></Box>
    </Box>
  );
};

export default HeaderRenderSearch;
