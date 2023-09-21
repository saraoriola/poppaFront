import { Box } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllEvents } from "../../../features/event/eventSlice";

const GetAllEvents = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, []);

  return <Box>GetAllEvents</Box>;
};

export default GetAllEvents;
