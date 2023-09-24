import axios from 'axios';

const API_URL = "http://localhost:3001/";

const getEventById = async (id) => {
      const res = await axios.get(`${API_URL}/dashboards/event/${id}`);
      return res.data;
  };

  const getAttendees = async (id) => {
      const res = await axios.get(`${API_URL}/dashboards/event/${id}/getAttendees`);
      return res.data;
    
  };

const dashboardsService = {
  getEventById,
  getAttendees
};

export default dashboardsService;
