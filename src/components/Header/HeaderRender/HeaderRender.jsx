import { Box } from "@chakra-ui/react";
import React from "react";
import Search from "../Search/Search";
import Profile from "../Profile/Profile";

const HeaderRender = () => {
  return (
    <>
      <Box>
        <Search />
      </Box>
      <Box>LOGO</Box>
      <Box>
        <Profile />
      </Box>
    </>
  );
};

export default HeaderRender;
