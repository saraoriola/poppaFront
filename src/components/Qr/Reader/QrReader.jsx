import { Radio, RadioGroup, Stack, Text, Box } from "@chakra-ui/react";
import useQrReader from "../../../hooks/useQrReader";
import "./QrReader.scss";
import { useState } from "react"; // Importa useState desde React

const QrReader = () => {
    const [scanResult, setScanResult, isCheckIn, setIsCheckIn] = useQrReader();
    const [showMessage, setShowMessage] = useState(false); // Define el estado showMessage

    const resetScanner = (isCheckIn) => {
        setIsCheckIn(isCheckIn);
        setScanResult(null);
        setShowMessage(true); // Mostrar el mensaje cuando se cambia isCheckIn
        setTimeout(() => {
            setShowMessage(false); // Ocultar el mensaje después de 2 segundos
        }, 2000);
    };

    return (
        <Box>
            <RadioGroup defaultValue="1" ml="20px" mt="50px" p="10px">
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

            {/* Mostrar el mensaje */}
            {showMessage && (
                <Text fontSize="20px" color={isCheckIn ? "green.200" : "tomato"}>
                    {isCheckIn ? "Registrado" : "Error al registrar"}
                </Text>
            )}
        </Box>
    );
};

export default QrReader;
