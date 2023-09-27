import React from "react";
import { AiOutlineShareAlt, AiFillCalendar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const EventDetailButtons = ({ registered }) => {
  const [isRegistered, setIsRegistered] = React.useState(registered);

  const handleRegister = () => {
    setIsRegistered(!isRegistered);
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
          {isRegistered ? "Desinscribirse" : "Inscribirse"}
        </Button>
      </Flex>
      {isRegistered && (
        <>
          <Flex justifyContent="space-evenly" padding="1rem">
            {/* Resto del contenido para usuarios inscritos */}
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
