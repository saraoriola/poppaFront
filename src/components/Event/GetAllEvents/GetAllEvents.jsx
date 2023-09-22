import { Box, Card, CardBody, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";
import PrintEvents from "../PrintEvents/PrintEvents";

const GetAllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  return null; // Este componente no renderiza nada directamente
};

export default GetAllEvents;