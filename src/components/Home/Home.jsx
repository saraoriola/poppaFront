// Home.js
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";

import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import PrintEvents from "../Event/PrintEvents/PrintEvents";
import TopButton from "./TopButton/TopButton";
import CreateEventButton from "./CreateEventButton/CreateEventButton";

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Función para manejar los resultados de la búsqueda
  const handleSearch = (results) => {
    setSearchResults(results);
  };

  return (
    <Box>
      {/* NOTE: Cambiar colores */}
      <Box

      >
        <HeaderRender onSearch={handleSearch} />
      </Box>
      <Box m="10px" fontSize="xl" fontFamily="Nocturne-Black" color="blue">
        Próximos eventos
      </Box>
      <Box className="father-filter-container">
        <FilterEvents />
      </Box>
      <Box>
        <GetAllEvents />
      </Box>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        margin="0px 20px"
      >
        <TopButton />
        <CreateEventButton />
      </Box>
    </Box>
  );
};

export default Home;
