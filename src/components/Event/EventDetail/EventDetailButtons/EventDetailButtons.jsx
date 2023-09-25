import { Button } from "@chakra-ui/button";
import { Box } from "@chakra-ui/layout";
import React from "react";

const EventDetailButtons = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      mt="24px"
      mb="12px"
      ml="25px"
      mr="25px"
    >
      <Button fontFamily="telegrafRegular" bg="orange" color="white" w="148px">
        Compartir
      </Button>
      <Button fontFamily="telegrafRegular" bg="orange" color="white" w="148px">
        Inscribirse
      </Button>
    </Box>
  );
};

export default EventDetailButtons;
