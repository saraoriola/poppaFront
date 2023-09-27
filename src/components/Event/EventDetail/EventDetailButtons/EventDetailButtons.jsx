import React, { useState } from "react";
import { AiOutlineShareAlt, AiFillCalendar } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { Flex, Button } from "@chakra-ui/react";

const EventDetailButtons = ({ registered }) => {
  const { id } = useParams();
  const [isRegistered, setIsRegistered] = useState(registered);

  const handleRegister = () => setIsRegistered(!isRegistered);

  return (
    <>
      <Flex justifyContent="space-between" mt={5} ml={5} mr={6}>
        <Flex gap="1rem" ml={1}>
          <AiOutlineShareAlt size="28" color="#cb7862" />
          <AiFillCalendar size="28" color="#cb7862" />
        </Flex>
        <Button
          bg="#cb7862"
          color="white"
          w="148px"
          h="32px"
          onClick={handleRegister}
        >
          {isRegistered ? "Desinscribirse" : "Inscribirse"}
        </Button>
      </Flex>
      {isRegistered && (
        <>
          <Flex justifyContent="space-evenly" padding="1rem">
            <Link to={`/eventcard/${id}`}>
              <Button bg="#cb7862" color="white" w="148px" h="32px">
                Entrada QR
              </Button>
            </Link>
            <Button bg="#cb7862" color="white" w="148px" h="32px">
              Foro
            </Button>
          </Flex>
          <Flex justifyContent="center">
            <Button bg="#cb7862" color="white" w="310px" h="32px">
              Enlace a la sesión
            </Button>
          </Flex>
        </>
      )}
    </>
  );
};

export default EventDetailButtons;
