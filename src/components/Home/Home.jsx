import React from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import "./Home.scss";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import Search from "../Header/Search/Search";

const Home = () => {
  return (
    <Box className="home-container">
      <Box className="header-container">
        <HeaderRender />
      </Box>
      <Box className="filter-container">
        <FilterEvents />
      </Box>
      <Box className="cards-container">
        <GetAllEvents />
      </Box>
    </Box>
  );
};

export default Home;
