import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : "https://eventum-back.vercel.app";
// const API_URL = import.meta.env.VITE_API_URL ? import.meta.env.VITE_API_URL : "http://ec2-44-201-235-108.compute-1.amazonaws.com:8080";

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
