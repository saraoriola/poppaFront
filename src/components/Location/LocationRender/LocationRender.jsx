import { Box } from "@chakra-ui/react";
import React from "react";
import CreateLocation from "../CreateLocation/CreateLocation";
import DeleteLocation from "../DeleteLocation/DeleteLocation";
import GetLocationById from "../GetLocationById/GetLocationById";
import UpdateLocation from "../UpdateLocation/UpdateLocation";

const LocationRender = () => {
    return (
        <Box>
            <CreateLocation />
            <GetLocationById />
            <DeleteLocation />
            <UpdateLocation/>
        </Box>
    );
};

export default LocationRender;
