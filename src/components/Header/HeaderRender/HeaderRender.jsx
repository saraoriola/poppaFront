// HeaderRender.js
import { Box, Image } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import logo from "../../../assets/images/Logotipo.png";

const HeaderRender = ({ onSearch }) => {
  return (
    <>
      <Box w="100px" bg="white">
        {/* NOTE: Habrá que ponerle un modal o algo a un icono, si no queda muy feo */}
        <Search onSearch={onSearch} />
      </Box>
      <Box>
        <Image src={logo}></Image>
      </Box>
      <Box>
        <Profile />
      </Box>
    </>
  );
};

export default HeaderRender;
