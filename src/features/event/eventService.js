import apiClient from "../../api/apiClient";

const getAllEvents = async () => {
  const res = await apiClient.get("/events/getall");
  return res.data;
};

const getEventById = async (id) => {
  const res = await apiClient.get("/events/getbyid/" + id);
  return res.data;
};

const getEventByTitle = async (title) => {
  const res = await apiClient.get("/events/getbytitle/" + title);
  return res.data;
};

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
  getAllEvents,
  getEventById,
  getEventByTitle,
  createEvent,
};

export default eventService;
