import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router";

const CreateEventButton = () => {
  const navigate = useNavigate();

  const goCreateEvent = () => {
    navigate("/urlDeCrearEvento");
  };
  return (
    <Box onClick={goCreateEvent} position="fixed" bottom="35" right="35" color="orange" bg="white">
      <Button>+</Button>
    </Box>
  );
};

export default CreateEventButton;
