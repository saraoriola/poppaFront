import { Box, Button, Icon, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const TopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Muestra el botón cuando el usuario ha desplazado cierta distancia
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Limpia el evento de desplazamiento al desmontar el componente
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Lógica para desplazarse hacia la parte superior de la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {showButton && (
        <Box
          onClick={scrollToTop}
          position="fixed"
          bottom="35"
          left="35"
          color="orange"
          borderRadius="full"
          bg="white"
        >
          <AiOutlineArrowUp />
        </Box>
      )}
    </>
  );
};

export default TopButton;
