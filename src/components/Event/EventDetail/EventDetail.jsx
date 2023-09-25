import { Box } from "@chakra-ui/layout";
import React from "react";
import PrintEventDetail from "./PrintEventDetail/PrintEventDetail";
import HeaderRender from "../../Header/HeaderRender/HeaderRender";

const EventDetail = () => {
    return (
        <Box>
            <Box>
                <HeaderRender />
            </Box>
            <Box>
                <PrintEventDetail />
            </Box>
        </Box>
    );
};

export default EventDetail;
