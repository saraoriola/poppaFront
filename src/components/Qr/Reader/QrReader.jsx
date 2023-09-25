import { Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
import useQrReader from "../../../hooks/useQrReader";

const QrReader = () => {
    const [scanResult, setScanResult, isCheckIn, setIsCheckIn] = useQrReader();

    const resetScanner = (isCheckIn) => {
        setIsCheckIn(isCheckIn);
        setScanResult(null);
    };

    return (
        <Stack spacing={5} mb={10} mt={10}>
            <Heading>QR Reader</Heading>
            <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                    <Radio colorScheme="green" value="1" onChange={() => resetScanner(true)}>
                        Check-in
                    </Radio>
                    <Radio colorScheme="red" value="2" onChange={() => resetScanner(false)}>
                        Check-out
                    </Radio>
                </Stack>
            </RadioGroup>
            <div id="reader"></div>
            {scanResult && (
                <Text fontSize="50px" color={isCheckIn ? "green.200" : "tomato"}>
                    {scanResult}
                </Text>
            )}
        </Stack>
    );
};

export default QrReader;
