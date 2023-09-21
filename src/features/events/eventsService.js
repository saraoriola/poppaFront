import apiClient from "../../api/apiClient"; //para las llamadas implementamos el apiClient

const createEvent = async (eventData) => {
    try {
        const token = JSON.parse(localStorage.getItem("token"));
        const res = await apiClient.post("/events/create", eventData, {
            headers: {
                Authorization: token,
            },
            withCredentials: true,
        });
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const eventService = {
    createEvent,
};

export default eventService;
