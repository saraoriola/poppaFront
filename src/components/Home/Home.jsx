// Home.js
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import "./Home.scss";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import Search from "../Header/Search/Search";
import PrintEvents from "../Event/PrintEvents/PrintEvents";
import { useSelector } from "react-redux";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar los resultados de la búsqueda
  const handleSearch = (results) => {
    setSearchResults(results);
  };

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
        
        <Search onSearch={handleSearch} />
        <PrintEvents results={searchResults} />
      </Box>
    </Box>
  );
};

export default Home;
