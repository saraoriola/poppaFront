import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      height="40px"
      mt="12px"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bg="#847c7b"
      color="#f2f2f2"
      fontFamily="Telegraf-UltraLight"
      fontSize="xs"
      textDecor="underline"
    >
      <Link to="https://marinadeempresas.es/politica-de-cookies/">
        Política de Cookies
      </Link>
      <Link to="https://marinadeempresas.es/aviso-legal/">Aviso Legal</Link>
      <Link to="https://marinadeempresas.es/politica-de-privacidad/">
        Política de Privacidad
      </Link>
    </Box>
  );
};

export default Footer;
