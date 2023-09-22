import { Box, Card, CardBody, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";
import Search from "../../Header/Search/Search";

const GetAllEvents = () => {
  const { isLoading } = useSelector((state) => state.event);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return null;
};

export default GetAllEvents;
