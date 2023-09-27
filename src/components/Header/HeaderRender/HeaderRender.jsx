import React from "react";
import { Box, Image } from "@chakra-ui/react";
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
        <Image src={logo} alt="Logo" />
      </Box>
      <Box mr="15px">
        <Profile />
      </Box>
    </Box>
  );
};

export default HeaderRender;
