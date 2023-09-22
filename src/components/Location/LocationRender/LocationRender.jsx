import { Box } from "@chakra-ui/react";
import React from "react";
import CreateLocation from "../CreateLocation/CreateLocation";
import DeleteLocation from "../DeleteLocation/DeleteLocation";

const LocationRender = () => {
    return (
        <Box>
            {/* <Componentes /> */}
            <CreateLocation />
            <DeleteLocation />
        </Box>
    );
};

export default LocationRender;
