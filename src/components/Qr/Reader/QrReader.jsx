import { Radio, RadioGroup, Stack, Text, Flex, Box } from "@chakra-ui/react";
import useQrReader from "../../../hooks/useQrReader";
import "./QrReader.scss";
import { useState } from "react"; // Importa useState desde React
import { Link } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";

const QrReader = () => {
    const [scanResult, setScanResult, isCheckIn, setIsCheckIn] = useQrReader();
    const [showMessage, setShowMessage] = useState(false);
    const resetScanner = (isCheckIn) => {
        setIsCheckIn(isCheckIn);
        setScanResult(null);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    return (
        <Flex
            align="center" // Centra verticalmente
            justify="center" // Centra horizontalmente
            minHeight="100vh" // Establece la altura mínima para centrar en la parte inferior
        >
            <Box>
                <RadioGroup defaultValue="1" ml="20px" p="10px">
                    <Stack spacing={5} direction="row">
                        <Radio colorScheme="green" value="1" onChange={() => resetScanner(true)}>
                            Escanear usuario
                        </Radio>
                        {/* <Radio colorScheme="red" value="2" onChange={() => resetScanner(false)}>
                  Check-out
                </Radio> */}
                    </Stack>
                </RadioGroup>
                <div id="reader"></div>

                {showMessage && (
                    <Text fontSize="15px" color={isCheckIn ? "green.200" : "tomato"}>
                        {isCheckIn ? "Registrado" : "Error al registrar"}
                    </Text>
                )}
                <Box mt="50px">
                    <Link to="/approved/accepted" style={{ display: "flex", justifyContent: "center", opacity: 0.8 }}>
                        <IoArrowBackCircle size="50px" />
                    </Link>
                </Box>
            </Box>
        </Flex>
    );
};

export default QrReader;
