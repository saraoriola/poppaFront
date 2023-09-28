import React from "react";
import { Box, Card, CardBody, CardFooter, CardHeader, Image, Text } from "@chakra-ui/react";
import { BsCalendar3 } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import { BiTimeFive } from 'react-icons/bi';
import { MdMapsHomeWork } from 'react-icons/md';
import eventImg from "../../../assets/images/Imagen y badges.png";
import { Link } from "react-router-dom";

const PrintEvents = ({ filteredEvents }) => {
  return (
    <>
      {filteredEvents.map((event) => (
        <Link key={event.id} to={"/eventdetail/" + event.id}>
          <Card mb="12px" width="312px" height="215px">
            <CardHeader p="8px">
              <Image src={eventImg} alt="Event" w="296px" h="132px" />
            </CardHeader>
            <CardBody fontFamily="Nocturne-Black" color="#004368" mt={-5} ml={-2}>
              <Text>{event.title}</Text>
            </CardBody>
            <CardFooter p="0px 10px" fontFamily="PPTelegraf-UltraLight" fontSize={13} display="grid" gridTemplateColumns="1fr 1fr 1fr" alignItems="center" mb={5}>
              <Box display="flex" alignItems="center"><BsCalendar3 size={15} color="#cb7862" /><Box ml="5px">{event.dateTime}</Box></Box>
              <Box display="flex" alignItems="center" justifyContent="center"><BiTimeFive size={20} color="#cb7862" /><Box ml="5px">{event.duration_min}</Box></Box>
              <Box display="flex" alignItems="center" justifyContent="flex-end"><GoLocation size={15} color="#cb7862" /><Box ml="5px">EDEM</Box></Box>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default PrintEvents;
