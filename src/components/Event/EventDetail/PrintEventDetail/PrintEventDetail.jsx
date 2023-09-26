import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { getEventById } from "../../../../features/event/eventSlice";
import eventImg from "../../../../assets/images/desafio.jpg";
import EventDetailButtons from "../EventDetailButtons/EventDetailButtons";
import { AiFillCalendar, AiOutlineClockCircle } from "react-icons/ai";

const PrintEventDetail = () => {
    const { id } = useParams();
    const { event, isLoading } = useSelector((state) => state.event);
    const dispatch = useDispatch();

    console.log(event);
    useEffect(() => {
        async function fetchData() {
            try {
                dispatch(getEventById(id));
            } catch (error) {
                console.error("Hubo un problema");
            }
        }
        fetchData();
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <Box></Box>
            <Box>
                <Card m="auto" mt="12px" maxW="22.5rem" bg="#e6dfcf" boxShadow="0">
                    <Image src={eventImg} alt="Banner" w="312px" h="140px" ml="24px" mt="20px" borderRadius="4px" objectFit="cover" />

                    <Text pl="24px" mt="5px" fontFamily="Nocturne-Black" color="#004368" fontSize="16px">
                        {event.title}
                    </Text>
                    {/* <Text>{event.description}</Text> */}

                    <CardFooter display="column" p="0px 10px 10px" fontFamily="Telegraf-UltraLight" color="#847c7b">
                        <Box display="flex" justifyContent="space-between">
                            <Box display="flex" alignItems="center" gap="5px">
                                <AiFillCalendar color="#cb7862" />
                                <Box>{event.dateTime}</Box>
                            </Box>
                            <Box display="flex" alignItems="center" gap="5px">
                                <AiOutlineClockCircle color="#cb7862" />
                                <Box>{event.duration_min}</Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between">
                            <Box display="flex" alignItems="center" gap="5px">
                                <AiFillCalendar color="#cb7862" />
                                <Box>EDEM</Box>
                            </Box>
                            <Box display="flex" alignItems="center" gap="5px">
                                <AiOutlineClockCircle color="#cb7862" />
                                <Box>{event.location_id}</Box>
                            </Box>
                        </Box>
                        <Box display="flex" justifyContent="space-between"></Box>
                    </CardFooter>
                </Card>

                <Box>
                    <EventDetailButtons />
                </Box>

                <Box borderRadius="15px" m="0px 25px 12px 25px" padding="10px" bg="#f2f2f2" textAlign="justify" color="#847c7b">
                    <Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporis, sequi quam hic facere esse aperiam praesentium accusamus quis aut, autem consequuntur quos est
                        exercitationem labore non suscipit omnis porro.
                    </Text>
                </Box>

                <Box m="10px 25px 10px 25px">
                    <Text>Categorias</Text>
                    <Text fontFamily="Telegraf-UltraLight">Implementar etiquetas. Lo pongo aquí porque se supone que son del evento.</Text>
                </Box>
            </Box>
        </>
    );
};

export default PrintEventDetail;
