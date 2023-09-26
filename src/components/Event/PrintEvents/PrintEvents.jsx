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
import { Link } from "react-router-dom";

const PrintEvents = ({ filteredEvents }) => {
  return (
    <>
      {filteredEvents.map((event) => (
        <Link key={event.id} to={"/eventdetail/" + event.id}>
          <Card m="auto" mt="12px" maxW="22.5rem">
            {/* NOTE: Aquí iría la url del banner */}
            <CardHeader p="10px">
              <Image src={eventImg} alt="Event" w="22.5rem" />
            </CardHeader>
            <CardBody
              p="0px 10px 10px"
              fontFamily="Nocturne-Black"
              color="#004368"
            >
              <Text>{event.title}</Text>
            </CardBody>
            <CardFooter display="flex" p="0px 10px 10px">
              <Box>{event.dateTime}</Box>
              {/* Aquí de momento dejo la duración del evento ya que en dateTime supongo que está la hora */}
              <Box>{event.duration_min}</Box>
              <Box>EDEM</Box>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default PrintEvents;
