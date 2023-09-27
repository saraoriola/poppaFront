import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getEventById } from "../../../../features/event/eventSlice";
import eventImg from "../../../../assets/images/desafio.jpg";
import EventDetailButtons from "../EventDetailButtons/EventDetailButtons";
import { BsCalendar3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { MdMapsHomeWork } from "react-icons/md";
import { Card, Box, Text, HStack, Image, Spinner } from "@chakra-ui/react";

const PrintEventDetail = () => {
    const { id } = useParams();
    const { event, isLoading } = useSelector((state) => state.event);
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                dispatch(getEventById(id));
            } catch (error) {
                console.error("Hubo un problema");
            }
        }
        fetchData();
    }, [dispatch, id]);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <Card m="auto" mt="12px" maxW="22.5rem" bg="#e6dfcf" boxShadow="0">
                <Image src={eventImg} alt="Banner" w="312px" h="140px" ml="24px" mt="20px" borderRadius="4px" objectFit="cover" />
                <Text pl="24px" mt="5px" fontFamily="Nocturne-Black" color="#004368" fontSize="16px">
                    {event.title}
                </Text>
                <HStack ml="24px">
                    <HStack>
                        <BsCalendar3 size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            {/* {event.dateTime.split("-").reverse().join("-")} */}
                        </Text>
                    </HStack>
                    <HStack ml="150px">
                        <BiTimeFive size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            18:30 h
                        </Text>
                    </HStack>
                </HStack>
                <HStack>
                    <HStack ml="24px">
                        <GoLocation size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            EDEM
                        </Text>
                    </HStack>
                    <HStack ml="210px">
                        <MdMapsHomeWork size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            {event.location_id}
                        </Text>
                    </HStack>
                </HStack>
            </Card>

            <Box m="10px 25px 10px 25px">
                <Text>Categorias</Text>
                <Text fontFamily="Telegraf-UltraLight">Implementar etiquetas. Lo pongo aquí porque se supone que son del evento.</Text>
            </Box>

            <Box borderRadius="15px" m="0px 25px 12px 25px" padding="10px" bg="#f2f2f2" textAlign="justify" color="#847c7b">
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae corporis, sequi quam hic facere esse aperiam praesentium accusamus quis aut, autem consequuntur quos est
                    exercitationem labore non suscipit omnis porro.
                </Text>
            </Box>

            <Box>
                <EventDetailButtons />
            </Box>
        </>
    );
};

export default PrintEventDetail;
