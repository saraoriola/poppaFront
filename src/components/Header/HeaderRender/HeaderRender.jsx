import { Box, Icon, Image, Text } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";
import logo from "../../../assets/images/Logotipo.png";
import { AiOutlineArrowLeft } from "react-icons/ai";

const HeaderRender = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      width="100%"
      height="44px"
      backgroundColor="#004368"
    >
      <Box ml="15px">
        <AiOutlineArrowLeft
          style={{ cursor: "pointer" }}
          size="28"
          color="white"
        />
      </Box>
      <Box>
        <Image src={logo}></Image>
      </Box>
      <Box mr="15px">
        <Profile />
      </Box>
    </Box>
  );
};

export default HeaderRender;
