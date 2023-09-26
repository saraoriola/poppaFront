import { Button } from "@chakra-ui/button";
import { Box, Flex } from "@chakra-ui/layout";
import React, { useState } from "react";
import { AiOutlineShareAlt, AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";

const EventDetailButtons = () => {
  const [registered, setRegistered] = useState(false);

  const handleRegister = () => {
    setRegistered(!registered);
  };

  return (
    <>
      <Flex justifyContent="space-between" padding="1rem">
        <Flex gap="1rem">
          <AiOutlineShareAlt size="36" color="#cb7862" />
          <AiFillCalendar size="36" color="#cb7862" />
        </Flex>
        <Button
          fontFamily="Telegraf-Regular"
          bg="#cb7862"
          color="white"
          minW="148px"
          onClick={handleRegister}
        >
          {registered ? "Desinscribirse" : "Inscribirse"}
        </Button>
      </Flex>
      {registered && (
        <>
          <Flex justifyContent="space-evenly" padding="1rem">
            {/* NOTE: Enlace a la pantalla qr */}
            {/* NOTE: Solucionar bug de que cuando pulso el botón se queda blanco */}
            {/* NOTE: Cabmiar Iconos a los buenos */}
            {/* NOTE: Reajustar los botones para que se vean bien */}
            {/* NOTE: No sé porque abajo del todo me sale download as image (tampoco he mirado por que xd) */}
            {/* NOTE: Hardcodear las categorías */}
            <Link to={""}>
              <Button
                fontFamily="Telegraf-Regular"
                bg="#f2f2f2"
                border="1px"
                borderColor="#cb7862"
                color="#cb7862"
                minW="148px"
              >
                Entrada QR
              </Button>
            </Link>
            <Button
              fontFamily="Telegraf-Regular"
              bg="#f2f2f2"
              border="1px"
              borderColor="#cb7862"
              color="#cb7862"
              minW="148px"
            >
              Foro
            </Button>
          </Flex>
          <Flex justifyContent="center" padding="1rem">
            <Button
              fontFamily="Telegraf-Regular"
              bg="#f2f2f2"
              border="1px"
              borderColor="#cb7862"
              color="#cb7862"
              minW="312px"
            >
              Enlace a la sesión
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

export default EventDetailButtons;
