import axios from "axios";

const API_URL = "http://localhost:3001";

const getEventById = async (id) => {
  try {
    const res = await axios.get(`${API_URL}/dashboards/event/${id}`);
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
