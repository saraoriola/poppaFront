import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getEventById } from "../../../features/event/eventSlice";
import { Spinner } from "@chakra-ui/spinner";

const EventDetail = () => {
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

  return <div>EventDetail</div>;
};

export default EventDetail;
