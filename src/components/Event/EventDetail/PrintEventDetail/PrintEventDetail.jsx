import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Spinner } from "@chakra-ui/spinner";
import { Card, CardBody, CardFooter, CardHeader } from "@chakra-ui/card";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { getEventById } from "../../../../features/event/eventSlice";
import eventImg from "../../../../assets/images/fotoevento.jpg";
import EventDetailButtons from "../EventDetailButtons/EventDetailButtons";

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
    <Box>
      <Card m="auto" mt="12px" maxW="22.5rem">
        {/* NOTE: Aquí iría la url del banner */}
        <CardHeader p="10px">
          <Image src={eventImg} alt="Banner" w="22.5rem" />
        </CardHeader>
        {/* Como utilizo aquí la variable del scss de estilos */}
        <CardBody
          p="0px 10px 10px"
          fontFamily="Nocturne-Black"
          color="blue"
          fontSize="xl"
        >
          <Text>{event.title}</Text>
          {/* <Text>{event.description}</Text> */}
        </CardBody>
        <CardFooter display="column" p="0px 10px 10px">
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>{event.dateTime}</Box>
            <Box>{event.duration_min}</Box>
          </Box>
          <Box style={{ display: "flex", justifyContent: "space-between" }}>
            <Box>EDEM</Box>
            <Box>{event.location_id}</Box>
          </Box>
        </CardFooter>
      </Card>

      <Box>
        <EventDetailButtons />
      </Box>

      <Box>
        <Text mb="12px" ml="25px" mr="25px">
          {event.description}
        </Text>
      </Box>

      <Box>
        <Text>
          Implementar etiquetas. Lo pongo aquí porque se supone que son del
          evento.
        </Text>
      </Box>
    </Box>
  );
};

export default PrintEventDetail;
