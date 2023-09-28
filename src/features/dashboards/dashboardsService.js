import apiClient from "../../api/apiClient";

const getEventById = async (id) => {
    try {
        const res = await apiClient.get(`/dashboards/event/${id}`);
        return res.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const dashboardsService = {
    getEventById,
};

export default dashboardsService;
