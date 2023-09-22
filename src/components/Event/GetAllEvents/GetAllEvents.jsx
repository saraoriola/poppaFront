import { Box, Card, CardBody, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";
import PrintEvents from "../PrintEvents/PrintEvents";

const GetAllEvents = () => {
  const { events, isLoading } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    //Cada vez que se añada un evento se reflejará aquí. Le pongo el if para que no se ejecute siempre.
    if (!events.length) {
      dispatch(getAllEvents());
    }
  }, [events]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <PrintEvents />
    </>
  );
};

export default GetAllEvents;
