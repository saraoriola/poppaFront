import { API_URL } from "../utils/constants";
import axios from "axios";

const apiClient = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = token ? token : "";
    return config;
});

export const getImageURL = (imagePath) => {
    return apiClient.getUri() + "/uploads/" + imagePath;
};

export default apiClient;
