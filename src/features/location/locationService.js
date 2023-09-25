import apiClient from "../../api/apiClient";

const getLocationById = async (id) => {
    const res = await apiClient.get(`/locations/getbyid/${id}`);
    return res.data;
};

const createLocation = async (formData) => {
    const res = await apiClient.post(`/locations/create`, formData);
    return res.data;
};

const updateLocation = async (id, formData) => {
    const res = await apiClient.put(`/locations/update/${id}`, formData);
    return res.data;
};

const deleteLocation = async (id) => {
    const res = await apiClient.delete(`/locations/delete/${id}`);
    return res.data;
};

const locationService = {
    createLocation,
    deleteLocation,
    getLocationById,
    updateLocation,
};

export default locationService;
