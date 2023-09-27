import { Box } from "@chakra-ui/layout";
import QrGenerator from "../../Qr/Generator/QrGenerator";
import PrintEventDetail from "./PrintEventDetail/PrintEventDetail";
import HeaderRender from "../../Header/HeaderRender/HeaderRender";

const EventDetail = () => {
    return (
        <Box bg="#e6dfcf">
            <Box>
                <HeaderRender />
            </Box>
            <Box>
                <PrintEventDetail />
                <QrGenerator eventId={5} />
            </Box>
        </Box>
        <Box>
          <PrintEventDetail />
          {/* <QrGenerator eventId={5} /> */}
        </Box>
      </Box>
    );
};

export default EventDetail;
