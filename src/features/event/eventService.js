import axios from "axios";
import apiClient from "../../api/apiClient";

const API_URL = "http://localhost:3001/events/";

const getAllEvents = async () => {
  const res = await axios.get(API_URL + "getall");
  return res.data;
};

const getEventByTitle = async (title) => {
  const res = await axios.get(API_URL + "getbytitle/" + title);
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
  getEventByTitle,
  createEvent,
};

export default eventService;
