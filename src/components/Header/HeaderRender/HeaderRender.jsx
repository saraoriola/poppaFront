import React from "react";
import Profile from "../Profile/Profile";
import { Box, Image } from "@chakra-ui/react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/Logotipo.png";

const HeaderRender = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="44px"
      bg="#004368"
    >
      <Box ml="15px" onClick={goBack} cursor="pointer">
        <AiOutlineArrowLeft to="javascript:history.back()" size="28" color="white" />
      </Box>
      <Box display="flex" alignItems="center">
        <Image src={logo} alt="Logo" />
      </Box>
      <Box mr="15px">
        <Profile />
      </Box>
    </Box>
  );
};

export default HeaderRender;
