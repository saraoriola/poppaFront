import { Box } from "@chakra-ui/layout";
import React from "react";
import { useNavigate } from "react-router";
import { FaPlus } from "react-icons/fa";

const CreateEventButton = () => {
  const navigate = useNavigate();

  const goCreateEvent = () => navigate("/urlDeCrearEvento");
  
  return (
    <Box onClick={goCreateEvent} position="fixed" bottom="35" right="35" borderRadius="full" bg="#cb7862" width="36px" height="36px" display="flex" alignItems="center" justifyContent="center" border="2px solid #f2f2f2" color="#f2f2f2">
      <FaPlus size={14} />
    </Box>
  );
};

export default CreateEventButton;
