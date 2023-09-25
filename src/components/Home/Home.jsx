// Home.js
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";

import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import PrintEvents from "../Event/PrintEvents/PrintEvents";
import TopButton from "./TopButton/TopButton";
import CreateEventButton from "./CreateEventButton/CreateEventButton";
import { useSelector } from "react-redux";

const Home = () => {
  const { userRole } = useSelector((state) => state.auth);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (results) => {
    setSearchResults(results);
  };

  let createEventButton = null;

  if (userRole === "admin") {
    createEventButton = <CreateEventButton />;
  }

  return (
    <Box>
      {/* NOTE: Cambiar colores */}
      <Box>
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
        {createEventButton}
      </Box>
    </Box>
  );
};

export default Home;
