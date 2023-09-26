import { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import apiClient from "../api/apiClient";

const useQrReader = () => {
    const [scanResult, setScanResult] = useState(null);
    const [isCheckIn, setIsCheckIn] = useState(true);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 2,
        });

        const success = (result) => {
            setScanResult(result);
            const operation = isCheckIn ? "userCheckIn" : "userCheckOut";
            apiClient.post("/eventuser/" + operation, { qrtoken: result });
        };

        scanner.render(success);
    }, [isCheckIn]);

    return [scanResult, setScanResult, isCheckIn, setIsCheckIn];
};

export default useQrReader;
