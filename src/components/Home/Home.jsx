import { useSelector } from "react-redux";
import { Box } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";

// NOTE: Lo que había antes aquí lo he pasado a User -> Auth
const Home = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <Box>
      <Box>
        <HeaderRender />
      </Box>
      <Box>
        Filtros
      </Box>
      <Box>
        Cards
      </Box>
    </Box>
  );
};

export default Home;
