import { Box } from "@chakra-ui/layout";
import PrintEventDetail from "./PrintEventDetail/PrintEventDetail";
import HeaderRender from "../../Header/HeaderRender/HeaderRender";

const EventDetail = () => {
  return (
    <Box>
      <Box bg="#e6dfcf">
        <Box>
          <HeaderRender />
        </Box>
        <Box>
          <PrintEventDetail />
        </Box>
      </Box>
    </Box>
  );
};

export default EventDetail;
