import { WS_URL } from "../utils/constants";
import { useEffect } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";

const useDashboard = () => {
    const { sendJsonMessage, readyState } = useWebSocket(WS_URL, {
        onOpen: () => {
            console.log("WebSocket connection established.");
        },
        share: true,
        filter: () => false,
        retryOnError: true,
        shouldReconnect: () => true,
    });

    useEffect(() => {
        if (readyState === ReadyState.OPEN) {
            sendJsonMessage({
                type: "newConnectionEvent",
            });
        }
    }, [sendJsonMessage, readyState]);

    return [sendJsonMessage, readyState];
};

export default useDashboard;
