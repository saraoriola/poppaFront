import { useState } from "react";
import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
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
        <Flex alignContent="center" justifyContent="center">
            <Box bg="#e6dfcf">
                <HStack fontSize="xl" fontFamily="Nocturne-Black" color="#004368" p={5}>
                    <Text ml="40px">Próximos eventos</Text>
                </HStack>
                <Box ml="13%">
                    <FilterEvents />
                </Box>
                <Box>
                    <GetAllEvents />
                </Box>
                <Box>
                    <TopButton />
                    {createEventButton}
                </Box>
            </Box>
        </Flex>
    );
};

export default Home;
