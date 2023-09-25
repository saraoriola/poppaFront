import React from "react";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Text,
} from "@chakra-ui/react";
import eventImg from "../../../assets/images/Imagen y badges.png";
import { useSelector } from "react-redux";

const PrintEvents = ({ filteredEvents }) => {
  return (
    <>
      {filteredEvents.map((event) => (
        <Card key={event.id} m="auto" mt="12px" maxW="22.5rem">
          {/* NOTE: Aquí iría la url del banner */}
          <CardHeader p="10px">
            <Image src={eventImg} alt="Dan Abramov" w="22.5rem" />
          </CardHeader>
          {/* Como utilizo aquí la variable del scss de estilos */}
          <CardBody p="0px 10px 10px" fontFamily="Nocturne-Black" color="blue">
            <Text>{event.title}</Text>
            {/* <Text>{event.description}</Text> */}
          </CardBody>
          <CardFooter display="flex" p="0px 10px 10px">
            <Box>{event.dateTime}</Box>
            {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
            <Box>{event.duration_min}</Box>
            <Box>EDEM</Box>
          </CardFooter>
        </Card>
      ))}
    </>
  );
};

export default PrintEvents;
