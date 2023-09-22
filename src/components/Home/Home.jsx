// Home.js
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import "./Home.scss";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import { useSelector } from "react-redux";
import PrintEvents from "../Event/PrintEvents/PrintEvents";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar los resultados de la búsqueda
  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Box className="home-container">
      <Box className="header-container">
        <HeaderRender onSearch={handleSearch} />
      </Box>
      <Box className="filter-container">
        <FilterEvents />
      </Box>
      <Box className="cards-container">
        <GetAllEvents />
        <PrintEvents results={searchResults} />
      </Box>
    </Box>
  );
};

export default Home;
