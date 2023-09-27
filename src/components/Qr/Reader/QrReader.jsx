import { Radio, RadioGroup, Stack, Text, Box } from "@chakra-ui/react";
import useQrReader from "../../../hooks/useQrReader";
import "./QrReader.scss";

const QrReader = () => {
    const [scanResult, setScanResult, isCheckIn, setIsCheckIn] = useQrReader();

    const resetScanner = (isCheckIn) => {
        setIsCheckIn(isCheckIn);
        setScanResult(null);
    };

    return (
        <Box pt="200px" pb="350px">
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1" onChange={() => resetScanner(true)}>
                        Check-in
                    </Radio>
                    {/* <Radio colorScheme="red" value="2" onChange={() => resetScanner(false)}>
                        Check-out
                    </Radio> */}
                </Stack>
            </RadioGroup>
            <div id="reader"></div>
            {scanResult && (
                <Text fontSize="20px" color={isCheckIn ? "green.200" : "tomato"}>
                    {scanResult}
                </Text>
            )}
        </Box>
    );
};

export default QrReader;
