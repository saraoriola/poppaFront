import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import apiClient from "../api/apiClient";
import QRCode from "qrcode";

const useQrGenerator = (eventId) => {
    const [qrCode, setQrCode] = useState(null);
    const userConnected = useSelector((state) => state.auth.userConnected);
    const canvasRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        if (!userConnected) {
            navigate("/login");
            return;
        }

        apiClient.get(`/eventuser/${eventId}/qr`).then((res) => setQrCode(res.data.code));

        if (qrCode) {
            const qrCodeOptions = {
                width: 300,
                errorCorrectionLevel: "H",
            };
            QRCode.toCanvas(canvasRef.current, qrCode, qrCodeOptions, (error) => error && console.error(error));
        }
    }, [qrCode]);

    return [canvasRef];
};

export default useQrGenerator;
