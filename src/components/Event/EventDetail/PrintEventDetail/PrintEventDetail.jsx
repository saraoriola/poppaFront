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
import { Box, Card, Text, HStack, Image, Spinner } from "@chakra-ui/react";

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

  if (isLoading) return <Spinner />;

  return (
    <>
      <Card m="auto" mt="12px" maxW="22.5rem" bg="#e6dfcf" boxShadow="0">
        <Image src={eventImg} alt="Banner" w="312px" h="140px" ml="24px" mt="20px" borderRadius="4px" objectFit="cover" />
        <Text pl="24px" mt="5px" fontFamily="Nocturne-Black" color="#004368" fontSize="16px">{event.title}</Text>
        <HStack ml="24px">
          <HStack><BsCalendar3 size={13} color="#cb7862" /><Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">{event.dateTime}</Text></HStack>
          <HStack ml="150px"><BiTimeFive size={13} color="#cb7862" /><Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">18:30 h</Text></HStack>
        </HStack>
        <HStack>
          <HStack ml="24px"><GoLocation size={13} color="#cb7862" /><Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">EDEM</Text></HStack>
          <HStack ml="210px"><MdMapsHomeWork size={13} color="#cb7862" /><Text fontFamily="PPTelegraf-Ultralight" fontSize="13" color="#847c7b">{event.location_id}</Text></HStack>
        </HStack>
      </Card>
      <Box><EventDetailButtons /></Box>
      <Box ml={6} mr={6} mt={2} p={2} backgroundColor='#f2f2f2' className='button' fontSize="13px" color="#847c7b" borderRadius={8} style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.4)' }}>Cuando en The Bridge hablamos de formación práctica e inmersiva, lo hacemos de verdad. Gracias al Reto de Tripulaciones nuestros alumnos pueden experimentar la mejor forma de trabajo en equipo, la manera de resolver problemas complejos y, por supuesto, aumentar su conocimiento en otras disciplinas, haciendo uso de metodologías de trabajo agile y de desarrollo de producto.</Box>
      <Box m="10px 25px 10px 25px"><Text>Categorias</Text><Text fontFamily="Telegraf-UltraLight">Implementar etiquetas. Lo pongo aquí porque se supone que son del evento.</Text></Box>
    </>
  );
};

export default PrintEventDetail;
