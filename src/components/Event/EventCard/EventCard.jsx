import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getEventById } from "../../../features/event/eventSlice";
import eventImg from "../../../assets/images/desafio.jpg";
import EventDetailButtons from "../EventDetail/EventDetailButtons/EventDetailButtons";
import { BsCalendar3 } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { BiTimeFive } from "react-icons/bi";
import { MdMapsHomeWork } from "react-icons/md";
import { Card, Box, Text, HStack, Image, Spinner } from "@chakra-ui/react";
import QrGenerator from "../../Qr/Generator/QrGenerator";
import HeaderRender from "../../Header/HeaderRender/HeaderRender";

const EventCard = () => {
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
    }, []);

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <>
            <HeaderRender />
            <Card variant="unstyled">
                <Image src={eventImg} alt="Banner" w="312px" h="140px" ml="24px" mt="20px" borderRadius="4px" objectFit="cover" />
                <Text pl="24px" mt="5px" fontFamily="Nocturne-Black" color="#004368" fontSize="16px">
                    {event.title}
                </Text>
                <HStack ml="24px">
                    <HStack>
                        <BsCalendar3 size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            {event.dateTime}
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
                    <HStack ml="170px">
                        <MdMapsHomeWork size={13} color="#cb7862" />
                        <Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">
                            Aula 208
                        </Text>
                    </HStack>
                </HStack>
            </Card>
            <QrGenerator />
        </>
    );
};

export default EventCard;
