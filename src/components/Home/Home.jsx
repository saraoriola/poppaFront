import { useState } from "react";
import { Box, Button, HStack, Text } from "@chakra-ui/react";
import FilterEvents from "../Event/FilterEvents/FilterEvents";
import GetAllEvents from "../Event/GetAllEvents/GetAllEvents";
import TopButton from "./TopButton/TopButton";
import CreateEventButton from "./CreateEventButton/CreateEventButton";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

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
        <Box bg="#e6dfcf">
            <HStack fontSize="xl" fontFamily="Nocturne-Black" color="#004368" p={5}>
                <Text ml={1}>Próximos eventos</Text>
                <Link to="/readerqr">
                    <Button>Lector QR</Button>
                </Link>
            </HStack>
            <Box className="father-filter-container" ml={6} mt={-3}>
                <FilterEvents />
            </Box>
            <Box>
                <GetAllEvents />
            </Box>
            <Box display="flex" alignItems="center" justifyContent="space-between" margin="0px 20px">
                <TopButton />
                {createEventButton}
            </Box>
        </Box>
    );
};

export default Home;
