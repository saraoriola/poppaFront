import { WS_URL } from "../../../../utils/constants";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Image, Text, Flex, Card } from "@chakra-ui/react";
import { getEventById } from "../../../../features/dashboards/dashboardsSlice";
import fotoevento from "../../../../assets/images/fotoevento.jpg";
import useWebSocket from "react-use-websocket";


const HeaderEvent = () => {
  const {id} = useParams();
  return (
    <div>HeaderEvent</div>
  )

function isCheckInOp(message) {
    let evt = JSON.parse(message.data);
    return evt.type === "CHECK-IN";
}

const HeaderEvent = () => {
    const [checkIn, setCheckIn] = useState(0);
    const dispatch = useDispatch();
    const event = useSelector((state) => state.dashboards.event);
    const { id } = useParams();
    const { lastJsonMessage } = useWebSocket(WS_URL, {
        share: true,
        filter: isCheckInOp,
    });

    useEffect(() => {
        if (lastJsonMessage?.payload) {
            setCheckIn(checkIn + 1);
        }
    }, [lastJsonMessage]);

    useEffect(() => {
        dispatch(getEventById(id));
    }, [dispatch, id]);

    useEffect(() => {
        setCheckIn(event.attendees?.present);
    }, [event]);

    return (
        <Box>
            <Box height="150px" width="100%" position="relative">
                <Image src={fotoevento} objectFit="cover" width="100%" height="100%" position="absolute" top="0" left="0" />
                <Flex position="absolute" width="100%" color="white" padding={5} justifyContent="space-between">
                    <Box>
                        <Text fontSize="md">{event.title}</Text>
                        <Text fontSize="xs">{event.description}</Text>
                        <Text fontSize="xs">{event.speacker}</Text>
                    </Box>

                    <Box textAlign="center">
                        <Text fontSize="md">{event.day}</Text>
                        <Text fontSize="xs">{event.month}</Text>
                    </Box>
                </Flex>
            </Box>

            <Flex justify="center" align="center" marginTop={-14} bgColor="#e6dfcf">
                <Box display="flex" flexDirection="column" align="center">
                    <Flex justifyContent="space-between" width="100%">
                        <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
                            <Text fontSize="2xs" fontWeight="bold" mb={1}>
                                Ins / Aforo
                            </Text>
                            <Text fontSize="xl">
                                {event.attendees?.registered} / {event.capacity}
                            </Text>
                        </Card>

                        <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8" borderColor="#cb7862">
                            <Text fontSize="2xs" fontWeight="bold" mb={1}>
                                Confirmados
                            </Text>
                            <Text fontSize="xl">{event.attendees?.confirmed}</Text>
                        </Card>

                        <Card flex="1" w={95} p={2} boxShadow="lg" borderRadius="lg" margin={2} bg="#f8f8f8">
                            <Text fontSize="2xs" fontWeight="bold" mb={1}>
                                Asist / Aforo
                            </Text>
                            <Text fontSize="xl">
                                {checkIn} / {event.capacity}
                            </Text>
                        </Card>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    );
};

export default HeaderEvent;
