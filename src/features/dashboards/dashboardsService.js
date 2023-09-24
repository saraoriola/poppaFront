import axios from 'axios';

const API_URL = "http://localhost:3001";

const getEventById = async (id) => {
      const res = await axios.get(`${API_URL}/dashboards/event/${id}`);
      return res.data;
  };

const dashboardsService = {
  getEventById,
};

export default dashboardsService;
