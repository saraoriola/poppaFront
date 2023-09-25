import { Button } from "@chakra-ui/button";
import React from "react";
import { useNavigate } from "react-router";

const CreateEventButton = () => {
  const navigate = useNavigate();

  const goCreateEvent = () => {
    // NOTE: Acabar esto
    navigate("/urlDeCrearEvento");
  };
  return <Button onClick={goCreateEvent}>+</Button>;
};

export default CreateEventButton;
