import apiClient from "../../api/apiClient";

const createLocation = async (formData) => {
    const res = await apiClient.post("/locations/create", formData);
    return res.data;
};

const deleteLocation = async (id) => {
    const res = await apiClient.delete(`/locations/delete/${id}`);
    return res.data;
};

const getLocationById = async (id) => {
    const res = await apiClient.get(`/locations/getbyid/${id}`);
    return res.data;
};

const locationService = {
    createLocation,
    deleteLocation,
    getLocationById,
};

export default locationService;
