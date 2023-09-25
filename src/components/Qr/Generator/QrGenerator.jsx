import { Button, Stack } from "@chakra-ui/react";
import useQrGenerator from "../../../hooks/useQrGenerator";

const QrGenerator = (props) => {
    const [canvasRef] = useQrGenerator(props.eventId);

    const downloadQrImage = () => {
        const image = canvasRef.current.toDataURL("image/png", 1.0).replace("image/png", "image/octet-stream");
        var link = document.createElement("a");
        link.download = "generated-qr-code.png";
        link.href = image;
        link.click();
    };

    return (
        <Stack spacing={5} mb={10} mt={10}>
            <canvas ref={canvasRef} />
            <Button colorScheme="whatsapp" width={300} onClick={downloadQrImage}>
                Download as image
            </Button>
        </Stack>
    );
};

export default QrGenerator;
