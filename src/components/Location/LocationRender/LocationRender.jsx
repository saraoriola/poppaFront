import { Box } from "@chakra-ui/react";
import React from "react";
import CreateLocation from "../CreateLocation/CreateLocation";
import DeleteLocation from "../DeleteLocation/DeleteLocation";
import GetLocationById from "../GetLocationById/GetLocationById";

const LocationRender = () => {
    return (
        <Box>
            <CreateLocation />
            <GetLocationById />
            <DeleteLocation />
        </Box>
    );
};

export default LocationRender;
