// HeaderRender.js
import { Box } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const HeaderRender = ({ onSearch }) => {
  return (
    <>
      <Box>
        <Search onSearch={onSearch} />
      </Box>
      <Box>LOGO</Box>
      <Box>
        <Profile />
      </Box>
    </>
  );
};

export default HeaderRender;
