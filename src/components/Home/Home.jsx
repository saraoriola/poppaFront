// Home.js
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import "./Home.scss";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import PrintEvents from "../Event/PrintEvents/PrintEvents";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar los resultados de la búsqueda
  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Box className="home-container">
      <Box className="father-header-container">
        <HeaderRender onSearch={handleSearch} />
      </Box>
      <Box className="home-title">Próximos eventos</Box>
      <Box className="father-filter-container">
        <FilterEvents />
      </Box>
      <Box className="father-cards-container">
        <GetAllEvents />
        {/* FIXME: Esto ha dejado de ir :c Hay bugs*/}
        <PrintEvents results={searchResults} />
      </Box>
    </Box>
  );
};

export default Home;
