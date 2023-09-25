import { useState } from "react";
import { Box, Button, Link } from "@chakra-ui/react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
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
            <Link to="/eventdetail">
                <Button w="170px" h="48px" mt="50px" ml="110px" bg="#cb7862" color="white" fontSize="19px">
                    Event Detail
                </Button>
            </Link>
            {/* NOTE: Cambiar colores */}
            <Box display="flex" justifyContent="space-around" alignItems="center" height="2.75rem" bg="blue">
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
            <Box display="flex" alignItems="center" justifyContent="space-between" margin="0px 20px">
                <TopButton />
                <CreateEventButton />
            </Box>
        </Box>
    );
};

export default Home;
