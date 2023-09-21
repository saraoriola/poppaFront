import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import "./Home.scss";

// NOTE: Lo que había antes aquí lo he pasado a User -> Auth
const Home = () => {
  return (
    <Box className="home-container">
      <Box className="header-container">
        <HeaderRender />
      </Box>
      <Box className="filter-container">Filtros</Box>
      <Box className="cards-container">Cards</Box>
    </Box>
  );
};

export default Home;
