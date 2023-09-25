import { Box, Button, Center, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import HeaderRender from "../Header/HeaderRender/HeaderRender";

const Counter = () => {
  const [i, setI] = useState(0);

  const increment = () => {
    setI(i + 1);
  };

  const decrement = () => {
    if (i > 0) {
      setI(i - 1);
    }
  };

  return (
    <Box>
      <HeaderRender />
      <Box m="24px 15px 15px 15px">
        <Text textAlign="center" mb="28px">
          Contador de salidas
        </Text>
        <Text textAlign="justify">
          Podemos llevar un registro de salidas de asistentes antes de la
          finalización del evento. Simplemente marca el botón + cada vez que un
          asistente abandone el evento para dejar registro de hora exacta de
          salida. Si por error marcas una salida, puedes deshacerla con el botón
          -.
        </Text>
      </Box>
      <Box textAlign="center">
        <Text fontSize="120" fontFamily="telegrafRegular">
          {i}
        </Text>
        <Text>Asistentes</Text>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        gap="60px"
        mt="140px"
        color="orange"
        bg="white"
      >
        <Button
          onClick={decrement}
          width="6.5rem"
          height="6.5rem"
          fontSize="60"
        >
          -
        </Button>
        <Button
          onClick={increment}
          width="6.5rem"
          height="6.5rem"
          color="white"
          bg="orange"
          fontSize="60"
        >
          +
        </Button>
      </Box>
    </Box>
  );
};

export default Counter;
